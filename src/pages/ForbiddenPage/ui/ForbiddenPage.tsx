import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface IForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo((props: IForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page
      data-testid="ForbiddenPage"
      className={classNames('', {}, [className])}
    >
      {t('You do not have access to this page')}
    </Page>
  );
});
