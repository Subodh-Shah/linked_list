import Node from './node.js'

export default class LinkedList {
	constructor() {
		this.head = null;
	}
	
	append(value) {
		const newNode = new Node(value);
		if(this.head === null) {
			this.head = newNode;
			return this;
		}
		
		let tail = this.head;
		while (tail.pointer !== null) {
			tail = tail.pointer;
		}
		
		tail.pointer = newNode;
		return this;
	}
	
	prepend(value){
		if (this.head === null) {
			this.head = newNode;
			return this;
		}
		
		let newHeadNode = new Node(value);
		newHeadNode.pointer = this.head;
		this.head = newHeadNode;
		return this;
	}
	
	pop(){
		if(this.head === null) return this;
		let i = 1;
		let tail = this.head;
		while (i < this.size()) {
			tail = tail.pointer;
			i++;
		}
		tail.pointer = null;
		return this;
	}	
		
	size() {
		let counter = 1;
		let tail = this.head;
		while (tail.pointer !== null) {
			tail = tail.pointer;
			counter++;
		}
		return counter;
	}
		
	
	find(value){
		let tail = this.head;
		let counter = 0;
		while (tail.pointer !== null) {
			if (tail.value === value) return counter;
			tail = tail.pointer;
			counter++;
		}
		
		return "Error: Value not found";
	}
	
	at(index) {
		let tail = this.head;
		let counter = 0;
		while(tail.pointer !== null) {
			if (index === counter) return tail.value;
			tail = tail.pointer;
			counter++;
		}
	}
	
	contains(value){
		let tail = this.head;
		while (tail.pointer !== null) {
			if (tail.value === value) return true;
			tail = tail.pointer;
		}
		
		return false;
	}
	
	insertAt(index, value) {
		let counter = this.size - 1;
		let newNode = Node(value);
	}
	
	removeFrom(index) {}
	
	head() {}
	
	tail() {}
	
	toString(value) {}
	
	size() {}
}
