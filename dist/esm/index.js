import { registerPlugin } from '@capacitor/core';
const NativeHash = registerPlugin('NativeHash', {
    web: () => import('./web').then((m) => new m.NativeHashWeb()),
});
export * from './definitions';
export { NativeHash };
//# sourceMappingURL=index.js.map