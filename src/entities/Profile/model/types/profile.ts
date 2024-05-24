import { Country } from '@/entities/Country/model/constants';
import { Currency } from '@/entities/Currency';

export interface IProfile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
