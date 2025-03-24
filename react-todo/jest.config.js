export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.test.[jt]s?(x)'],
  rootDir: './',
  verbose: true,
};