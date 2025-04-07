import { render } from '@testing-library/react';
import { TopProgressBar } from 'components/ui/TopProgressBar';
import * as marvelApi from 'api/marvelApi';
import React, { MutableRefObject } from 'react';
import { LoadingBarRef } from 'react-top-loading-bar';

// ✅ Ahora importás los mocks de forma separada
import {
	continuousStart,
	complete,
} from '../../utils/react-top-loading-bar-mocks';

jest.mock('react-top-loading-bar');
jest.mock('api/marvelApi', () => ({
	...jest.requireActual('api/marvelApi'),
	useGetCharactersQuery: jest.fn(),
	useGetCharacterByIdQuery: jest.fn(),
}));

describe('TopProgressBar', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('llama a continuousStart cuando isFetching es true', () => {
		(marvelApi.useGetCharactersQuery as jest.Mock).mockReturnValue({
			isFetching: true,
		});
		(marvelApi.useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
			isFetching: false,
		});

		jest.spyOn(React, 'useRef').mockReturnValueOnce({
			current: { continuousStart },
		} as MutableRefObject<Partial<LoadingBarRef>>);

		render(<TopProgressBar />);
		expect(continuousStart).toHaveBeenCalled();
		expect(complete).not.toHaveBeenCalled();
	});

	it('llama a complete cuando isFetching es false', () => {
		(marvelApi.useGetCharactersQuery as jest.Mock).mockReturnValue({
			isFetching: false,
		});
		(marvelApi.useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
			isFetching: false,
		});

		jest.spyOn(React, 'useRef').mockReturnValueOnce({
			current: { complete },
		} as MutableRefObject<Partial<LoadingBarRef>>);

		render(<TopProgressBar />);
		expect(complete).toHaveBeenCalled();
		expect(continuousStart).not.toHaveBeenCalled();
	});
});
