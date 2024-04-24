import { IUser } from 'entities/User';

export enum ArticleBlockTypes {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export interface IArticleBlocksBase {
  id: string;
  type: ArticleBlockTypes;
  title?: string;
}

export interface IArticleCodeBlock extends IArticleBlocksBase {
  type: ArticleBlockTypes.CODE;
  code: string;
}
export interface IArticleTextBlock extends IArticleBlocksBase {
  type: ArticleBlockTypes.TEXT;
  paragraphs: string[];
}
export interface IArticleImageBlock extends IArticleBlocksBase {
  type: ArticleBlockTypes.IMAGE;
  src: string;
}

export type IArticleBlock =
  | IArticleImageBlock
  | IArticleCodeBlock
  | IArticleTextBlock;

export enum IArticleTypes {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
  POLITICS = 'POLITICS',
}

export enum IArticlesView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export interface IArticle {
  id: string;
  title: string;
  user: IUser;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: IArticleTypes[];
  blocks: IArticleBlock[];
}

export interface IArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: IArticle;
}
