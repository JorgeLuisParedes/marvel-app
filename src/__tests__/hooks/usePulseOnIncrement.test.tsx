import { renderHook, act, waitFor } from '@testing-library/react';
import { usePulseOnIncrement } from 'hooks/usePulseOnIncrement';

describe('usePulseOnIncrement', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.runOnlyPendingTimers();
		jest.useRealTimers();
	});

	it('retorna false inicialmente', () => {
		const { result } = renderHook(() => usePulseOnIncrement(0));
		expect(result.current).toBe(false);
	});

	it('retorna true si el valor incrementa', () => {
		const { result, rerender } = renderHook(
			({ value }) => usePulseOnIncrement(value),
			{ initialProps: { value: 0 } }
		);

		rerender({ value: 1 });

		expect(result.current).toBe(true);
	});

	it('vuelve a false después del tiempo por defecto (600ms)', async () => {
		const { result, rerender } = renderHook(
			({ value }) => usePulseOnIncrement(value),
			{ initialProps: { value: 0 } }
		);

		rerender({ value: 1 });
		expect(result.current).toBe(true);

		act(() => {
			jest.advanceTimersByTime(600);
		});

		// ⚠️ Este waitFor asegura que se procese el setTimeout interno del hook
		// ⚠️ Puede generar un warning por una limitación conocida en React 18 + fakeTimers
		// Más información: https://github.com/facebook/react/issues/24502
		await waitFor(() => {
			expect(result.current).toBe(false);
		});
	});

	it('no se activa si el valor no aumenta', () => {
		const { result, rerender } = renderHook(
			({ value }) => usePulseOnIncrement(value),
			{ initialProps: { value: 5 } }
		);

		rerender({ value: 5 });
		expect(result.current).toBe(false);

		rerender({ value: 3 });
		expect(result.current).toBe(false);
	});
});
