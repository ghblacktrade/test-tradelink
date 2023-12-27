"use strict";
const removeStartTerminalWords = process.argv.slice(2);
const separator = removeStartTerminalWords.findIndex((arg) => arg === '::');
const words = separator !== -1
    ? removeStartTerminalWords.slice(0, separator)
    : removeStartTerminalWords;
const testWords = separator !== -1
    ? removeStartTerminalWords.slice(separator + 1)
    : [];
function divideAndRule(words, testWord) {
    const set = new Set(words);
    let concat = [];
    for (let i = 1; i < testWord.length; i++) {
        const prefix = testWord.substring(0, i);
        const suffix = testWord.substring(i);
        if (set.has(prefix) && set.has(suffix)) {
            concat.push(`${prefix}:${suffix}`);
        }
    }
    console.log(`${concat.length > 0
        ? concat.length + ' ' + concat.reverse().join(' ')
        : '0'}`);
    return concat.length;
}
for (const testWord of testWords) {
    divideAndRule(words, testWord);
}
//# sourceMappingURL=divideAndRule.js.map