import { renderHook, act } from '@testing-library/react';
import { usePulseOnIncrement } from 'hooks/usePulseOnIncrement';

describe('usePulseOnIncrement', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.clearAllTimers();
		jest.useRealTimers();
	});

	it('retorna false inicialmente', async () => {
		const { result } = renderHook(() => usePulseOnIncrement(0));
		expect(result.current).toBe(false);
	});

	it('retorna true si el valor incrementa', async () => {
		const { result, rerender } = renderHook(
			({ value }) => usePulseOnIncrement(value),
			{ initialProps: { value: 0 } }
		);

		await act(async () => {
			rerender({ value: 1 });
		});

		expect(result.current).toBe(true);
	});

	it('vuelve a false después del tiempo por defecto (600ms)', async () => {
		const { result, rerender } = renderHook(
			({ value }) => usePulseOnIncrement(value),
			{ initialProps: { value: 0 } }
		);

		await act(async () => {
			rerender({ value: 1 });
		});
		expect(result.current).toBe(true);

		await act(async () => {
			jest.advanceTimersByTime(610);
		});

		expect(result.current).toBe(false);
	});

	it('no se activa si el valor no aumenta', async () => {
		const { result, rerender } = renderHook(
			({ value }) => usePulseOnIncrement(value),
			{ initialProps: { value: 5 } }
		);

		await act(async () => {
			rerender({ value: 5 });
		});
		expect(result.current).toBe(false);

		await act(async () => {
			rerender({ value: 3 });
		});
		expect(result.current).toBe(false);
	});
});
