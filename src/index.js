import React from 'react';

export function withSuspence(LazyComp) {
    function WithSuspence(props) {
        return (
          <React.Suspense fallback={null}>
              <LazyComp {...props} />
            </React.Suspense>
        );
    }
    WithSuspence.displayName = `WithSuspence(${LazyComp.displayName
    || LazyComp.name
    || 'Component'})`;
    return WithSuspence;
}

export function withSuspenceLazy(ctor) {
    return withSuspence(React.lazy(ctor));
}
