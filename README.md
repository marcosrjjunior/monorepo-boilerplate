# monorepo-boilerplate

WIP: Boilerplate for your typescript projects using [Turborepo](https://github.com/vercel/turborepo).

## What's inside?

### Apps and Packages

- `apps/api`: API code based on [hono-boilerplate](https://github.com/marcosrjjunior/hono-boilerplate)
- `apps/functions`: General functions. Workers/Lambda/...
- `apps/web`: A [Next.js](https://nextjs.org/) app
- `@repo/core`: Shared database types created by API and functions
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

TODO: script to build selected projects

```
...
```

### Develop

TODO: script to build selected projects

```
...
```

### TODO:

- [ ] add lint workflow
- [ ] add manual workflow to build api/functions/web

## Resources

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
