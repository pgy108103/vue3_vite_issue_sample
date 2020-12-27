import path from 'path';
import { UserConfig } from 'vite';

const alias = parseAlias({
  '': 'src',
  'com': 'src/component',
});

export default {
  alias,
  cssPreprocessOptions: {
    scss: {
      additionalData: `
        @use 'src/scss/_variable' as var;
        @use 'src/scss/_function' as func;
        @use 'src/scss/_mixin' as mix;
      `,
    },
  },
} as UserConfig;

function parseAlias(config: Record<string, string>) {
  const _config: Record<string, string> = {};
  Object.keys(config).forEach(i =>
    _config[`/@${i}/`] = path.resolve(__dirname, config[i]));
  return _config;
}