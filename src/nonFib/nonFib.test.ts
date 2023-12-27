import { userInput, nonFib } from "./nonfib";

// test('userInput', async () => {
//     const data = await userInput('');
//     expect(userInput).toBe('5');
// });

describe('nonFib', () => {

    const originalLog = console.log
    beforeAll(() => {
        console.log = jest.fn()
    })

    afterAll(() => {
        console.log = originalLog
    })

    it('non fib numbers by write 5', async () => {

        jest.spyOn(global.console, 'log').mockImplementation(() => {})
        jest.spyOn(global, 'parseInt').mockReturnValueOnce(5)

        await nonFib()

        expect(console.log).toHaveBeenCalledWith(4);
        expect(console.log).toHaveBeenCalledWith(6);
        expect(console.log).toHaveBeenCalledWith(7);
        expect(console.log).toHaveBeenCalledWith(9);
        expect(console.log).toHaveBeenCalledWith(10);
    })
});
