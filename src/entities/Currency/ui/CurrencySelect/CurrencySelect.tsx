import { FC, useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';

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
    <ListBox
      value={value}
      onChange={onChangeHandler}
      items={currencyOptions}
      label={t('Set your currency')}
      disabled={readonly}
      direction="top"
    />
  );
};
