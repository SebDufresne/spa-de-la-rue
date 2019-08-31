# Knex quick commands

Create a new migrate:

knex migrate:make createVolunteers

[Knex Data Types](http://knexjs.org/#Schema-Building)

Run migration:

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

## Some knex flags

.defaultTo('email')
.notNullable() /? .notNull()
.nullable()
.primary()
.unique()

Create Seeds

```javascript
knex seed:make 01_addUsers
```

npm i -D faker

knex seed:run

### Test Backend

http://localhost:3001/api/users