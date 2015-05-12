class ES6Utils {
    // Slightly modified Object.assign() polyfill from mdn
    public static assign(target: Object, ...sources: Object[]): Object {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert first argument to object');
        }

        var to = Object(target);
        for (var i = 0; i < sources.length; i++) {
            var nextSource = sources[i];
            if (nextSource === undefined || nextSource === null) {
                continue;
            }
            nextSource = Object(nextSource);

            var keysArray = Object.keys(Object(nextSource));
            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                var nextKey = keysArray[nextIndex];
                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
        return to;
    }
}

export = ES6Utils;
