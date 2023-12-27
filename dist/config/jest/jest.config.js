"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    testEnvironment: "jsdom",
    clearMocks: true,
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    rootDir: '../../',
    testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
    preset: 'ts-jest',
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map