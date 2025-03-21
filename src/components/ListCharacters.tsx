import { useEffect } from 'react';
import { Character } from './Character';
import { useGetCharactersQuery } from '../api/marvelApi';
import { Character as CharacterType } from '../types/CharacterTypes';

interface ListCharactersProps {
	searchTerm: string;
	setResultCount: (count: number) => void;
}

export const ListCharacters: React.FC<ListCharactersProps> = ({
	searchTerm,
	setResultCount,
}) => {
	const { data, error, isLoading } = useGetCharactersQuery(null);

	// Filtrar personajes por el término de búsqueda
	const filteredCharacters: CharacterType[] =
		data?.items.filter(({ name }: CharacterType) =>
			name.toLowerCase().includes(searchTerm.toLowerCase())
		) || [];

	// 🟢 MOVEMOS `useEffect` ARRIBA PARA QUE SE EJECUTE SIEMPRE
	useEffect(() => {
		setResultCount(filteredCharacters.length);
	}, [filteredCharacters.length, setResultCount]);

	useEffect(() => {
		if (!isLoading && !error) {
			setResultCount(filteredCharacters.length);
		}
	}, [filteredCharacters.length, setResultCount, isLoading, error]);

	// 🚀 Ahora los retornos tempranos están después del useEffect
	if (isLoading) return <p>Cargando personajes...</p>;
	if (error) return <p>Error al obtener personajes.</p>;

	return (
		<div className='mt-7 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7'>
			{filteredCharacters.map(({ id, image, name }) => (
				<Character key={id} id={id} image={image} name={name} />
			))}
		</div>
	);
};
