export interface NativeHashPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
