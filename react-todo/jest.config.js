module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.test.js", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
