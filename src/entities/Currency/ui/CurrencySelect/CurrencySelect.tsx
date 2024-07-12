import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/constants';

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
  const { readonly, value, onChange, className } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  const attributes = {
    className,
    value,
    onChange: onChangeHandler,
    items: currencyOptions,
    label: t('Set your currency'),
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
};
