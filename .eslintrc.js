module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  // rules: {
  //   '@typescript-eslint/interface-name-prefix': 'off',
  //   '@typescript-eslint/explicit-function-return-type': 'off',
  //   '@typescript-eslint/explicit-module-boundary-types': 'off',
  //   '@typescript-eslint/no-explicit-any': 'off',
  // },

  "rules": {
    "no-console": "error",
    "max-len": [
      "error",
      160
    ],
    "class-methods-use-this": "off",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          [
            "^\\u0000"
          ],
          [
            "^(@|angular)(/.*|$)"
          ],
          [
            "^@?\\w"
          ],
          [
            "^(@|mdt)(/.*|$)"
          ],
          [
            "service$"
          ],
          [
            "directive$"
          ],
          [
            "module$"
          ],
          [
            "actions$"
          ],
          [
            "selectors"
          ],
          [
            "model$"
          ],
          [
            "interface$"
          ],
          [
            "enum$"
          ],
          [
            "component$"
          ],
          [
            "pipe$"
          ],
          [
            "/environment/"
          ],
          [
            "^"
          ],
          [
            "^\\."
          ],
          [
            "."
          ]
        ]
      }
    ],
    "template-curly-spacing": [
      "error",
      "always"
    ],
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-empty-lifecycle-method": "error",
    "@typescript-eslint/no-loss-of-precision": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@angular-eslint/use-pipe-transform-interface": "off",
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/class-literal-property-style": "error",
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "record"
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "overrides": {
          "constructors": "off"
        }
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": [
      "off",
      {
        "default": {
          "memberTypes": [
            "signature",
            // Fields
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",
            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "public-abstract-field",
            "protected-abstract-field",
            "private-abstract-field",
            // Methods
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "public-decorated-method",
            "protected-decorated-method",
            "private-decorated-method",
            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "public-abstract-method",
            "protected-abstract-method",
            "private-abstract-method"
          ]
        }
      }
    ],
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-meaningless-void-operator": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-reduce-type-parameter": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/prefer-return-this-type": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/require-array-sort-compare": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/sort-type-union-intersection-members": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrowParameter": true,
        "variableDeclaration": true,
        "propertyDeclaration": true,
        "memberVariableDeclaration": false
      }
    ],
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "off",
    "@typescript-eslint/brace-style": "error",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-array-constructor": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/no-extra-parens": "error",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-invalid-this": "off",
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-restricted-imports": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/object-curly-spacing": [
      "error",
      "always"
    ],
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": "mdt",
        "style": "camelCase"
      }
    ]
  }

};
