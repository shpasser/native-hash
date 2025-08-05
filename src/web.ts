import { WebPlugin } from '@capacitor/core';

import type { NativeHashPlugin } from './definitions';

export class NativeHashWeb extends WebPlugin implements NativeHashPlugin {
  async sha256(options: { text: string }): Promise<{ hash: string }> {
    console.log('ECHO', options);
    return { hash: 'hash' };
  }
}
