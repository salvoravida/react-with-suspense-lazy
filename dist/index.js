'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function withSuspence(LazyComp, Loading) {
    function WithSuspence(props) {
        return React.createElement(
            React.Suspense,
            { fallback: Loading ? React.createElement(Loading, null) : null },
            React.createElement(LazyComp, props)
        );
    }
    WithSuspence.displayName = 'WithSuspence(' + (LazyComp.displayName || LazyComp.name || 'Component') + ')';
    return WithSuspence;
}

function withSuspenceLazy(ctor, Loading) {
    return withSuspence(React.lazy(ctor, Loading));
}

exports.withSuspence = withSuspence;
exports.withSuspenceLazy = withSuspenceLazy;
