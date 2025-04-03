import { renderHook, act } from '@testing-library/react';
import { useSearchInput } from 'hooks/useSearchInput';

describe('useSearchInput', () => {
	it('inicia con value vacío', () => {
		const onSearchChange = jest.fn();
		const { result } = renderHook(() => useSearchInput(onSearchChange));

		expect(result.current.value).toBe('');
	});

	it('actualiza el value al cambiar el input', () => {
		const onSearchChange = jest.fn();
		const { result } = renderHook(() => useSearchInput(onSearchChange));

		act(() => {
			result.current.onChange({
				target: { value: 'goku' },
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.value).toBe('goku');
	});

	it('llama a onSearchChange con el nuevo valor', () => {
		const onSearchChange = jest.fn();
		const { result } = renderHook(() => useSearchInput(onSearchChange));

		act(() => {
			result.current.onChange({
				target: { value: 'vegeta' },
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(onSearchChange).toHaveBeenCalledWith('vegeta');
	});
});
