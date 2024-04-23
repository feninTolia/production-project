import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { IComment } from 'entities/Comment/model/types/comment';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

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
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink
        className={cls.userInfoBlock}
        to={RoutePath.profile + comment.user.id}
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
