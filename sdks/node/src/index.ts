export type Test = (name: string) => string;
export const test: Test = (name: string): string => {
  return `Hello, ${name}!`;
};

export const test1: Test = (name: string): string => {
  return `Hello, World!`;
};

export const test2: Test = (name: string): string => {
  return `Hello, World!`;
};

export const test3: Test = (name: string): string => {
  return `Hello, World!`;
};
