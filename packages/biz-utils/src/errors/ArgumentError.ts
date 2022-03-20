export class ArgumentError extends Error {
  constructor(message: string, paramName: string) {
    super(`ArgumentError(${paramName}): ${message}`);
  }
}
