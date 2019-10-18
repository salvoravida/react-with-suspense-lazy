import React from 'react';

export function withSuspence(LazyComp, Loading) {
    function WithSuspence(props) {
        return (
          <React.Suspense fallback={Loading ? <Loading /> : null}>
              <LazyComp {...props} />
            </React.Suspense>
        );
    }
    WithSuspence.displayName = `WithSuspence(${LazyComp.displayName
    || LazyComp.name
    || 'Component'})`;
    return WithSuspence;
}

export function withSuspenceLazy(ctor, Loading) {
    return withSuspence(React.lazy(ctor, Loading));
}
