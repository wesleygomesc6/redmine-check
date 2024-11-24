// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import packageInfo from '../../package.json'

export const environment = {
  valorUstItem1: 40.61,
  valorUstItem2: 22.42,
  production: false,
  VERSION: packageInfo.version,
  redmineUrl: 'http://localhost:4200/redmine/', // Alterado para "/redmine/"
  myAccountUrl: 'http://localhost:4200/login' // Adicionado para "/my/account/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
