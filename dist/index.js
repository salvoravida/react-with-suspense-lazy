'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function withSuspense(LazyComp, Loading) {
    function WithSuspense(props) {
        return React.createElement(
            React.Suspense,
            { fallback: Loading ? React.createElement(Loading, null) : null },
            React.createElement(LazyComp, props)
        );
    }
    WithSuspense.displayName = 'WithSuspense(' + (LazyComp.displayName || LazyComp.name || 'Component') + ')';
    return WithSuspense;
}

function withSuspenseLazy(ctor, Loading) {
    return WithSuspense(React.lazy(ctor, Loading));
}

exports.withSuspense = withSuspense;
exports.withSuspenseLazy = withSuspenseLazy;
