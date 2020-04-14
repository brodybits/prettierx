// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/..`;

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  singleQuote: false,
  jsxSingleQuote: false,
  // [prettierx] test with --paren-spacing
  parenSpacing: true
});
