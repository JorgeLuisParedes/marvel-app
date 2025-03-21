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
	}),
	refetchOnMountOrArgChange: false,
});

export const { useGetCharactersQuery } = marvelApi;
