export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'trends',
        data: {
          menu: {
            title: 'Trends',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      }
    ]
  }
];
