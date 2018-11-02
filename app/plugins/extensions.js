module.exports = {
  availableExtensions: new Set([
    'onApp',
    'onWindow',
    'onRendererWindow',
    'onUnload',
    'middleware',
    'reduceUI',
    'reduceSessions',
    'reduceTermGroups',
    'decorateBrowserOptions',
    'decorateMenu',
    'decorateTerm',
    'decorateWorkbench',
    'decorateWorkbenchTerm', // for backwards compatibility with workbenchterm
    'decorateHeader',
    'decorateTerms',
    'decorateTab',
    'decorateNotification',
    'decorateNotifications',
    'decorateTabs',
    'decorateConfig',
    'decorateKeymaps',
    'decorateEnv',
    'decorateTermGroup',
    'decorateSplitPane',
    'getTermProps',
    'getTabProps',
    'getTabsProps',
    'getTermGroupProps',
    'mapWorkbenchTermState',
    'mapTermsState',
    'mapHeaderState',
    'mapNotificationsState',
    'mapWorkbenchTermDispatch',
    'mapTermsDispatch',
    'mapHeaderDispatch',
    'mapNotificationsDispatch'
  ])
};
