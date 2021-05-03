export default {
  testEnvironment: 'jsdom',
  globals: {
    'vue-jest': {
      'babelConfig': {
        'configFile': './babel.config.json'
      }
    }
  },
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  'modulePaths': [
    'src',
    '__tests__'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  transformIgnorePatterns: ['<rootDir>/dist/', '/node_modules/'],
};