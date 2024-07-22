import { getRouteProfile } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface ICommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: ICommentCardProps) => {
  const { className, comment, isLoading } = props;

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <div
        data-testid="CommentCard.Loading"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.userInfoBlock}>
          <Skeleton width="32px" height="32px" borderRadius="50%" />
          <Skeleton width="100px" height="16px" />
        </div>

        <Skeleton width="100%" height="32px" className={cls.commentText} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div
          className={classNames(cls.CommentCardRedesigned, {}, [className])}
          data-testid="CommentCard.Content"
        >
          <AppLink
            className={cls.userInfoBlock}
            to={getRouteProfile(comment.user.id)}
          >
            {comment.user.avatar ? (
              <Avatar
                src={comment.user.avatar ?? ''}
                alt="avatar"
                size="32px"
              />
            ) : null}
            <Text text={comment.user.username} bold />
          </AppLink>

          <Text text={comment.text} className={cls.commentTextRedesigned} />
        </div>
      }
      off={
        <div
          className={classNames(cls.CommentCard, {}, [className])}
          data-testid="CommentCard.Content"
        >
          <AppLinkDeprecated
            className={cls.userInfoBlock}
            to={getRouteProfile(comment.user.id)}
          >
            {comment.user.avatar ? (
              <AvatarDeprecated
                src={comment.user.avatar ?? ''}
                alt="avatar"
                size="30px"
              />
            ) : null}
            <TextDeprecated title={comment.user.username} />
          </AppLinkDeprecated>

          <TextDeprecated text={comment.text} className={cls.commentText} />
        </div>
      }
    />
  );
});
