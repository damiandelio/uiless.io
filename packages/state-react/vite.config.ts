import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // The entry point for the library build process
      formats: ['es'], // Specifies the output format as ES module
      fileName: () => 'index.js', // Specifies the output filename as "index.js"
    },
  },
  resolve: {
    alias: {
      src: resolve('src/'), // Creates an alias so "src" can be used as a shortcut to import files from the "src" directory
    },
  },
  test: {
    setupFiles: ['src/__tests__/setupTests.ts'], // Path to the setup file to configure tests globally
    coverage: {
      exclude: ['*.config.*', '*.d.ts'], // Excludes configuration files and declaration files from test coverage
    },
  },
  plugins: [
    dts({
      exclude: ['**/*.test.ts', '**/*.spec.ts', '**/__tests__/**/*'], // Excludes test files from TypeScript declarations
    }),
  ],
});
