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
                          'relying-parties/how-twos/apple-iap',
                         ],
        'Reference': [
                      'relying-parties/reference/metrics-for-relying-parties',
                      'relying-parties/reference/sub-plat-overview',
                      'relying-parties/reference/sub-plat-features',
                      'relying-parties/reference/sub-plat-coupons',
                      'relying-parties/reference/using-apis',
                      {
                        type: 'link',
                        label: '⚙️ API Reference',
                        href: '/api',
                      },
                      {
                        type: 'link',
                        label: '⚙️  GQL API Reference',
                        href: '/gql-api',
                      }
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
                            'how-tos/using-sentry-locally',
                            'how-tos/using-tracing-locally',
                            'how-tos/using-tracing-in-gcp',
                            'how-tos/ci-guidelines'
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
                                  'reference/team-processes/pull-request-review-guidelines',
                                ]
                            },
                            {
                              type: 'category',
                              label: 'Style Guides',
                              items: [
                                'reference/style-guides/general-best-practices',
                                'reference/style-guides/react-style-guide',
                                'reference/style-guides/node-style-guide',
                              ]
                            },
                            {
                              type: 'category',
                              label: 'CI and Test Automation', 
                              items: [
                                'reference/tests-in-circleci',
                                'reference/functional-testing',
                                'reference/automation-testplan',
                                'reference/continuous-integration-for-monorepos'
                              ]
                            },
                            {
                              type: 'link',
                              label: '⚙️ Customs API Reference',
                              href: '/customs-api',
                            },
                            'reference/database-structure',
                            'reference/browser-support',
                            'reference/incident-response',
                            'reference/emails',
                            'reference/localization',
                            'reference/metrics',
                            'reference/token-pruning',
                            'reference/token-types',
                            'reference/jwt-access-tokens',
                            'reference/storybook-deploys-with-circleci',
                            'reference/webchannels-in-firefox-desktop-fennec',
                            'reference/webchannels-in-fenix-webextensions',
                            'reference/internal-api-documentation',
                            'reference/experiments-ab-testing',
                            'reference/system-diagrams',
                            'reference/application-logging',
                            'reference/application-tracing',
                            'reference/scheduled-maintenance',
                            'reference/mobile-specifics',
                            'reference/architectural-decision-records',
                            'reference/github-strategies',
                            'reference/third-party-authentication',
                            'reference/rate-limiting',
                            'reference/using-swagger-for-api-documentation',
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
    {
      type: 'category',
      label: 'For Support Agents',
      collapsible: false,
      items: [
        {
          'Reference': [
            'reference/admin-panel',
          ]
        }
      ]
    }
  ],
  ...require("./docs/gql-api/sidebar-schema.js"),
};
