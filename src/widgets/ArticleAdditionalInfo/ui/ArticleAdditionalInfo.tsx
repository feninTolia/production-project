import { getUserAuthData, IUser } from '@/entities/User';
import EyeIcon from '@/shared/assets/icons/eye-outlined.svg';
import DateIcon from '@/shared/assets/icons/date.svg';
import { getRouteArticlesEdit } from '@/shared/constants/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

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
    const userData = useSelector(getUserAuthData);
    const { t } = useTranslation();

    return (
      <VStack gap="16" className={className}>
        <HStack gap="8">
          <Avatar src={author.avatar ?? ''} size="32px" alt="author" />
          <Text text={author.username} bold />
        </HStack>

        <HStack align="center" gap="8">
          <Icon Svg={DateIcon} />
          <Text text={createdAt} />
        </HStack>
        <HStack align="center" gap="8">
          <Icon Svg={EyeIcon} />
          <Text text={t('{{count}} views', { count: views })} />
        </HStack>
        {userData?.id === author.id && (
          <AppLink to={getRouteArticlesEdit(articleId)}>
            <Button variant="outline">{t('Edit article')}</Button>
          </AppLink>
        )}
      </VStack>
    );
  }
);
