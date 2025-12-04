/**
 * Step 1 : Add two classes named LinkedList and Node
	- Note: I have seperated both classes in their own module
 * Step 2 : LinkedList contains following methods:
	- append(value): for adding new node at the end of the LinkedList
	- prepend(): for adding new node at the start of the LinkedList
	- find(index): to find the node value at the given index
	- contains(value): to check if the linked list contains the given value
	- toString(): to convert the linkedlist in string format
	- pop(): to remove last node from the list
	- insertAt(index, value):to insert given value at the given index
	- removeFrom(index): to remove the node at the given index
	- size(): to calculate the size of the list
	- head(): returns the first node in the list
	- tail(): returns the last node in the list
**/

import LinkedList from './linkedList.js'

let list = new LinkedList() ;
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log("this is running");
console.log(list.toString());