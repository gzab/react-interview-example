# List of things that should be identified in the code

- Use of any
- Composition of components
- Move async operations to useEffect
- Improve useEffect for race conditions or use something like useQuery
- Identify related states that can be removed (like isOpen in favor of using the query parameters as a global state)
- Remove unnecessary useEffects
- Improve user experience with loading component for drawer