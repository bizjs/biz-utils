module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
};
