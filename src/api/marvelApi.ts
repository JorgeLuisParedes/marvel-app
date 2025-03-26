import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const marvelApi = createApi({
	reducerPath: 'marvelApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dragonball-api.com/api/',
	}),
	endpoints: builder => ({
		getCharacters: builder.query({
			query: () => `characters?page=1&limit=50`,
			keepUnusedDataFor: 86400,
		}),
		getCharacterById: builder.query({
			query: (id: string | number) => `characters/${id}`,
		}),
	}),
	refetchOnMountOrArgChange: false,
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = marvelApi;
