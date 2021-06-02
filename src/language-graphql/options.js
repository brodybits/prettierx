"use strict";

// format based on https://github.com/prettier/prettier/blob/main/src/main/core-options.js
/** @type {{ [name: string]: import("../main/core-options").OptionInfo }} */
module.exports = {
  graphqlCurlySpacing: {
    category: "Other",
    type: "boolean",
    default: true,
    description: "Put spaces between curly braces for GraphQL.",
    oppositeDescription: "Do not put spaces between curly braces for GraphQL.",
  },
};
