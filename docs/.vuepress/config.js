module.exports = {
  title: 'PidieUi',
  description: 'PidieUi is UI components for building a web applications',
  themeConfig: {
      sidebar: {
        '/': genSidebarConfig('Guide')
      }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'navbar',
        'slider',
        'collapse',
        'product-item',
        'datatable',
        'datetimepicker',
        'form-validate',
        'listview'
      ]
    }
  ]
}
