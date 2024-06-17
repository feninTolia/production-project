import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { IBuildOptions } from '../types';

interface IBuildBabelPluginOptions extends IBuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({
  isTsx,
  isDev,
}: IBuildBabelPluginOptions) => {
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTSX: isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx &&
            isProd && [babelRemovePropsPlugin, { props: ['data-testid '] }],
        ].filter(Boolean),
      },
    },
  };
};
