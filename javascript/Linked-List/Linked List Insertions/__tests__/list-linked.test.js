'use strict';
const LinkedList = require('../ll-insertions');

describe('Linked List', () => {
    it('append should add a node to the linked list end', () => {
        let createLinkedList = new LinkedList();
        createLinkedList.append(105);
        createLinkedList.append(225);
        expect(createLinkedList.head.value).toEqual(105);
        expect(createLinkedList.head.next.value).toEqual(225);
    })
    it('inserted a value into a linked list and head property will properly point to the first node in the linked list', () => {
        let createLinkedList = new LinkedList();
        createLinkedList.append(105);
        createLinkedList.append(225);
        expect(createLinkedList.head.value).toEqual(105);
        expect(createLinkedList.head.next.value).toEqual(225);
    })
    it('will see if linked list includes a given value, or it does not', () => {
        let createLinkedList = new LinkedList();
        createLinkedList.insert(105);
        createLinkedList.insert(225);
        createLinkedList.insert(1225);
        
        expect(createLinkedList.includes(1225)).toEqual(true);
        expect(createLinkedList.includes(1290)).toEqual(false);
    })
    it('will see if linked list is converted to string correctly', () => {
        let createLinkedList = new LinkedList();
        createLinkedList.insert(105);
        createLinkedList.insert(225);
        createLinkedList.insert(1225);

        expect(createLinkedList.toString()).toEqual('{ 1225 } -> { 225 } -> { 105 } -> NULL');
    })
    it('instantiate an empty linked list', () => {
        let createLinkedList = new LinkedList();
        expect(createLinkedList.head).toEqual(null);
    })
    it('will see if linked list is converted to string correctly', () => {
        let createLinkedList = new LinkedList();
        createLinkedList.insert(105);
        createLinkedList.insert(225);
        createLinkedList.insert(1225);

        createLinkedList.insertBefore(1225, 110);
        expect(createLinkedList.insertBefore(5, 109)).toEqual('Values not found');
        expect(createLinkedList.head.value).toEqual(100);
        let emptiedLL = new CreatedList();
        emptiedLL.insert(105);
        emptiedLL.insert(225);
        emptiedLL.insert(1225);

        createLinkedList.insertAfter(1225, 110);
        expect(createLinkedList.insertAfter(5, 109)).toEqual('Values not found')

        expect(createLinkedList.head.next.value).toEqual(115);
    })
});
