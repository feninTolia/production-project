import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ISelectOption, Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface ICountrySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Country;
  onChange?: (value: Country) => void;
}

const countriesOptions: Array<ISelectOption<Country>> = [
  { value: Country.Estonia, content: Country.Estonia },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.Greece, content: Country.Greece },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: ICountrySelectProps) => {
  const { readonly, value, onChange } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      options={countriesOptions}
      label={t('Select your country')}
      readonly={readonly}
      onChange={onChangeHandler}
      value={value}
    />
  );
});
