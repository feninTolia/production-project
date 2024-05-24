import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';

interface IForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo((props: IForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className])}>
      {t('You do not have access to this page')}
    </Page>
  );
});
