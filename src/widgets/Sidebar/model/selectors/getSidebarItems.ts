import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ISidebarItem } from '../types';
import AboutPageIcon from '@/shared/assets/icons/about_page.svg';
import ArticlesPageIcon from '@/shared/assets/icons/article.svg';
import MainPageIcon from '@/shared/assets/icons/main_page.svg';
import ProfilePageIcon from '@/shared/assets/icons/profileIcon.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/constants/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: ISidebarItem[] = [
    { text: 'Main page', path: getRouteMain(), Icon: MainPageIcon },
    { text: 'About page', path: getRouteAbout(), Icon: AboutPageIcon },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        text: 'Profile page',
        path: getRouteProfile(userData.id),
        Icon: ProfilePageIcon,
        authOnly: true,
      },
      {
        text: 'Articles',
        path: getRouteArticles(),
        Icon: ArticlesPageIcon,
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
