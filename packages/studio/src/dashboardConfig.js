export default {
  widgets: [
    { name: 'structure-menu' },
    { name: 'deploy-github', layout: { height: 'auto' , width: 'medium'} },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent Articles',
        order: '_createdAt desc',
        types: ['howToArticle', 'featureArticle', 'galleryArticle']
      },
      layout: { width: 'medium' }
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akulk5/liberty-beauty-portal.git',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'http://blissful-ptolemy-c2826d.netlify.app',
            category: 'apps'
          }
        ]
      }
    }
  ]
}
