# Knex

[Knex](http://knexjs.org/)

## [Data Types](http://knexjs.org/#Schema-Building)

## Useful Flags

.defaultTo('email')
.notNullable() /? .notNull()
.nullable()
.primary()
.unique()

## Quick Commands

### Migrations

Create a migration:

```javascript
knex migrate:make createVolunteers
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
