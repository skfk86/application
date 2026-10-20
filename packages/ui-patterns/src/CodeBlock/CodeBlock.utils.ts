export const monokaiCustomTheme = (isDarkMode: boolean) => {
  return {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      color: isDarkMode ? '#ddd' : '#444',
    },
    'hljs-tag': {
      color: '#569cd6',
    },
    'hljs-keyword': {
      color: '#569cd6',
      fontWeight: 'normal',
    },
    'hljs-selector-tag': {
      color: '#569cd6',
      fontWeight: 'normal',
    },
    'hljs-literal': {
      color: '#569cd6',
      fontWeight: 'normal',
    },
    'hljs-strong': {
      color: '#569cd6',
    },
    'hljs-name': {
      color: '#569cd6',
    },
    'hljs-code': {
      color: '#66d9ef',
    },
    'hljs-class .hljs-title': {
      color: 'gray',
    },
    'hljs-attribute': {
      color: '#bf79db',
    },
    'hljs-symbol': {
      color: '#bf79db',
    },
    'hljs-regexp': {
      color: '#bf79db',
    },
    'hljs-link': {
      color: '#bf79db',
    },
    'hljs-string': {
      color: 'var(--primary)',
    },
    'hljs-bullet': {
      color: '#2DD4BF',
    },
    'hljs-subst': {
      color: '#2DD4BF',
    },
    'hljs-title': {
      color: '#2DD4BF',
      fontWeight: 'normal',
    },
    'hljs-section': {
      color: '#2DD4BF',
      fontWeight: 'normal',
    },
    'hljs-emphasis': {
      color: '#2DD4BF',
    },
    'hljs-type': {
      color: '#2DD4BF',
      fontWeight: 'normal',
    },
    'hljs-built_in': {
      color: '#2DD4BF',
    },
    'hljs-builtin-name': {
      color: '#2DD4BF',
    },
    'hljs-selector-attr': {
      color: '#2DD4BF',
    },
    'hljs-selector-pseudo': {
      color: '#2DD4BF',
    },
    'hljs-addition': {
      color: '#2DD4BF',
    },
    'hljs-variable': {
      color: '#2DD4BF',
    },
    'hljs-template-tag': {
      color: '#2DD4BF',
    },
    'hljs-template-variable': {
      color: '#2DD4BF',
    },
    'hljs-comment': {
      color: isDarkMode ? '#999' : '#888',
    },
    'hljs-quote': {
      color: '#75715e',
    },
    'hljs-deletion': {
      color: '#75715e',
    },
    'hljs-meta': {
      color: '#75715e',
    },
    'hljs-doctag': {
      fontWeight: 'normal',
    },
    'hljs-selector-id': {
      fontWeight: 'normal',
    },
  }
}
