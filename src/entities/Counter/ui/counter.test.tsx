import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should render', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toBeInTheDocument();
  });

  test('should increment', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });

    const incrementBtn = screen.getByTestId('btn-increment');
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('should decrement', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    const decrementBtn = screen.getByTestId('btn-decrement');

    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });

  test('should decrement with empty initial state', () => {
    renderComponent(<Counter />);
    const decrementBtn = screen.getByTestId('btn-decrement');

    expect(screen.getByTestId('value-title')).toHaveTextContent('0');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
  });
});
