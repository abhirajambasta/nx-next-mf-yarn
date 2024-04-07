import '@testing-library/jest-dom';

// disable console warns/errors by default (comment out when debugging)
jest.spyOn(console, "warn").mockImplementation(() => {});
jest.spyOn(console, "error").mockImplementation(() => {});
