import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './ArticleTextBlock.module.scss';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface IArticleTextBlockProps {
  className?: string;
  title?: string;
  paragraphs: string[];
}

export const ArticleTextBlock = memo((props: IArticleTextBlockProps) => {
  const { className, title, paragraphs } = props;

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
          {title && <Text title={title} />}
          {paragraphs.map((paragraph, idx) => (
            <Text key={idx + paragraph} text={paragraph} />
          ))}
        </div>
      }
      off={
        <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
          {title && <TextDeprecated title={title} />}
          {paragraphs.map((paragraph, idx) => (
            <TextDeprecated key={idx + paragraph} text={paragraph} />
          ))}
        </div>
      }
    />
  );
});
