import { Code } from '@/shared/ui/deprecated/Code';
import { Text } from '@/shared/ui/deprecated/Text';
import { memo } from 'react';
import cls from './ArticleCodeBlock.module.scss';

interface IArticleCodeBlockProps {
  className?: string;
  title?: string;
  code: string;
}

export const ArticleCodeBlock = memo((props: IArticleCodeBlockProps) => {
  const { className, title, code } = props;

  return (
    <div className={cls.ArticleCodeBlock}>
      <Text title={title} />
      <Code className={className} code={code} />
    </div>
  );
});
