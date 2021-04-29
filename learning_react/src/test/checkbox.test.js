import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../component/Checkbox';

test('selecciona un componente checkbox, este debe cambiar su valor a TRUE', () => {
    const { getByTestId } = render(<Checkbox/>);
    const checkbox = getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeFalsy();
});