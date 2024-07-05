import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo((props: ILangSwitcherProps) => {
  const { className } = props;
  const { i18n, t } = useTranslation();

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'EN' ? 'UK' : 'EN');
  };

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Button
          variant="clear"
          className={classNames('', {}, [className])}
          onClick={toggle}
        >
          {t('Language')}
        </Button>
      }
      off={
        <ButtonDeprecated
          theme={ButtonTheme.CLEAR}
          className={classNames(cls.LangSwitcher, {}, [className])}
          onClick={toggle}
        >
          {t('Language')}
        </ButtonDeprecated>
      }
    />
  );
});
