"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonFib = exports.userInput = void 0;
async function userInput(n) {
    return new Promise(resolve => {
        process.stdout.write(n);
        process.stdin.once('data', data => { resolve(data); });
    });
}
exports.userInput = userInput;
async function nonFib() {
    const count = parseInt(await userInput('Enter number: '));
    let a = 0;
    let b = 1;
    let c = a + b;
    let numberCount = 0;
    while (numberCount < count) {
        a = b;
        b = c;
        let d = a + b;
        for (let i = c + 1; i < d; i++) {
            console.log(i);
            numberCount++;
            if (numberCount >= count) {
                break;
            }
        }
        c = d;
        if (numberCount >= count) {
            break;
        }
    }
    process.stdin.pause();
}
exports.nonFib = nonFib;
nonFib();
//# sourceMappingURL=nonfib.js.map