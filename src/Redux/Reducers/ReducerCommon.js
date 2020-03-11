function fetch(state) {
    return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
    });
}

function invalidate(state) {
    return Object.assign({}, state, {
        didInvalidate: true
    });
}

export { fetch, invalidate };