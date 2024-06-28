import { Theme } from '@/shared/constants/theme';

export interface IJsonSettings {
  theme?: Theme;
  isFirstVisit?: boolean;
  settingsPageHasBeenOpen?: boolean;
}
