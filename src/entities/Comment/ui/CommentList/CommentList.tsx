import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { IComment } from 'entities/Comment/model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';

interface ICommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: ICommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('No comments yet')} />
      )}
    </div>
  );
});
