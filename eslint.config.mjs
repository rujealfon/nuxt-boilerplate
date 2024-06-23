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
      // 'vue/comma-dangle': 'off'
      'comma-dangle': ['off', 'never']
    }
  }
)
