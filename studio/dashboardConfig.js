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
                  buildHookId: '6332633590ffb638dbbbf621',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mk5kscfq',
                  apiId: 'de59bd7e-ebc6-4e4b-a064-9799e22b8bb5'
                },
                {
                  buildHookId: '633263362f5a8639784e2225',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jvsovbdn',
                  apiId: '48a1da2c-e102-4a0b-84d2-15e576ffd2bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FourLawson/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jvsovbdn.netlify.app', category: 'apps'}
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
