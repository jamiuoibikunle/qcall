import {createConfig, config as defaultConfig} from '@gluestack-ui/themed';

export const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary: {
        red: '#D42E12',
      },
    },
  },

  components: {},
});

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal styled config
declare module '@gluestack-style/react' {
  interface ICustomConfig extends ConfigType {}
}
