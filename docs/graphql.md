# GraphQL

## References

[Schemas](https://graphql.org/learn/schema/)

## Sample Query (In GraphQL)

```javascript
{
  users {
    id
    first_name
  }
}
```

```javascript
mutation {
   addUser(
    first_name: "Test2",
    last_name: "Test2",
    gender:"M",
    contact_email:"Test11@test.com",
    contact_phone:"155555555555",
    contact_prefered:"phone",
    description:"just a test",
    picture:"/picture.jpg",
    total_hours: 10,
    password_hash:"Tesafd",
    status: "new",
    is_admin: true,
    is_disable: false
  ) {
    id
  }
}
```

```javascript
{
  user(id: 1){
  gender
  }
}
```
