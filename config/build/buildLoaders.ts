import { RuleSetRule } from 'webpack';
import { IBuildOptions } from './types';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: IBuildOptions): RuleSetRule[] {
  const { isDev } = options;

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxBabelLoader,
    // typescriptLoader,
    cssLoader,
  ];
}
