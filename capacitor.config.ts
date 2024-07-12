import type { CapacitorConfig } from '@capacitor/cli'

let config: CapacitorConfig = {}

const baseConfig: CapacitorConfig = {
  appId: 'com.nuxt.boilerplate',
  appName: 'nuxt-boilerplate',
  webDir: '.output/public'
  // server: {
  //   url: 'http://192.168.110.219:3000',
  //   cleartext: true
  // }
}

switch (process.env.NUXT_CAPACITOR_ENV) {
  case 'stage':
    config = {
      ...baseConfig,
      ios: {
        scheme: 'App STAGE'
      },
      android: {
        flavor: 'stage'
      }
    }
    break
  case 'prod':
    config = {
      ...baseConfig,
      ios: {
        scheme: 'App PROD'
      },
      android: {
        flavor: 'prod'
      }
    }
    break
  default:
    config = {
      ...baseConfig,
      ios: {
        scheme: 'App DEV'
      },
      android: {
        flavor: 'dev'
      }
    }
    break
}

export default config
