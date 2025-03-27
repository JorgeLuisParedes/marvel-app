import { useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import {
	useGetCharacterByIdQuery,
	useGetCharactersQuery,
} from '../../api/marvelApi';

export const TopProgressBar = () => {
	const ref = useRef<LoadingBarRef>(null);

	const isFetchingCharacters = useGetCharactersQuery(null, {
		skip: false,
	}).isFetching;
	const isFetchingDetails = useGetCharacterByIdQuery('', {
		skip: true,
	}).isFetching;

	const isFetching = isFetchingCharacters || isFetchingDetails;

	useEffect(() => {
		if (isFetching) {
			ref.current?.continuousStart();
		} else {
			ref.current?.complete();
		}
	}, [isFetching]);

	return <LoadingBar ref={ref} color='#EC1D24' height={3} />;
};
