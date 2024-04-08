import MainPageIcon from 'shared/assets/icons/main_page.svg';
import AboutPageIcon from 'shared/assets/icons/about_page.svg';
import ProfilePageIcon from 'shared/assets/icons/profileIcon.svg';
import ArticlesPageIcon from 'shared/assets/icons/article.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface ISidebarItem {
  text: string;
  path: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItemsList: ISidebarItem[] = [
  { text: 'Main page', path: RoutePath.main, Icon: MainPageIcon },
  { text: 'About page', path: RoutePath.about, Icon: AboutPageIcon },
  {
    text: 'Profile page',
    path: RoutePath.profile,
    Icon: ProfilePageIcon,
    authOnly: true,
  },
  {
    text: 'Articles',
    path: RoutePath.articles,
    Icon: ArticlesPageIcon,
    authOnly: true,
  },
];
