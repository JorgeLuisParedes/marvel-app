import { useState, ChangeEvent } from 'react';

type UseSearchInputReturn = {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useSearchInput = (
	onSearchChange: (term: string) => void
): UseSearchInputReturn => {
	const [value, setValue] = useState('');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		onSearchChange(newValue);
	};

	return {
		value,
		onChange,
	};
};
