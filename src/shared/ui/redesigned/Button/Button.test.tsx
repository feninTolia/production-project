import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render with clear theme', () => {
    render(<Button variant="clear"> Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
