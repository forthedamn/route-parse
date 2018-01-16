# route-parse

AST for koa-decorator and koa-router-decorators

## install

```
npm install route-parse

yarn add route-parse
```

## usage

```
const Parse = require('route-parse');

const string = fs.readFileSync('someRoute.ts', {encoding: 'utf-8'});

const ast = new Parse(string);
```