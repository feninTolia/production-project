export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  SETTINGS = 'settings',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',

  // last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteSettings = () => '/settings';
export const getRouteArticles = () => 'articles';
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`;
export const getRouteArticlesEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticlesCreate = () => '/articles/new';
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteArticles()]: AppRoutes.ARTICLES,
  [getRouteArticlesDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
  [getRouteArticlesEdit(':id')]: AppRoutes.ARTICLE_EDIT,
  [getRouteArticlesCreate()]: AppRoutes.ARTICLE_CREATE,
  [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
