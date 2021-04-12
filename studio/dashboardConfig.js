export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60745cd94fa5bd3cdb299b4f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-c7kibbaq',
                  apiId: 'b60836c9-9576-40b5-a783-97c092f9d2c4'
                },
                {
                  buildHookId: '60745cd994e2333d2fd09d89',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g6g1u7yy',
                  apiId: 'e88bf2bc-437e-424e-a0a4-3095726e364b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dennis-leeyinghui/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g6g1u7yy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
