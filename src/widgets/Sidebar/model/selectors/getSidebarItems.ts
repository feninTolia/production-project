import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ISidebarItem } from '../types';
import AboutPageIconDeprecated from '@/shared/assets/icons/about_page.svg';
import ArticlesPageIconDeprecated from '@/shared/assets/icons/article.svg';
import MainPageIconDeprecated from '@/shared/assets/icons/main_page.svg';
import ProfilePageIconDeprecated from '@/shared/assets/icons/profileIcon.svg';

import AboutPageIcon from '@/shared/assets/icons/Info.svg';
import ArticlesPageIcon from '@/shared/assets/icons/articles.svg';
import MainPageIcon from '@/shared/assets/icons/Home.svg';
import ProfilePageIcon from '@/shared/assets/icons/Avatar.svg';

import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/constants/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: ISidebarItem[] = [
    {
      text: 'Main page',
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainPageIconDeprecated,
        on: () => MainPageIcon,
      }),
    },
    {
      text: 'About page',
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutPageIconDeprecated,
        on: () => AboutPageIcon,
      }),
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        text: 'Profile page',
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfilePageIconDeprecated,
          on: () => ProfilePageIcon,
        }),
        authOnly: true,
      },
      {
        text: 'Articles',
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticlesPageIconDeprecated,
          on: () => ArticlesPageIcon,
        }),
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
