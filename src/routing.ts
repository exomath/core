export interface ISingleRouter<T> {
  [x: string]: T
}

export interface IDoubleRouter<T> {
  [x: string]: {
    [y: string]: T
  };
}

export type ISingleFunctionRouter<T, U> = ISingleRouter<(x: T) => U>;

export type IDoubleFunctionRouter<T, U> = IDoubleRouter<(x: T) => U>;
