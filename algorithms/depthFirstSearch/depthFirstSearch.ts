export class Tree<T> {
  constructor(
    public value: T,
    public left?: Tree<T>,
    public right?: Tree<T>,
  ) {}
}

export function depthFirstSearch<T>(callback: any, node?: Tree<T>): void {
  if (node !== undefined) {
    depthFirstSearch(callback, node.left);
    callback(node.value);
    depthFirstSearch(callback, node.right);
  }
}
