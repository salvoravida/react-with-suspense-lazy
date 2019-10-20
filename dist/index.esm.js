import React from 'react';

function withSuspense(LazyComp, Loading) {
  function WithSuspense(props) {
    return React.createElement(React.Suspense, {
      fallback: Loading ? React.createElement(Loading, null) : null
    }, React.createElement(LazyComp, props));
  }

  WithSuspense.displayName = "WithSuspense(".concat(LazyComp.displayName || LazyComp.name || 'Component', ")");
  return WithSuspense;
}
function withSuspenseLazy(ctor, Loading) {
  return withSuspense(React.lazy(ctor), Loading);
}

export { withSuspense, withSuspenseLazy };
