"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('jest');
const fs = require("fs");
const path = require("path");
const methodStr = fs.readFileSync(path.join(__dirname, './fixture/method_demo.ts'), { encoding: 'utf-8' });
const method_parse_1 = require("../lib/method_parse");
const parse = new method_parse_1.default(methodStr);
describe('method parse', () => {
    it('parse decorator,should get path and httpMethod', () => {
        expect(parse.path).toEqual('/koa');
        expect(parse.httpMethod).toEqual('GET');
    });
    it('parse method,should get method name', () => {
        expect(parse.methodName).toEqual('koa');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kX3BhcnNlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXRob2RfcGFyc2UudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQix5QkFBeUI7QUFDekIsNkJBQTZCO0FBRTdCLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsMEJBQTBCLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0FBQ3pHLHNEQUE4QztBQUU5QyxNQUFNLEtBQUssR0FBRyxJQUFJLHNCQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekMsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLEdBQUcsRUFBRTtRQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7UUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9