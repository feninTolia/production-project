import { IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileForm.test', () => {
  it('should return profile form', () => {
    const data = {
      username: 'admin111',
      age: 25,
      country: Country.Ukraine,
      lastname: 'test',
      firstname: 'asd',
      city: 'asf',
      currency: Currency.USD,
    };

    const state: DeepPartial<IStateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as IStateSchema)).toEqual(data);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
  });
});
