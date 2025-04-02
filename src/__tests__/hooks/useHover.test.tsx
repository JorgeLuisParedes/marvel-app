import { renderHook, act } from '@testing-library/react';
import { useHover } from 'hooks/useHover';

describe('useHover', () => {
	it('debería retornar false por defecto', () => {
		const { result } = renderHook(() => useHover());
		expect(result.current.isHovered).toBe(false);
	});

	it('debería retornar true al hacer mouse enter', () => {
		const { result } = renderHook(() => useHover());

		act(() => {
			result.current.bindHover.onMouseEnter();
		});

		expect(result.current.isHovered).toBe(true);
	});

	it('debería retornar false al hacer mouse leave', () => {
		const { result } = renderHook(() => useHover());

		act(() => {
			result.current.bindHover.onMouseEnter();
			result.current.bindHover.onMouseLeave();
		});

		expect(result.current.isHovered).toBe(false);
	});
});
