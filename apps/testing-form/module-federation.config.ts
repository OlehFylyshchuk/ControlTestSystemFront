import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'testing-form',
  exposes: {
    './Routes': 'apps/testing-form/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
