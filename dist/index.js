async function getFetch() {
    if (exports.default) {
        return exports.default;
    }
    const fetch = await import("node-fetch");
    Object.keys(fetch).forEach(key => {
        if (!exports[key]) {
            exports[key] = fetch[key];
        }
    });
    return exports.default;
}
exports.getFetch = getFetch;
