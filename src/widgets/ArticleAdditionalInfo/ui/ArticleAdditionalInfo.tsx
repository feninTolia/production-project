import { IUser } from '@/entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticlesEdit } from '@/shared/constants/router';

interface IArticleAdditionalInfoProps {
  className?: string;
  author: IUser;
  createdAt: string;
  views: number;
  articleId: string;
}

export const ArticleAdditionalInfo = memo(
  (props: IArticleAdditionalInfoProps) => {
    const { className, createdAt, author, views, articleId } = props;
    const { t } = useTranslation();

    return (
      <VStack gap="32" className={className}>
        <HStack gap="8">
          <Avatar src={author.avatar ?? ''} size="32px" alt="author" />
          <Text text={author.username} bold />
          <Text text={createdAt} />
        </HStack>
        <AppLink to={getRouteArticlesEdit(articleId)}>
          <Button variant="outline">{t('Edit')}</Button>
        </AppLink>

        <Text text={t('{{count}} views', { count: views })} />
      </VStack>
    );
  }
);
