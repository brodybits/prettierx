// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

// [FUTURE TBD] use Nodejs path function (...)
const dirPath = `${__dirname}/../../../js/method-chain`;

run_spec(dirPath, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx] recommended setting with --paren-spacing
  arrowParens: "avoid",
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  arrayBracketSpacing: true,
  computedPropertySpacing: true,
  spaceUnaryOps: true,
  templateCurlySpacing: true,
  typeAngleBracketSpacing: true,
});
