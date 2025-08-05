import { WebPlugin } from '@capacitor/core';
import type { NativeHashPlugin } from './definitions';
export declare class NativeHashWeb extends WebPlugin implements NativeHashPlugin {
    sha256(options: {
        text: string;
    }): Promise<{
        hash: string;
    }>;
}
