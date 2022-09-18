/* eslint-disable no-undef */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: ["default"],
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"]
};
