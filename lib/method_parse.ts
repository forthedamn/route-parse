import * as d from 'debug';
const debug = d('route-parse');
type HttpMethod = 'GET' | 'POST';

class Method {
  // 路由方法名
  methodName: string;
  // http 方法名
  httpMethod: HttpMethod;
  // url path
  path: string;
  response: string;
  // 路由方法 string
  private methodStr: string;
  constructor(methodStr: string) {
    this.methodName = '';
    this.httpMethod = 'GET';
    this.path = '';
    this.methodStr = methodStr;
    this.response = 'any';
    this.decoratorParse();
    this.methodNameParse();
    this.reponseParse();
  }

  private httpMethedHelper(method: string): HttpMethod {
    return method.match(/\.([^,]*)/)[1] as HttpMethod;
  }

  /**
   * 解析 decorator
   * 获取 path，httpMethod,
   */
  decoratorParse() {
    const DECORATOR = /@route\(([^,]*),(.*)\)/;
    const routeMatch = this.methodStr.match(DECORATOR);
    this.path = routeMatch[1].replace(/\'/g, '') || '';
    this.httpMethod = this.httpMethedHelper(routeMatch[2]) || 'GET';
    // 将修饰器从 method string 中截除
    this.methodStr = this.methodStr.substr(routeMatch.index+routeMatch[0].length);
  }

  /**
   * 解析 method name
   */
  methodNameParse() {
    const METHOD_NAME = /async\s(.*)\(/;
    const routeMatch = this.methodStr.match(METHOD_NAME);
    this.methodName = routeMatch[1] || '';
  }

  reponseParse() {
    const RESPONSE = /Promise<(.*)>/;
    const responseMatch = this.methodStr.match(RESPONSE);
    debug('responseMatch:', responseMatch);
    if (responseMatch) {
      this.response = responseMatch[1];
    }
  }
}

export default Method;