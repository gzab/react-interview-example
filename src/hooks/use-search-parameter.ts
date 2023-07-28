import { useEffect, useState } from "react";

import { readSearchParameter } from "../utils/search-params";

/**
 * A custom React hook that retrieves and synchronizes a search parameter from the URL query string.
 * If the search parameter for the given key changes, then the hook will re-render and return the new value.
 *
 * @param {string} key - The key of the search parameter to retrieve from the URL query string.
 * @returns {string | null} The value of the search parameter associated with the provided key,
 *                          or `null` if the search parameter is not present in the URL query string.
 *
 * @example
 * // Assume the current URL is: https://example.com/?query=search-term
 * const searchTerm = useSearchParameter('query');
 * console.log(searchTerm); // Output: "search-term"
 *
 * const searchTerm2 = useSearchParameter('parameter');
 * console.log(searchTerm2); // Output: null
 */
export function useSearchParameter(key: string): string | null {
  const [searchParam, setSearchParam] = useState<string | null>(
    readSearchParameter(key)
  );

  useEffect(() => {
    const onChange = () => {
      const newSearchParam = readSearchParameter(key);
      if (newSearchParam !== searchParam) setSearchParam(newSearchParam);
    };

    const replaceState = window.history.replaceState;

    window.history.replaceState = (
      data: any,
      unused: string,
      url?: string | URL | null
    ) => {
      onChange();
      return replaceState.apply(window.history, [data, unused, url]);
    };

    return () => {
      window.history.replaceState = replaceState;
    };
  }, [key, searchParam]);

  return searchParam;
}
