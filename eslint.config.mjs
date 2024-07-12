import withNuxt from './.nuxt/eslint.config.mjs'

// https://eslint.nuxt.com/packages/module#manual-setup
export default withNuxt(
  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  {
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style']
      }],
      // 'vue/comma-dangle': 'off'
      'comma-dangle': ['off', 'never'],
      'import/no-mutable-exports': 'off'
    }
  }
).prepend(
  {
    // https://eslint.org/docs/latest/use/configure/ignore
    ignores: ['android/', 'ios/']
    // ignores: ['**/_nuxt/']
  }
)
