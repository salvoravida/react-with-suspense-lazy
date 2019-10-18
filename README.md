react-with-suspence-lazy
---

React lazy import with suspence. Easy alternative to https://github.com/jamiebuilds/react-loadable

Enable webpack chunks split.

Installation
-----------
Using [npm](https://www.npmjs.com/):

    $ npm install --save react-with-suspence-lazy

Or [yarn](https://yarnpkg.com/):

    $ yarn add react-with-suspence-lazy

Usage
-----

index.js

```javascript
import { withSuspenceLazy } from 'react-with-suspence-lazy'

export const MyComponent = withSuspenceLazy(() => import('./MyComponent'));
```

with loading fallback like spinners, etc...suspence

```javascript
import { withSuspenceLazy } from 'react-with-suspence-lazy'
import Loading from './Loading';

export const MyComponent = withSuspenceLazy(() => import('./MyComponent'), Loading);
```
