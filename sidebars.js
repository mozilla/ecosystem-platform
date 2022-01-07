module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'For Relying Parties',
      collapsible: false,
      items: [{
        'Firefox Accounts': ['platform/firefox-accounts/fxa-overview',
                             'platform/firefox-accounts/integration-with-fxa',
                             'platform/firefox-accounts/pairing'],
        'Subscription Platform': ['platform/sub-plat/sub-plat-overview',
                                  'platform/sub-plat/sub-plat-features',
                                  'platform/sub-plat/integration-with-subscription-platform',
                                  'platform/sub-plat/sub-plat-coupons'],
      }]
    },
    {
      type: 'category',
      label: 'For FxA Engineers',
      collapsible: false,
      items: [
        {
          'Tutorials': ['tutorials/development-setup',
                        'tutorials/subscription-platform',
                       ],
          'How-to Guides': [
                            'how-tos/using-a-custom-profile-with-firefox',
                            'how-tos/creating-an-account-locally',
                            'how-tos/node-debugging',
                            'how-tos/using-vscode-with-fxa',
                            'how-tos/managing-yarn-dependencies',
          ],
          'Reference': [
            'reference/browser-support',
            'reference/development-process',
            'reference/work-breakdown-process',
            'reference/release-process',
            'reference/incident-response',
            'reference/how-does-fxa-process-email',
            'reference/localization',
            'reference/metrics',
            'reference/jwt-access-tokens',
            'reference/storybook-deploys-with-circleci',
            'reference/webchannels-in-firefox-desktop-fennec',
            'reference/webchannels-in-fenix-webextensions',
            'reference/tests-in-circleci',
            'reference/functional-testing',
            'reference/automation-testplan',
            'reference/internal-api-documentation',
            'reference/experiments-ab-testing',
            'reference/interruptive-surveys',
            'reference/system-diagrams',
            'reference/application-logging',
            'reference/scheduled-maintenance',
            'reference/architectural-decision-records',
            'reference/github-strategies',

          ],          
          'Explanation': [
            'explanation/onepw-protocol',
            'explanation/scoped-keys',
            'explanation/content-server-architecture',
            'explanation/session-tokens',
          ],
        },
        'additional-docs',
    ]
    },    
  ],
};
