export interface StateSort
{
  (row: number): (a: number, b: number) => number;
}
