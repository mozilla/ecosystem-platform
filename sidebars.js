module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'For Relying Parties',
      collapsible: false,
      items: [{
        'Firefox Accounts':      ['platform/firefox-accounts/fxa-overview',
                                  'platform/firefox-accounts/integration-with-fxa',
                                  'platform/firefox-accounts/pairing'],
        'Subscription Platform': ['platform/sub-plat/sub-plat-overview',
                                  'platform/sub-plat/sub-plat-features',
                                  'platform/sub-plat/integration-with-subscription-platform',
                                  'platform/sub-plat/sub-plat-coupons'],
      },
      'platform/using-apis',
      ]
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
                            'how-tos/creating-an-account-locally',
                            'how-tos/local-emails-with-maildev',
                            'how-tos/node-debugging',
                            'how-tos/using-vscode-with-fxa',
                            'how-tos/managing-yarn-dependencies',
                            'how-tos/connecting-to-a-local-mysql-db',
                            'how-tos/using-a-custom-profile-with-firefox',
                            'how-tos/working-with-metrics',
                           ],
          'Reference':     [
                              {
                                type: 'category',
                                label: 'Team Processes',
                                items: [
                                  'reference/team-processes/development-process',
                                  'reference/team-processes/work-breakdown-process',
                                  'reference/team-processes/triage-process',
                                  'reference/team-processes/release-process',
                                ]
                            },
                            'reference/browser-support',
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
                            'reference/mobile-specifics',
                            'reference/architectural-decision-records',
                            'reference/github-strategies',
                            {
                              type: "link",
                              label: "Telemetry Data Docs",
                              href: "https://docs.telemetry.mozilla.org/datasets/fxa.html"
                            },
                           ],          
          'Explanation':   [
                            'explanation/metrics',                
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
