import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './ArticleTextBlock.module.scss';
import { Text } from '@/shared/ui/deprecated/Text';

interface IArticleTextBlockProps {
  className?: string;
  title?: string;
  paragraphs: string[];
}

export const ArticleTextBlock = memo((props: IArticleTextBlockProps) => {
  const { className, title, paragraphs } = props;

  return (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
      {title && <Text title={title} />}
      {paragraphs.map((paragraph, idx) => (
        <Text key={idx + paragraph} text={paragraph} />
      ))}
    </div>
  );
});
