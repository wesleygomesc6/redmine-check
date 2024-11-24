import packageInfo from '../../package.json'

export const environment = {
  valorUstItem1: 40.61,
  valorUstItem2: 22.42,
  production: true,
  VERSION: packageInfo.version,
  redmineUrl: 'http://redmine-url/cors-proxy-sead/request/forward/https//remine-url/issues/', // Alterado para "/redmine/"
  myAccountUrl: 'http://redmine-url/cors-proxy-sead/request/forward/https//remine-url/my/account.json' // Adicionado para "/my/account/"
};