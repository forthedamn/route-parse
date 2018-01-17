
require('jest');
import * as fs from 'fs';
import * as path from 'path';

const methodStr = fs.readFileSync(path.join(__dirname, './fixture/method_demo.ts'), {encoding: 'utf-8'});
import MethodParse from '../lib/method_parse';

const parse = new MethodParse(methodStr);

describe('method parse', () => {
  it('parse decorator,should get path and httpMethod', () => {
    expect(parse.path).toEqual('/koa');
    expect(parse.httpMethod).toEqual('GET');
  });
  it('parse method,should get method name', () => {
    expect(parse.methodName).toEqual('koa');
  });
  it('parse method,should get response', () => {
    expect(parse.response).toEqual('number');
  });
});
