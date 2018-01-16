"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Method {
    constructor(methodStr) {
        this.methodName = '';
        this.httpMethod = 'GET';
        this.path = '';
        this.methodStr = methodStr;
        this.decoratorParse();
        this.methodNameParse();
    }
    httpMethedHelper(method) {
        return method.match(/\.([^,]*)/)[1];
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
        this.methodStr = this.methodStr.substr(routeMatch.index + routeMatch[0].length);
    }
    /**
     * 解析 method name
     */
    methodNameParse() {
        const METHOD_NAME = /async\s(.*)\(/;
        const routeMatch = this.methodStr.match(METHOD_NAME);
        this.methodName = routeMatch[1] || '';
    }
}
exports.default = Method;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kX3BhcnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWV0aG9kX3BhcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFTRSxZQUFZLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsTUFBYztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQWUsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYztRQUNaLE1BQU0sU0FBUyxHQUFHLHdCQUF3QixDQUFDO1FBQzNDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUNoRSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ2IsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==