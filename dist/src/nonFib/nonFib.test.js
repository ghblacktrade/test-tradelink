"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nonfib_1 = require("./nonfib");
describe('nonFib', () => {
    const originalLog = console.log;
    beforeAll(() => {
        console.log = jest.fn();
    });
    afterAll(() => {
        console.log = originalLog;
    });
    it('non fib numbers by write 5', async () => {
        jest.spyOn(global.console, 'log').mockImplementation(() => { });
        jest.spyOn(global, 'parseInt').mockReturnValueOnce(5);
        await (0, nonfib_1.nonFib)();
        expect(console.log).toHaveBeenCalledWith(4);
        expect(console.log).toHaveBeenCalledWith(6);
        expect(console.log).toHaveBeenCalledWith(7);
        expect(console.log).toHaveBeenCalledWith(9);
        expect(console.log).toHaveBeenCalledWith(10);
    });
});
//# sourceMappingURL=nonFib.test.js.map