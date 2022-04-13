module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'For Relying Parties',
      collapsible: false,
      items: [{
        'Tutorials': [
                        'relying-parties/tutorials/integration-with-fxa',
                        'relying-parties/tutorials/integration-with-subscription-platform',
                        'relying-parties/tutorials/pairing',                        
                     ],
        'How-to Guides': [
                          'relying-parties/how-twos/end-to-end-encryption',
                         ],
        'Reference': [
                      'relying-parties/reference/metrics-for-relying-parties',
                      'relying-parties/reference/sub-plat-overview',
                      'relying-parties/reference/sub-plat-features',            
                      'relying-parties/reference/sub-plat-coupons',
                      'relying-parties/reference/using-apis',
                     ],
      },
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
                            'reference/emails',
                            'reference/localization',
                            'reference/metrics',
                            'reference/token-types',
                            'reference/jwt-access-tokens',
                            'reference/storybook-deploys-with-circleci',
                            'reference/webchannels-in-firefox-desktop-fennec',
                            'reference/webchannels-in-fenix-webextensions',
                            'reference/tests-in-circleci',
                            'reference/functional-testing',
                            'reference/automation-testplan',
                            'reference/internal-api-documentation',
                            'reference/experiments-ab-testing',
                            'reference/system-diagrams',
                            'reference/application-logging',
                            'reference/scheduled-maintenance',
                            'reference/mobile-specifics',
                            'reference/architectural-decision-records',
                            'reference/github-strategies',
                            'reference/third-party-authentication',
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
