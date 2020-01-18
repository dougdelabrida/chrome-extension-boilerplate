
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import copy from 'rollup-plugin-copy';

export default [
  {
    input: 'src/background.ts',
    output: {
      file: 'build/js/background.js',
      format: 'cjs'
    },
    plugins: [
      typescript()
    ]
  },
  {
    input: 'src/content.ts',
    output: {
      file: 'build/js/content.js',
      format: 'cjs'
    },
    plugins: [
      typescript(),
      resolve(),
      svelte()
    ]
  },
  {
    input: 'src/popup.ts',
    output: {
      file: 'build/js/popup.js',
      format: 'cjs'
    },
    plugins: [
      typescript(),
      resolve(),
      svelte(),
      copy({
        targets: [
          { src: 'src/manifest.json', dest: 'build' },
          { src: 'src/static/icons/**/*', dest: 'build/icons' },
          { src: 'src/static/popup.html', dest: 'build' },
        ]
      })
    ]
  }
];
