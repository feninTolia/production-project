import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleCodeBlock.module.scss';
import { Code } from 'shared/ui/Code/Code';

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
