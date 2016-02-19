module.exports.deepObjectChecker = function deepObjectChecker(a, b) {
    if (Object.keys(a).length != Object.keys(b).length) return false;

    var returnValue = true;
    Object.keys(a).forEach(function (k) {
        if (!returnValue) return;

        if (typeof a[k] != typeof b[k]) {
            returnValue = false;
        }

        if (a[k] instanceof Object) {
            returnValue = deepObjectChecker(a[k], b[k]);
        } else {
            if (a[k] != b[k]) {
                returnValue = false;
            }
        }
    });
    return returnValue;
};

module.exports.loadScript = function loadScript(url, location, implementationCode) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};