# Changelog

## v0.3.0

- :warning: Breaking change: Rename `ProviderNamedContext` to `Provider`.
- Try `interop: 'compat'` option to fix issues related to `export default` when used in CJS environments (Jest).
Typically those kind of errors: `Er.div is not a function`.

## v0.2.0

- Replace styled-components to emotion.
  Motivated by the issues of v6 like spreading non-compatible props to DOM by default and lacking types.

## v0.1.2

- Mitigate TS "type instantiation is excessively deep and possibly infinite" error by simplifying the input type of `createConfiguration`.

## v0.1.1

- Fix ContainerFlex horizontal margins.

## v0.1.0

- Rename `configure` to `createToolbox`
- Create explicit types for Configuration and Toolbox
- Add tests

## v0.1.0-beta.32

- Implement and expose a generic NamedContext.
- Revamp configuration creation and setup.

## v0.1.0-beta.27

- Support named React contextes for nested toolboxes.

## Prior

- Add various components and tooling.
