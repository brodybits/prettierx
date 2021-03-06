// Formatting should *now* be consistent for all ES language parsers:
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // "Standard JS":
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  trailingComma: "none",
});
