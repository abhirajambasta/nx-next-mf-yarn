## CSS Architecture

Styles for the project can be managed at 2 levels:

* **Global styles** - Layout specific styles and global configuration for text, background colors and so on)

* **Component-level** - Mostly related to dimensions and specific to the components only

### Styling strategy

* We are using [Styled-JSX](https://github.com/vercel/styled-jsx) for styling. It gives first class support for styles to be written in Javascript. It also gives us critical CSS extraction out of the box so the styles of a particular component load with the component itself.

* Global level styles go in the `styles` folder placed in shell of the apps directory. Here we can include any vendor libraries and inject them globally. Also, we define global level styling here.

* Further, components have their respective styles in their own corresponding folders. These styles are isolated by styled components by default.
