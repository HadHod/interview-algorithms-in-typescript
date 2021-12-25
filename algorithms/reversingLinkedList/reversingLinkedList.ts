export interface Node {
  value: number;
  next: Node| null;
}

export function reversingLinkedList(head: Node): Node | null {
  let previous: Node | null = null;
  let next: Node | null = null;
  let current: Node | null = head;

  while(current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
