const SearchPoems = () => [
  'div.field',
  ['label.label', 'Search'],
  [
    'div.control>input.input', 
    { type: 'text', placeholder: 'Search title and text...', autocomplete: 'on' }
  ]
]

const TitleInput = () => [
  'div.field',
  ['label.label', 'Title'],
  ['div.control>input.input', { type: 'text', value: 'Untitled' }]
]

const TextArea = () => [
  'div.field',
  ['label.label', 'Poem'],
  ['div.control>textarea.textarea', { placeholder: 'What is a poem, anyway?' }]
]

function PoemFilters () {
  const tag = (name, n) => [
    'li>div.tags.has-addons.mt-1',
    ['span.tag.button', name],
    ['span.tag.is-info', n]
  ]
  return [
    tag('All', 0),
    tag('Untitled', 0),
    tag('Unranked', 0),
    tag('Unthemed', 0)
  ]
}

function PoemRanks () {
  const tag = (name, n) => [
    'li>div.tags.has-addons.mt-1',
    ['span.tag.button', name],
    ['span.tag.is-info', n]
  ]
  return [
    tag('Rank 1', 0),
    tag('Rank 2', 0),
    tag('Rank 3', 0),
    tag('Rank 4', 0),
    tag('Rank 5', 0),
  ]
}

function PoetryMenu() {
  return [
    'div.box',
    [
      'aside.menu',
      ['p.menu-label', 'Search'],
      ['ul.menu-list>li', SearchPoems()],
      ['p.menu-label', 'Filters'],
      [
        'ul.menu-list',
        [...PoemFilters(), ...PoemRanks()]
      ]
    ]
  ]
}

function PoetryEditor() {
  return [
    ['h2.title', 'Workspace'],
    ['hr'],
    TitleInput(),
    TextArea()
  ]
}

export function WorkSpace() {
  return [
    'div.columns',
    [
      ['div.column.is-narrow', PoetryMenu()],
      ['div.column', PoetryEditor()]
    ]
  ]
}
