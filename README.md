# Productive-vite-react-library

Reference and credits:
https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff


## How to create a new library?

- Fork the repo
- Replace `productive-vite-react-library` everywhere by the name of your library.

```bash
npm ci
npx husky install
```

## Development

```bash
npm run :d
```

## Publish

```bash
npm run build
npm version x.y.z
npm publish
```

Do not forget library and packaging best practices! (CHANGELOG, semver, etc.)
