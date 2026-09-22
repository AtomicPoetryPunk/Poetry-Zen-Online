export function NavBar() {
  const item = (href, name) => [
    'a.navbar-item',
    { href: '/#/workspace' },
    'Workspace'
  ]
  return [
    'nav.navbar',
    { role: 'navigation', 'aria-label': 'main navigation' },
    ['div.navbar-brand>a.navbar-item', 'Poetry Zen'],
    [
      'div.navbar-menu',
      [
        'div.navbar-start',
        [
          'a.navbar-item',
          { href: '/#/workspace' },
          'Workspace'
        ],
        [
          'a.navbar-item',
          { href: '/#/archive' },
          'Archive'
        ],
        [
          'a.navbar-item',
          { href: '/#/feed' },
          'Social Feed'
        ]
      ],
      [
        'div.navbar-end',
        [
          'a.navbar-item',
          { href: '/#/settings' },
          'Settings'
        ]
      ]
    ]
  ]
}
