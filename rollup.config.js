import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  plugins: [
    resolve(),
    commonjs(),
    typescript()
  ],
  output: {
    file: './index.js',
    format: 'umd',
    exports: 'named',
    name: 'schedlr',
    globals: {
      '@': 'src'
    }
  }
}
