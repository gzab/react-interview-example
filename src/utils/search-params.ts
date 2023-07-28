function getSearchParameters(): URLSearchParams {
  return new URLSearchParams(
    "URLSearchParams" in window ? window.location.search : undefined
  );
}

function setSearchParameters(searchParams: URLSearchParams): void {
  const newRelativePathQuery =
    window.location.pathname +
    (searchParams.toString() ? "?" + searchParams.toString() : "");
  window.history.replaceState(null, "", newRelativePathQuery);
}

/**
 * Reads the value of a specific search parameter from the URL query string.
 *
 * @param {string} key - The key of the search parameter to retrieve from the URL query string.
 * @returns {string | null} The value of the search parameter associated with the provided key,
 *                          or `null` if the search parameter is not present in the URL query string.
 */
export function readSearchParameter(key: string): string | null {
  return getSearchParameters().get(key);
}

/**
 * Adds or updates a search parameter in the URL query string.
 *
 * @param {string} key - The key of the search parameter to add or update.
 * @param {string} value - The value to set for the search parameter.
 * @returns {void}
 *
 * @example
 * // Assume the current URL is: https://example.com/?query=search-term
 * addOrUpdateSearchParameter('page', '2');
 * // The new URL will be: https://example.com/?query=search-term&page=2
 * addOrUpdateSearchParameter('page', '5');
 * // The new URL will be: https://example.com/?query=search-term&page=5
 */
export function addOrUpdateSearchParameter(key: string, value: string): void {
  const searchParams = getSearchParameters();
  if (!searchParams.has(key) || searchParams.get(key) !== value) {
    searchParams.set(key, value);
    setSearchParameters(searchParams);
  }
}

/**
 * Removes a specific search parameter from the URL query string if it exists.
 * If there is no search parameter for the given key, the function does nothing.
 *
 * @param {string} key - The key of the search parameter to remove from the URL query string.
 * @returns {void}
 *
 * @example
 * // Assume the current URL is: https://example.com/?query=search-term&page=2
 * removeSearchParameter('page');
 * // The new URL will be: https://example.com/?query=search-term
 */
export function removeSearchParameter(key: string): void {
  const searchParams = getSearchParameters();
  if (searchParams.has(key)) {
    searchParams.delete(key);
    setSearchParameters(searchParams);
  }
}
