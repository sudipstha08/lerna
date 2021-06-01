<p align="center">
  <img alt="Lerna" src="https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png" width="200">
</p>
<p align="center">
  A tool for managing JavaScript projects with multiple packages.
</p>

## commands
| commands       |   description      |
|----------------|--------------------|
| npx lerna init | init lerna         |
| lerna create   | create a package   |

## Add npm packages to the specific lerna package
```
lerna add next-compose-plugins --scope=user
lerna add next-transpile-modules --scope '{admin,user}'
```

## REFERENCES
1. https://medium.com/wesionary-team/creating-next-js-monorepo-d41ea78f4afb
