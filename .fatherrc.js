export default {
  esm: {
    type: 'rollup',
    minify: true
  },
  cjs: {
    type: 'rollup',
    minify: true
  },
  extraBabelPlugins: [
    ["transform-remove-console", { "exclude": ["error", "warn"] }]
  ]
}
