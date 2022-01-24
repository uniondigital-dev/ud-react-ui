# Union Digital's Mini App React Components

# Issues

### Duplicate react dependency

Assuming `myapp` and `ud-react-ui` are sibling folders, one possible fix is to run this command:

```shell
npm link ../<myapp-folder>/node_modules/react
```