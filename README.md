[![npm version](https://badge.fury.io/js/ng2-postgresql-procedures.svg)](https://badge.fury.io/js/ng2-postgresql-procedures)

# ng2-postgresql-procedures

Direct access to postgresql procedures - requires PHP PgProcedures package.

## Usage

```
$ npm install ng2-postgresql-procedures --save
```

angular-cli-build.js
```
    vendorNpmFiles: [
      [...],
      'ng2-postgresql-procedures/**/*.+(js|js.map)'
    ]
```

src/system-config.ts
```
const map: any = {
  [...];
  'ng2-postgresql-procedures': 'vendor/ng2-postgresql-procedures',
};

/** User packages configuration. */
const packages: any = {
  'vendor/ng2-postgresql-procedures': { defaultExtension: 'js'}
};

```

main.js
```
const PGPROC_PROVIDERS = [
  provide(PgServiceConfig, {
    useValue: {
      pgPath: '/pg',
      prmTokenName: 'prm_token'
    }
  }),
  PgService,
  UserService
];

bootstrap(VariationBaseAppComponent, [PGPROC_PROVIDERS]);
```
