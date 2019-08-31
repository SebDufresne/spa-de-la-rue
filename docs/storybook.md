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
