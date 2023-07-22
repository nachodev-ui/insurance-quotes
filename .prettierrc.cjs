module.exports = {
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
        proseWrap: 'always',
        requirePragma: false,
        tabWidth: 4,
        useTabs: false,
      },
    },
  ],
}
