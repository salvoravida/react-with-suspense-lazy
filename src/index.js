import React from 'react';

export function withSuspense(LazyComp, Loading) {
    function WithSuspense(props) {
        return (
          <React.Suspense fallback={Loading ? <Loading /> : null}>
              <LazyComp {...props} />
            </React.Suspense>
        );
    }
    WithSuspense.displayName = `WithSuspense(${LazyComp.displayName
    || LazyComp.name
    || 'Component'})`;
    return WithSuspense;
}

export function withSuspenseLazy(ctor, Loading) {
    return WithSuspense(React.lazy(ctor, Loading));
}
