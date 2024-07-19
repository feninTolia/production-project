import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { memo } from 'react';
import cls from './ArticleCodeBlock.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Code } from '@/shared/ui/redesigned/Code';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface IArticleCodeBlockProps {
  className?: string;
  title?: string;
  code: string;
}

export const ArticleCodeBlock = memo((props: IArticleCodeBlockProps) => {
  const { className, title, code } = props;

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <VStack max gap="16">
          <Text title={title} />
          <Code className={className} code={code} />
        </VStack>
      }
      off={
        <div className={cls.ArticleCodeBlock}>
          <TextDeprecated title={title} />
          <CodeDeprecated className={className} code={code} />
        </div>
      }
    />
  );
});
