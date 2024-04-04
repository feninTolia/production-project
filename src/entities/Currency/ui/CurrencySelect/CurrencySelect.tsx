import { FC, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

interface ICurrencySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Currency;
  onChange?: (value: Currency) => void;
}

const currencyOptions = [
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.UAH,
    content: Currency.UAH,
  },
  {
    value: Currency.USD,
    content: Currency.USD,
  },
];

export const CurrencySelect: FC<ICurrencySelectProps> = (props) => {
  const { readonly, value, onChange } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      readonly={readonly}
      label={t('Set your currency')}
      options={currencyOptions}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
