import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
  test('should render', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should collapse', () => {
    renderComponent(<Sidebar />);

    const toggle = screen.getByTestId('sidebar-toggle');

    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
