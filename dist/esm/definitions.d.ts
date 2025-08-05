export interface NativeHashPlugin {
    sha256(options: {
        text: string;
    }): Promise<{
        hash: string;
    }>;
}
