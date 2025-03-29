import { useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../api/marvelApi';

export const useCharacterDetails = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isLoading, error } = useGetCharacterByIdQuery(id ?? '');

	return {
		character: data,
		isLoading,
		error,
	};
};
