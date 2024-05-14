import { fireEvent, screen } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IProfile } from 'entities/Profile';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';

const profile: IProfile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: 24,
  currency: Currency.UAH,
  country: Country.Estonia,
  city: 'Kyiv',
  username: 'admin213',
};

const options = {
  initialState: {
    profile: { readonly: true, data: profile, form: profile },
    user: { authData: { id: '1' } },
  },
  asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
  test('should render cancel btn while editing', async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    fireEvent.click(
      await screen.findByTestId('EditableProfileCardHeader.EditButton')
    );

    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    ).toBeInTheDocument();
  });

  it('should reset data on cancel', async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    );

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
  });

  it('should occur error', async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toBeInTheDocument();
  });

  it('should send PUT request, if no validation errors', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(mockPutReq).toBeCalled();
  });
});
