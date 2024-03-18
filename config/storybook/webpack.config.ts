import { resolve } from 'path';
import { Configuration } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
  const src = resolve(__dirname, '..', '..', 'src');

  config.resolve?.modules?.push(src, 'node_modules');
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
