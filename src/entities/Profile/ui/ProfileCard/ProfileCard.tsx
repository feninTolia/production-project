import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { FC } from 'react';
import { IProfile } from '../../model/types/profile';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface IProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  readonly?: boolean;
  error?: string;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
};
