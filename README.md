react-with-suspence-lazy
---

React lazy import with suspence. Easy alternative to https://github.com/jamiebuilds/react-loadable

Enable webpack chunks split.

Usage
-----

index.js

```javascript
import { withSuspenceLazy } from 'react-with-suspence-lazy'

export const MyComponent = withSuspenceLazy(() => import('./MyComponent'));
```
