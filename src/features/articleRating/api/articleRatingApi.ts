import { IRating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface IGetArticleRatingArgs {
  userId: string;
  articleId: string;
}

interface IRateArticleArgs {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], IGetArticleRatingArgs>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: { userId, articleId },
      }),
    }),
    rateArticle: build.mutation<null, IRateArticleArgs>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const useArticleRatingList = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
