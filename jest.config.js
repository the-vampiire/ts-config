/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: [".js"], // prevent duplicate tests of src/ (ts) and build/ (js)
  watchPathIgnorePatterns: [".js"],
  watchPlugins: [
    [
      "jest-watch-suspend", {
        // override key press
        key: "s",
        // override prompt
        prompt: "suspend watch mode",
        // starts in suspend mode
        "suspend-on-start": true
      }
    ],
    [
      "jest-watch-typeahead/filename", {
        key: "p",
        prompt: "filter by filename regex",
      },
    ]
  ]
};
