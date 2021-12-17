import { Node, reversingLinkedList } from './reversingLinkedList';

describe('reversingLinkedList', () => {
  test('should reverse 4 nodes list', () => {
    const node4: Node = { value: 4, next: null };
    const node3: Node = { value: 3, next: node4 };
    const node2: Node = { value: 2, next: node3 };
    const node1: Node = { value: 1, next: node2 };

    const reversed: Node | null = reversingLinkedList(node1);
    expect(reversed?.next).toBe(node3);
    expect(reversed?.next?.next).toBe(node2);
    expect(reversed?.next?.next?.next).toBe(node1);
    expect(reversed?.next?.next?.next?.next).toBe(null);
  });
});
