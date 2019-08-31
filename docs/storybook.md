# Storybook

[Storybook](https://storybook.js.org/)

## Package.json Config

```javascript
  "scripts": {
    "storybook": "start-storybook -p 8080 -s public --ci",
  }
```

## [Storybook Options](https://storybook.js.org/docs/configurations/cli-options/)

-p, --port [number]           Port to run Storybook
-s, --static-dir <dir-names>  Directory where to load static files from, comma-separated list
--ci                          CI mode (skip interactive prompts, don't open browser)

## Important locations

- To add new story files:

  `./storybook/config.js`

- Static files directory (assets): **public**

  `-s public` (from package.json)

- Stories locations:

  `/stories`

## [Addons](https://storybook.js.org/addons/)

[addon-actions](https://www.npmjs.com/package/@storybook/addon-actions)

[addon-backgrounds](https://www.npmjs.com/package/@storybook/addon-backgrounds)

[addon-links](https://www.npmjs.com/package/@storybook/addon-links)
