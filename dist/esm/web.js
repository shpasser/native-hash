import { WebPlugin } from '@capacitor/core';
export class NativeHashWeb extends WebPlugin {
    async sha256(options) {
        console.log('ECHO', options);
        return { hash: 'hash' };
    }
}
//# sourceMappingURL=web.js.map