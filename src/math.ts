interface MathInterface {
  a: number;
  b: number;
}

export const sum = ({ a, b }: MathInterface) : number => {
  return a + b;
};

