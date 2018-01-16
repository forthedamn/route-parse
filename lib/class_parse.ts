import MethodParse from './method_parse';

class ClassParse {
  routeStr: string;
  methodPool: Array<MethodParse>;

  constructor(routeStr) {
    this.routeStr = routeStr;
    this.methodPool = [];
    this.methodWalker();
  }

  /**
   * 获取路由前缀
   * 
   * @readonly
   * @memberof ClassParse
   */
  get prefix() {
    const DECORATOR = /@route\((.*)\)/;
    return this.routeStr.match(DECORATOR)[1].replace(/\'/g, '');
  }

  /**
   * 遍历 route class 获取所有 method，生成对应 AST
   * 
   * @memberof ClassParse
   */
  methodWalker() {
    const DECORATOR = /@route\((.*),(.*)\)(([^@])*)/g;
    const routeMatch = this.routeStr.match(DECORATOR);
    routeMatch.forEach(str => {
      const method = new MethodParse(str);
      this.methodPool.push(method);
    });
  }
}

export default ClassParse;
