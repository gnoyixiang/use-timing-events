module.exports = {
  testMatch: [
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/tests/**/*.{js,jsx,ts,tsx}'
  ],
  transform: {
    // '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: [],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  setupFilesAfterEnv: ['./setupTests.js']
}
