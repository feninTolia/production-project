import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ISidebarItem } from '../types';
import AboutPageIcon from 'shared/assets/icons/about_page.svg';
import ArticlesPageIcon from 'shared/assets/icons/article.svg';
import MainPageIcon from 'shared/assets/icons/main_page.svg';
import ProfilePageIcon from 'shared/assets/icons/profileIcon.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: ISidebarItem[] = [
    { text: 'Main page', path: RoutePath.main, Icon: MainPageIcon },
    { text: 'About page', path: RoutePath.about, Icon: AboutPageIcon },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        text: 'Profile page',
        path: RoutePath.profile + userData.id,
        Icon: ProfilePageIcon,
        authOnly: true,
      },
      {
        text: 'Articles',
        path: RoutePath.articles,
        Icon: ArticlesPageIcon,
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
