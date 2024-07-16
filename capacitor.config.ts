import type { CapacitorConfig } from '@capacitor/cli'

const getEnvConfig = (env: string): Partial<CapacitorConfig> => {
  switch (env) {
    case 'stage':
      return {
        ios: { scheme: 'App STAGE' },
        android: { flavor: 'stage' }
      }
    case 'prod':
      return {
        ios: { scheme: 'App PROD' },
        android: { flavor: 'prod' }
      }
    default:
      return {
        ios: { scheme: 'App DEV' },
        android: { flavor: 'dev' }
      }
  }
}

const baseConfig: CapacitorConfig = {
  appId: 'com.nuxt.boilerplate',
  appName: 'nuxt-boilerplate',
  webDir: '.output/public'
}

export default { ...baseConfig, ...getEnvConfig(process.env.NUXT_CAPACITOR_ENV!) }
