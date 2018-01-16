
require('jest');
import * as fs from 'fs';
import * as path from 'path';

const classStr = fs.readFileSync(path.join(__dirname, './fixture/class_demo.ts'), {encoding: 'utf-8'});
import ClassParse from '../lib/class_parse';

const parse = new ClassParse(classStr);

describe('class parse', () => {
  it('should get all method in class', () => {
    expect(parse.methodPool.length).toEqual(4);
    const pool = parse.methodPool;
    console.log(pool);
    expect(pool[2].path).toEqual('/error/path/somepath');
    expect(pool[2].httpMethod).toEqual('GET');
    expect(pool[2].methodName).toEqual('error');
  });
  it('should get prefix', () => {
    expect(parse.prefix).toEqual('/demo');
  });
});
