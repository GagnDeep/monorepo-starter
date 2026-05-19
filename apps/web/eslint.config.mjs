// Minimal ESLint flat config. Next.js 16 removed `next lint` and the Next preset
// is incompatible with FlatCompat in ESLint 9. Type safety is enforced via `pnpm typecheck`.
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['.next/**', 'node_modules/**', 'src/db/migrations/**', 'e2e/**'],
  },
  ...tseslint.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
