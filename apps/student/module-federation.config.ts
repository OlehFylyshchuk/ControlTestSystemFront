import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'student',

  exposes: {
    './Routes': 'apps/student/src/app/remote-entry/entry.routes.ts',
    //'./SidebarComponent': './src/app/sidebar/sidebar.component.ts',
  },
  
};

export default config;

// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// module.exports = {
//   name: 'student',
//   exposes: {
//     './SidebarComponent': 'apps/student/src/app/sidebar/sidebar.component.ts',
//     './SubjectTestsComponent': 'apps/student/src/app/subject-tests/subject-tests.component.ts',
//   },
//   shared: {
//     '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '17.1.0' },
//     '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '17.1.0' },
//     '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '17.1.0' },
//     '@angular/platform-browser': { singleton: true, strictVersion: true, requiredVersion: '17.1.0' },
//   },
// };
