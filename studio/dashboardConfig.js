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
                  buildHookId: '6022563f29aeef9c97012309',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-86esg63b',
                  apiId: 'ea5e20b0-17a4-4ef7-9110-bd64a3dc7e34'
                },
                {
                  buildHookId: '6022563f57b0909780b4227b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-afmrth5o',
                  apiId: 'e5541e3f-70dd-4064-b182-85531aa92102'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TurkaljGoran/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-afmrth5o.netlify.app', category: 'apps'}
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
