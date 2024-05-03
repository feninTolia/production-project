import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface IArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: IArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <div className={classNames('', {}, [className])}>
      {isEdit
        ? t(`Article Edit Page with ID = ${id}`)
        : t('Article Create Page')}
    </div>
  );
});

export default ArticleEditPage;
