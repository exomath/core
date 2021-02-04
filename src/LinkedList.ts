import { assert, isNull } from './index';

export interface ILinkedListNode {
  prev: ILinkedListNode | null;
  next: ILinkedListNode | null;
}

const messenger = 'LinkedList';

export class LinkedList {
  private list: Set<ILinkedListNode> = new Set();
  public tail: ILinkedListNode | null;

  protected constructor(
    public head: ILinkedListNode | null = null
  ) {
    this.tail = head;
    
    if (!isNull(head)) {
      this.list.add(head);
    }
  }

  public forEach(callback: (node: ILinkedListNode) => void) {
    if (this.count > 0) {
      let node: ILinkedListNode | null = this.head as ILinkedListNode;

      do {
        callback(node);

        node = node.next;
      } while (!isNull(node));
    }
  }

  public has(node: ILinkedListNode): boolean {
    return this.list.has(node);
  }

  public insert(node: ILinkedListNode, prevNode: ILinkedListNode | null = null) {
    assert(
      !this.has(node),
      '"node" is already managed by this linked list',
      messenger + '.insert'
    );
    
    if (this.count === 0) {
      assert(
        prevNode === null,
        '"node" is the head, so "prevNode" should be null or omitted',
        messenger + '.insert'
      );

      this.head = node;
      this.tail = node;
    } else {
      if (prevNode === null) { // node is the new head
        node.next = this.head as ILinkedListNode;
        node.prev = node.next.prev; // to preserve any existing upwards link beyond the head	

        if (node.prev !== null) {	
          node.prev.next = node; // to preserve any existing downwards link from beyond the head	
        }

        node.next.prev = node;

        this.head = node;
      } else {
        assert(
          this.has(prevNode),
          '"node" is not the head, so "prevNode" should already be managed by this linked list',
          messenger + '.insert'
        );

        node.prev = prevNode;

        if (node.prev === this.tail) { // node is the new tail
          if (node.prev.next !== null) {	
            node.next = node.prev.next; // to preserve any existing downwards link beyond the tail	
            node.next.prev = node; // to preserve any existing upwards link from beyond the tail	
          }
          
          node.prev.next = node;
          
          this.tail = node;
        } else {
          node.next = node.prev.next as ILinkedListNode;
          node.next.prev = node;
          node.prev.next = node;
        }
      }
    }

    this.list.add(node);
  }

  public get count() {
    return this.list.size;
  }

  public remove(node: ILinkedListNode) {
    assert(
      this.has(node),
      '"node" is not managed by this linked list',
      messenger + '.remove'
    );

    if (this.count === 1) { // node is head and tail
      if (node.prev !== null) {
        node.prev.next = node.next; // to preserve any existing downwards link from beyond the head
      }

      if (node.next !== null) {
        node.next.prev = node.prev; // to preserve any existing upwards link from beyond the tail
      }

      this.head = null;
      this.tail = null;
    } else {
      if (node === this.head) {
        if (node.prev !== null) {
          node.prev.next = node.next; // to preserve any existing downwards link from beyond the head
        }

        (node.next as ILinkedListNode).prev = node.prev; // to preserve any existing upwards link beyond the head

        this.head = node.next;
      } else if (node === this.tail) {
        if (node.next !== null) {
          node.next.prev = node.prev; // to preserve any existing upwards link from beyond the tail
        }

        (node.prev as ILinkedListNode).next = node.next; // to preserve any existing downwards link beyond the tail

        this.tail = node.prev;
      } else {
        (node.prev as ILinkedListNode).next = node.next;
        (node.next as ILinkedListNode).prev = node.prev;
      }
    }

    node.prev = null;
    node.next = null;

    this.list.delete(node);
  }

  public static new(): LinkedList {
    return new LinkedList();
  }
}
