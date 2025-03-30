import { render, screen } from '@testing-library/react';

describe('🧪 Smoke Test', () => {
	it('renderiza el texto correctamente', () => {
		render(<div>Hola, Marvel!</div>);
		expect(screen.getByText('Hola, Marvel!')).toBeInTheDocument();
	});
});
