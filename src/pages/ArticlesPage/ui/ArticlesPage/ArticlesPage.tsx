import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleList, IArticlesView } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { classNames } from 'shared/lib/classNames';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'shared/ui/Page/Page';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage = memo((props: IArticlesPageProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onViewClick = useCallback(
    (view: IArticlesView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.ArticlesPage, {}, [className])}
        onScrollEnd={handleLoadNextPart}
      >
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
        {error && (
          <Text theme={TextTheme.ERROR} text={t('Something went wrong')} />
        )}
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
