import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/ArticleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo((props: IArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
  });

  const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
  };

  const onSendComment = useCallback(
    (text?: string) => {
      void dispatch(addCommentForArticle(text ?? ''));
    },
    [dispatch]
  );

  const ID = __PROJECT__ === 'storybook' ? '1' : id;

  if (!ID || !Number.isInteger(+ID)) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text
          title="Article not found"
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={ID} />
        <Text title={t('Comments')} className={cls.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
