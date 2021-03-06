react-with-suspense-lazy
---

React lazy import with suspense. Easy alternative to https://github.com/jamiebuilds/react-loadable

Enable webpack chunks split.

Installation
-----------
Using [npm](https://www.npmjs.com/):

    $ npm install --save react-with-suspense-lazy

Or [yarn](https://yarnpkg.com/):

    $ yarn add react-with-suspense-lazy

Usage
-----

index.js

```javascript
import { withSuspenseLazy } from 'react-with-suspense-lazy'

export const MyComponent = withSuspenseLazy(() => import('./MyComponent'));
```

with loading fallback like spinners, etc...

```javascript
import { withSuspenseLazy } from 'react-with-suspense-lazy'
import Loading from './Loading';

export const MyComponent = withSuspenseLazy(() => import('./MyComponent'), Loading);
```

# Feedback

Let me know what do you think about! <br>
*Enjoy it? Star this project!* :D

Contributors
------------
See [Contributors](https://github.com/salvoravida/react-with-suspense-lazy/graphs/contributors).

License
-------
[MIT License](https://github.com/salvoravida/react-with-suspense-lazy/blob/master/LICENSE.md).
