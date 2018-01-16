"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const method_parse_1 = require("./method_parse");
class ClassParse {
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
            const method = new method_parse_1.default(str);
            this.methodPool.push(method);
        });
    }
}
exports.default = ClassParse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NfcGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc19wYXJzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF5QztBQUV6QztJQUlFLFlBQVksUUFBUTtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBSSxNQUFNO1FBQ1IsTUFBTSxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZO1FBQ1YsTUFBTSxTQUFTLEdBQUcsK0JBQStCLENBQUM7UUFDbEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxVQUFVLENBQUMifQ==