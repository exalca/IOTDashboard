import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'dashboard',
        url: '/dashboard'
      },
      {
        id: 'visualization',
        title: 'Visualization',
        type: 'item',
        icon: 'dashboard',
        url: '/visualisation'
      }

      // {
      //   id: 'sample',
      //   title: 'Sample',
      //   translate: 'NAV.SAMPLE.TITLE',
      //   type: 'item',
      //   icon: 'email',
      //   url: '/sample',
      //   badge: {
      //     title: '25',
      //     translate: 'NAV.SAMPLE.BADGE',
      //     bg: '#F44336',
      //     fg: '#FFFFFF'
      //   }
      // }
    ]
  }
];
