// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'ci',
        'docs',
        'fix',
        'perf',
        'quality',
        'refactor',
        'revert',
        'test',
        'add',
        'change',
        'merge',
        'bump',
      ],
    ],
  },
  ignores: [(message) => /^fixup/.test(message)],
  defaultIgnores: true,
};
