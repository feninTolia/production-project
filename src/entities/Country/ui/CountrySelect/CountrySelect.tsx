import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ISelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/constants';

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

  const attributes = {
    value,
    onChange: onChangeHandler,
    items: countriesOptions,
    label: t('Select your country'),
    disabled: readonly,
    direction: 'topRight' as const,
  };
  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<ListBox {...attributes} />}
      off={<ListBoxDeprecated {...attributes} />}
    />
  );
});
