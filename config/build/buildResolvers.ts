import { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types';

export function buildResolvers({ paths }: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: { '@': paths.src },
    mainFiles: ['index'],
  };
}
