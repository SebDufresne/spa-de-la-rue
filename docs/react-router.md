# React Router

## install
`npm install react-router-dom`

`npm install -s @types/react-router-dom`

## Usage

Put the Routes inside Switch component in /src/index.tsx, the component outside Switch will always be rendered. 

## Work with storybook
In storybook
`import { MemoryRouter } from "react-router"`

and then 

`.addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))`

