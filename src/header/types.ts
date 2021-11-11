/**
 * `false` if cache should not be used.
 *
 * `undefined` when provided headers was not enough to determine a valid value.
 *
 * `number` containing the number of **milliseconds** to cache the response.
 */
type MaybeTtl = false | undefined | number;

/**
 * Interpret all http headers to determina a time to live.
 *
 * @param header The header object to interpret.
 * @returns `false` if cache should not be used. `undefined` when
 *   provided headers was not enough to determine a valid value. Or a
 *   `number` containing the number of **milliseconds** to cache the response.
 */
export type HeadersInterpreter = (headers?: Record<string, string>) => MaybeTtl;

/**
 * Interpret a single string header
 *
 * @param header The header string to interpret.
 * @returns `false` if cache should not be used. `undefined` when
 *   provided headers was not enough to determine a valid value. Or a
 *   `number` containing the number of **milliseconds** to cache the response.
 */
export type HeaderInterpreter = (
  header: string,
  headers: Record<string, string>
) => MaybeTtl;
