import { depthFirstSearch, Tree } from './depthFirstSearch';

const tree: Tree<number> = new Tree(
  1,
  new Tree(
    2,
    new Tree(4, new Tree(8)),
    new Tree(5)
  ),
  new Tree(
    3,
    new Tree(
      6,
      new Tree(9),
      new Tree(10)
    ),
    new Tree(7)
  ),
);

describe('depthFirstSearch', () => {
  test('should correctly search tree in inorder traversal', () => {
    const result: number[] = [];
    const addToResult = (newNumber: number) => result.push(newNumber);

    depthFirstSearch(addToResult, tree);

    expect(result).toStrictEqual([8, 4, 2, 5, 1, 9, 6, 10, 3, 7]);
  });
});
