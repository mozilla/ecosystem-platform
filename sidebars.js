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
                          'relying-parties/how-tos/end-to-end-encryption',
                          'relying-parties/how-tos/google-iap',
                          'relying-parties/how-tos/apple-iap',
                          'relying-parties/how-tos/device-registration',
                         ],
        'Reference': [
                      'relying-parties/reference/integration-requirements',
                      'relying-parties/reference/metrics-for-relying-parties',
                      'relying-parties/reference/query-parameters',
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
                        label: '⚙️ GQL API Reference',
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
                            'how-tos/ci-guidelines',
                            'how-tos/connecting-to-a-local-mysql-db',
                            'how-tos/creating-an-account-locally',
                            'how-tos/local-emails-with-maildev',
                            'how-tos/managing-yarn-dependencies',
                            'how-tos/node-debugging',
                            'how-tos/using-a-custom-profile-with-firefox',
                            'how-tos/using-sentry-locally',
                            'how-tos/using-swagger-for-api-documentation',
                            'how-tos/using-tracing-in-gcp',
                            'how-tos/using-tracing-locally',
                            'how-tos/using-vscode-with-fxa',
                            'how-tos/working-with-metrics',
                            'how-tos/rotating-secrets',
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
                                'reference/style-guides/node-style-guide',
                                'reference/style-guides/react-style-guide',                                
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
                            'reference/application-logging',
                            'reference/application-tracing',
                            'reference/browser-support',
                            {
                              type: 'link',
                              label: '⚙️ Customs API Reference',
                              href: '/customs-api',
                            },
                            'reference/database-structure',
                            'reference/emails',
                            'reference/experiments-ab-testing',
                            'reference/github-strategies',
                            'reference/incident-response',
                            'reference/localization',
                            'reference/metrics',
                            'reference/mobile-specifics',
                            'reference/npm-scripts-and-nx',
                            'reference/oauth-details',
                            'reference/rate-limiting',
                            'reference/storybook-deploys-with-circleci',
                            'reference/system-diagrams',
                            'reference/third-party-authentication',
                            'reference/tokens',
                            'reference/webchannels',
                            {
                              type: "link",
                              label: "Telemetry Data Docs",
                              href: "https://docs.telemetry.mozilla.org/datasets/fxa.html"
                            },
                           ],
          'Explanation':   [
                            'explanation/architectural-decision-records',
                            'explanation/content-server-architecture',
                            'explanation/metrics',
                            'explanation/onepw-protocol',
                            'explanation/pairing-flow-architecture',
                            'explanation/scoped-keys',

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
