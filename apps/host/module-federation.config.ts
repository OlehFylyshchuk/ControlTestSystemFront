import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  exposes: {
    './Header': 'apps/host/src/app/header/header.component.ts', // переконайтеся, що шлях правильний
    // './Footer': 'apps/cts/src/app/footer/footer.component.ts'   // додайте цей рядок, якщо експортуєте Footer
  },
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: ['student', 'admin', 'auth', 'testing-form'],
};

export default config;
