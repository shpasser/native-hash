'use strict';

var core = require('@capacitor/core');

const NativeHash = core.registerPlugin('NativeHash', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.NativeHashWeb()),
});

class NativeHashWeb extends core.WebPlugin {
    async sha256(options) {
        console.log('ECHO', options);
        return { hash: 'hash' };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NativeHashWeb: NativeHashWeb
});

exports.NativeHash = NativeHash;
//# sourceMappingURL=plugin.cjs.js.map
