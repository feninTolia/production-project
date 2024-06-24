import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/constants/router';

interface ICommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: ICommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div
        data-testid="CommentCard.Loading"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.userInfoBlock}>
          <Skeleton width="30px" height="30px" borderRadius="50%" />
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
    <div
      className={classNames(cls.CommentCard, {}, [className])}
      data-testid="CommentCard.Content"
    >
      <AppLink
        className={cls.userInfoBlock}
        to={getRouteProfile(comment.user.id)}
      >
        {comment.user.avatar ? (
          <Avatar src={comment.user.avatar ?? ''} alt="avatar" size="30px" />
        ) : null}
        <Text title={comment.user.username} />
      </AppLink>

      <Text text={comment.text} className={cls.commentText} />
    </div>
  );
});
