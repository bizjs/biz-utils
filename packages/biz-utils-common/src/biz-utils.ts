export async function safeExecute<T>(fn: () => Promise<T>): Promise<[Error | null, T | null]> {
  try {
    const result = await fn();
    return [null, result];
  } catch (e: unknown) {
    return [e as Error, null];
  }
}

export function safeExecuteSync<T>(fn: () => T): [Error | null, T | null] {
  try {
    const result = fn();
    return [null, result];
  } catch (e) {
    return [e as Error, null];
  }
}
