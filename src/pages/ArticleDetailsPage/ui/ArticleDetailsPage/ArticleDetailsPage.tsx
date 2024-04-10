import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo((props: IArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const ID = __PROJECT__ === 'storybook' ? '1' : id;

  if (!ID || !Number.isInteger(+ID)) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text
          title="Article not found"
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={ID} />
    </div>
  );
});

export default ArticleDetailsPage;
