export function NavBar() {
  const item = (href, name) => [
    'a.navbar-item',
    { href: '/#/workspace' },
    'Workspace'
  ]
  return [
    'nav.navbar.bg-base-100.shadow-sm',
    { role: 'navigation', 'aria-label': 'main navigation' },
    [
      'div.navbar-start',
      ['a.btn.btn-ghost.text-xl', { href: '/#/' }, 'The Poetry Place'],
      [
        'ul.menu.menu-horizontal',
        ['li>a', { href: '/#/workspace' }, 'Workspace'],
        ['li>a', { href: '/#/archive' }, 'Workspace'],
        ['li>a', { href: '/#/social' }, 'Social']
      ],
    ],
    [
      'div.navbar-end>ul.menu.menu-horizontal.px-1',
      ['li>a', { href: '/#/settings' }, 'Settings']
    ]
  ]
}
