module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],
  babelrcRoots: ['./packages/*'],
  plugins: [['styled-components', { ssr: true }]],
}
