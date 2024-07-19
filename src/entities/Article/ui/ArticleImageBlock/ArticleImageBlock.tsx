import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import cls from './ArticleImageBlock.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

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
      {title && (
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<Text text={title} align="center" />}
          off={<TextDeprecated text={title} />}
        />
      )}
    </div>
  );
});
