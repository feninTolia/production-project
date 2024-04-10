export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './model/selectors/articleDetailsSelectors';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { IArticle, IArticleDetailsSchema } from './model/types/article';
