# Knex

[Knex](http://knexjs.org/)

[cheatsheet](https://devhints.io/knex)

## [Data Types](http://knexjs.org/#Schema-Building)

## Useful Flags

.defaultTo('email')
.notNullable() /? .notNull()
.nullable()
.primary()
.unique()

### Foreign key

table.integer('address_id');
table.foreign('address_id').references('id').inTable('addresses');

## Quick Commands

### Migrations

Create a migration:

```javascript
knex migrate:make createUsers
```

Run a migration:

```javascript
knex migrate:latest
```

Displays current version

```javascript
knex migrate:currentVersion
```

Rollback to previous version

```javascript
knex migrate:rollback
```

### Seeds

Create Seeds

```javascript
knex seed:make 01_addUsers
```

Run Seeds Files

```javascript
knex seed:run
```
