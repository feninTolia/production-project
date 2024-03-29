import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
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
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t('Language')}
    </Button>
  );
});
