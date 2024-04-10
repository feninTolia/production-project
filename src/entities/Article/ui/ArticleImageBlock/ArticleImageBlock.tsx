import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlock.module.scss';

interface IArticleImageBlockProps {
  className?: string;
  src: string;
  title?: string;
}

export const ArticleImageBlock = memo((props: IArticleImageBlockProps) => {
  const { className, src, title } = props;

  return (
    <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
      <img src={src} alt={title} />
      {title && <Text text={title} />}
    </div>
  );
});
