# NX_NEXT_MF_YARN

## Features 🎉

* Server-side rendering with code-spliting (comes out of the box from `Next.js`)
* MicroFrontends with `Next.js`
* `NX` Monorepo
* `Typescript`
* `Yarn PnP` as a package-manager
* `React 18.x`, `Node 18.x`
* `Amplify` deployable
*` Integrated` folder structure
* Follows `Atomic Design` principle
* Styled with `styled-jsx` & `tailwind`
* `Shell architecture` with isolated build & deployments
* `Error Boundary`
* Packages readily publishable (e.g. Header)
* Component scaffolding
* Javascript and styles linting
* Prettier
* `Jest` testing framework with `React-Testing-Library`
* `EditorConfig` for consistency
* Data Fetcher - TODO
* State Management - TODO
* App audit using lighthouse - TODO

## Topics to refer

* [TechStack](docs/TechStack.md)
* [ShellArchitecture](docs/ShellArchitecture.md)
* [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Folder Structure](docs/FolderStructure.md)
* [Component](docs/Component.md)
* [CSS Architecture](docs/CSSArchitecture.md)
* [Logger] - TODO
* [Mocks] - TODO

## Installation

Dependencies should be installed using the [`yarn`](https://yarnpkg.com/en/)
command line tools.

Install `yarn` if you dont't have already.

```sh
npm i -g yarn
```

Install dependencies using `yarn`.

```sh
yarn install
```

## Development Environment

Start development environment with mock server using

```sh
yarn start <app-name>
```

## Scripts

* **start** - Serve in development environment
* **build** - Make production build
* **prod** - Install dependencies, make a production build, run size check on webpack bundles
* **lint** - Run javascript linting and style linting. (Also used as a precommit hook)
* **test** - Run jest test suites wiht snapshot testing. (Also used a a prepush hook)

```sh
{
    "dev": "yarn install && yarn run dev:serve",
    "dev:mock": "yarn install && npm-run-all --parallel dev:serve mock",
    "prod": "yarn install && yarn run build && yarn run size && yarn run prod:serve",
    "build": "next build ./app",
    "start": "yarn run prod",
    "lint": "yarn run lint:js && yarn run lint:css",
    "test": "cross-env NODE_ENV=test jest --config ./config/jest.config.js",
    "lint:js": "eslint app/ server/ --fix",
    "lint:css": "stylelint app/",
    "precommit": "yarn run lint",
    "prepush": "yarn run test",
    "size": "size-limit"
  }
```

## Tests

```sh
yarn test
```