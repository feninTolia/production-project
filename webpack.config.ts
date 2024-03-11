import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  IBuildOptions,
  IBuildPaths,
  BuildMode,
  IBuildEnv,
} from './config/build/types';
import path from 'path';

export default (env: IBuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };
  const isDev = mode === 'development';
  const port = env.port || 3001;

  const options: IBuildOptions = {
    mode,
    paths,
    isDev,
    port,
  };

  const config: webpack.Configuration = buildWebpackConfig(options);

  return config;
};
