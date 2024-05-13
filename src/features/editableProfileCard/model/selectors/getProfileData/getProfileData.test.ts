import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileData.test', () => {
  it('should return profile data', () => {
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
        data,
      },
    };
    expect(getProfileData(state as IStateSchema)).toEqual(data);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileData(state as IStateSchema)).toEqual(undefined);
  });
});
