import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types';

export function buildDevServer({
  port,
}: IBuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
