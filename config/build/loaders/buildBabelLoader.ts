import { IBuildOptions } from '../types';

export const buildBabelLoader = (options?: IBuildOptions) => {
  return {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };
};
