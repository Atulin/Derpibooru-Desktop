module.exports = {
	extends: 'erb',
	rules: {
		// A temporary hack related to IDE not resolving correct package.json
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'@typescript-eslint/lines-between-class-members': 'off',
		'jsx-a11y': 'off',
		'no-console': 'off',
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		createDefaultProgram: true,
	},
	settings: {
		'import/resolver': {
			// See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
			node: {},
			webpack: {
				config: require.resolve(
					'./.erb/configs/webpack.config.eslint.js'
				),
			},
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
};
