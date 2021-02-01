import { assert, isNull } from './index';

export interface ILinkedListNode<T> {
  prev: T | null;
  next: T | null;
}

const messenger = 'LinkedList';

export class LinkedList<T extends ILinkedListNode<T>> {
  private map: Map<T, any> = new Map();
  public tail: T | null;

  protected constructor(
    public head: T | null = null
  ) {
    this.tail = this.head;
  }

  public forEach(callback: (node: T, data?: any) => void) {
    if (this.count > 0) {
      let node: T | null = this.head as T;
      let data: any = this.map.get(node);

      do {
        callback(node, data);

        node = node.next;
      } while (!isNull(node));
    }
  }

  public get(node: T): any {
    return this.map.get(node);
  }

  public has(node: T): boolean {
    return this.map.has(node);
  }

  public insert(node: T, prevNode: T | null = null, data: any = null) {
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
        node.next = this.head as T;
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
          node.next = node.prev.next as T;
          node.next.prev = node;
          node.prev.next = node;
        }
      }
    }

    this.map.set(node, data);
  }

  public get count() {
    return this.map.size;
  }

  public remove(node: T) {
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

        (node.next as T).prev = node.prev; // to preserve any existing upwards link beyond the head

        this.head = node.next;
      } else if (node === this.tail) {
        if (node.next !== null) {
          node.next.prev = node.prev; // to preserve any existing upwards link from beyond the tail
        }

        (node.prev as T).next = node.next; // to preserve any existing downwards link beyond the tail

        this.tail = node.prev;
      } else {
        (node.prev as T).next = node.next;
        (node.next as T).prev = node.prev;
      }
    }

    node.prev = null;
    node.next = null;

    this.map.delete(node);
  }
}