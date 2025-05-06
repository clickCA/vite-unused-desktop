# Vite project

## Conditional Desktop Imports

This project uses conditional file imports based on the build type environment variable. When running with `build_type=desktop`, Vite will first look for files with a `.desktop` extension before falling back to the standard files.

For example:

- `ExamplePage.tsx` - standard mobile version
- `ExamplePage.desktop.tsx` - desktop-specific version

### Known Issue with Knip

When using the Knip dependency analyzer with this setup, there's a issue where Knip fails to detect `.desktop.tsx` files as being used in the project. This leads to these files being incorrectly reported as unused.

#### How to Reproduce the Issue

1. Run the application in desktop mode:

   ```
   build_type=desktop pnpm run dev
   ```

   This works correctly because Vite's configuration includes custom resolution priorities:

   ```js
   function getExtensions() {
     const extensions = ['.js', '.ts', '.tsx', '.json'];
     if (isDesktop) {
       return [...extensions.map((ext) => `.desktop${ext}`), ...extensions];
     }
     return extensions;
   }
   ```

2. Run Knip to analyze your project:

   ```
   pnpm dlx knip
   ```

   Knip will incorrectly report all `.desktop.tsx` files as unused because it doesn't understand the conditional import mechanism controlled by environment variables and Vite's custom resolution order.

#### Workaround

Can configure Knip to ignore `.desktop.tsx` files in its analysis by adding a `knip.json` configuration file at the root of your project:

```json
{
  "ignore": ["**/*.desktop.tsx"]
}
```

Or if using a `knip` property in your `package.json`:

```json
{
  "knip": {
    "ignore": ["**/*.desktop.tsx"]
  }
}
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
