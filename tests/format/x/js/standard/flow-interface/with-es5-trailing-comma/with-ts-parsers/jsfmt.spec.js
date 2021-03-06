// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirPath = `${__dirname}/../..`;

// Check formatting with `typescript` & `babel-ts parsers:
run_spec(dirPath, ["typescript"], {
  // "Standard JS" with modification below:
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  // modification to "Standard JS" (same as default for Prettier 2.x):
  trailingComma: "es5",
});
