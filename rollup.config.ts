/*
 * BY-Health Front-end Team (https://www.by-health.com/)
 *
 * Copyright © 2016-present By-Health Co Ltd. All rights reserved.
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

// tslint:disable-next-line:no-var-requires
const pkg = require('./package.json');

export default {
  input: 'src/index.ts',

  output: {
    file: pkg.main,
    name: 'Picker',
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },

  external: ['react', 'react-dom'],

  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          target: 'es5',
        },
      },
    }),
    commonjs(),
    resolve(),
    uglify(),
  ],
};
