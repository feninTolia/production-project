export type BuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  favicon?: string;
  locales: string;
  buildLocales: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: 'jest' | 'storybook' | 'frontend';
}

export interface IBuildEnv {
  port: number;
  mode: BuildMode;
  apiUrl: string;
}
