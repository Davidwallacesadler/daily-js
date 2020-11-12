module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: `babel-eslint`,
    sourceType: `module`,
    ecmaVersion: 2019,
    ecmaFeatures: {
      modules: true,
      spread: true,
      restParams: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    `prettier`,
    `prettier/vue`,
    `plugin:prettier/recommended`,
    `plugin:vue/base`,
    `eslint:recommended`,
  ],
  plugins: [`prettier`],
  // add your custom rules here
  rules: {
    'prettier/prettier': `error`,
    'no-console': process.env.NODE_ENV === `production` ? `error` : `off`,
    'no-debugger': process.env.NODE_ENV === `production` ? `error` : `off`,
    'no-unused-vars': `warn`,
    quotes: [`error`, `backtick`],
    'no-extra-boolean-cast': `off`,
    'vue/attribute-hyphenation': [
      `error`,
      `always`,
      {
        ignore: [],
      },
    ],
    'vue/order-in-components': [
      process.env.NODE_ENV === `production` ? `off` : `warn`,
      {
        order: [
          `el`,
          `name`,
          `parent`,
          `functional`,
          [`delimiters`, `comments`],
          [`components`, `directives`, `filters`],
          `extends`,
          `mixins`,
          `inheritAttrs`,
          `model`,
          [`props`, `propsData`],
          `data`,
          `methods`,
          `computed`,
          `watch`,
          `LIFECYCLE_HOOKS`,
          [`template`, `render`],
          `renderError`,
        ],
      },
    ],
  },
}
