# ember-xy

Inspired by Material Design (MD) component-library for Ember, but this time written with [Ember-CSS-Modules](https://github.com/salsify/ember-css-modules)!

I say inspired because while a lot of the core design/ functionality comes from MD, I have taken many liberties.

Check out the [Docs with live demos](https://cottrellio.github.io/ember-xy/)!

## Why CSS Modules?

CSS Modules localizes your styles to your component (each component has it's own styles CSS file). This makes your styles a first-class citizen along side your `template.hbs` and `component.js`. This means you can easily assign styles to each component to extend or override the defaults.

Your component structure using CSS Modules:
```
/my-component
   +component.js
   +styles.css
   +template.hbs
```

tldr; By moving your CSS into your component module, you can take control of the design while still having the heavy lifting done by the addon.

## Installation

* `git clone git@github.com:cottrellio/ember-xy.git` this repository
* `cd ember-xy`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
