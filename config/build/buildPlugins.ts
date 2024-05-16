import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { IBuildOptions } from './types';

export function buildPlugins(options: IBuildOptions): WebpackPluginInstance[] {
  const { paths, isDev, apiUrl, project } = options;

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new ReactRefreshWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
}
