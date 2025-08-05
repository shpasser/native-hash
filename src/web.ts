import { WebPlugin } from '@capacitor/core';

import type { NativeHashPlugin } from './definitions';

export class NativeHashWeb extends WebPlugin implements NativeHashPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
