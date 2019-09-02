# TypeScript

[TypeScript](https://www.typescriptlang.org/)

[Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript)

## References

[Apollo] (https://www.apollographql.com/docs/react/recipes/static-typing/)

[Jest] (https://jestjs.io/docs/en/getting-started#using-typescript)

[Storybook Configuration] (https://storybook.js.org/docs/configurations/typescript-config/)

```
./node_modules/.bin/tsc --init
```

## Basic Types

```typescript
: string
: number
: boolean
: number[]
: Array<string>
```

## Complex Types

Tuple: Array with some type accepted

```typescript
let aTuple: [string, number] = ['Manny', 34];
```

Enum: object like

```typescript
enum Codes{first = 1, second = 2};
```

Any: Any type

```typescript
let firstName: any = 3;
```

Void: When a function as no return.

```typescript
const warning = (): void => {
  console.log('Warning');
}
```

## Component

```typescript
const Message = (prop: {message: string}): any => {
  return (
    <p>{prop.message}</p>
  );
}
```

Of note, you could ommit the 'any' for the return type, it's by default.

## Class Component

Used to pass to the component

```typescript
// Pass anyhing
class App extends Component<any> {
// or to pass an object
class App extends Component<{}> {
```

## Interface

```typescript
interface UserMessage {
  name: string,
  message: string,
}

const Message = (props: UserMessage): any => {
```
