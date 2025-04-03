import { renderHook } from '@testing-library/react';
import { useCharacterDetails } from 'hooks/useCharacterDetails';
import * as api from 'api/marvelApi';
import * as reactRouter from 'react-router-dom';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn(),
}));

jest.mock('api/marvelApi', () => ({
	...jest.requireActual('api/marvelApi'),
	useGetCharacterByIdQuery: jest.fn(),
}));

describe('useCharacterDetails', () => {
	const mockCharacter = {
		id: 1,
		name: 'Goku',
		image: 'goku.jpg',
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('retorna datos correctamente cuando hay resultados', () => {
		jest.spyOn(reactRouter, 'useParams').mockReturnValue({ id: '1' });
		(api.useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
			data: mockCharacter,
			isLoading: false,
			error: null,
		});

		const { result } = renderHook(() => useCharacterDetails());

		expect(result.current.character).toEqual(mockCharacter);
		expect(result.current.isLoading).toBe(false);
		expect(result.current.error).toBe(null);
	});

	it('retorna loading=true cuando la data está cargando', () => {
		jest.spyOn(reactRouter, 'useParams').mockReturnValue({ id: '1' });
		(api.useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
			data: null,
			isLoading: true,
			error: null,
		});

		const { result } = renderHook(() => useCharacterDetails());

		expect(result.current.isLoading).toBe(true);
		expect(result.current.character).toBe(null);
	});

	it('retorna error cuando hay una falla', () => {
		jest.spyOn(reactRouter, 'useParams').mockReturnValue({ id: '1' });
		const fakeError = new Error('Algo salió mal');
		(api.useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
			data: null,
			isLoading: false,
			error: fakeError,
		});

		const { result } = renderHook(() => useCharacterDetails());

		expect(result.current.error).toBe(fakeError);
	});
});
