import { expect } from 'chai';
import Node from '../scripts/Node';

describe('Node', () => {
  it('should have data, left and right properties that default to null', () => {
    let node = new Node();

    expect(node.data).to.equal(null);
    expect(node.left).to.equal(null);
    expect(node.right).to.equal(null);
  });

  it('should accept data as its first parameter', () => {
    let node = new Node(29);

    expect(node.data).to.equal(29);
  })

  it('should accept left and right as second and third parameters', () => {
    let left = new Node(2);
    let right = new Node(12);
    let root = new Node(29, left, right);

    expect(root.left).to.equal(left);
    expect(root.right).to.equal(right);
  })
})
