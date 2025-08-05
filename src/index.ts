import { registerPlugin } from '@capacitor/core';

import type { NativeHashPlugin } from './definitions';

const NativeHash = registerPlugin<NativeHashPlugin>('NativeHash', {
  web: () => import('./web').then((m) => new m.NativeHashWeb()),
});

export * from './definitions';
export { NativeHash };
