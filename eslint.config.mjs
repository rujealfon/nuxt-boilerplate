import tailwind from 'eslint-plugin-tailwindcss'
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
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      // 'import/no-mutable-exports': 'off',
      // 'vue/no-multiple-template-root': 'off',
      // 'vue/comma-dangle': 'off'
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style']
      }],
      'comma-dangle': ['off', 'never'],
      'tailwindcss/no-custom-classname': ['off']
    }
  }
).append(
  {
    // https://eslint.org/docs/latest/use/configure/ignore
    ignores: ['android/', 'ios/']
    // ignores: ['**/_nuxt/']
  }
)
