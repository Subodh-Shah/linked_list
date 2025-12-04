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
		let newHeadNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
			return this;
		}
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
		let counter = 0;
		let tail = this.head;
		while (tail !== null) {
			tail = tail.pointer;
			counter++;
		}
		return counter;
	}
		
	
	find(value){
		let current = this.head;
		let counter = 0;
		while (current !== null) {
			if (current.value === value) return counter;
			current = current.pointer;
			counter++;
		}
		
		return "Error: Value not found";
	}
	
	at(index) {
		let current = this.head;
		let counter = 0;
		while(current !== null) {
			if (index === counter) return current.value;
			current = current.pointer;
			counter++;
		}
	}
	
	contains(value){
		let current = this.head;
		while (current !== null) {
			if (current.value === value) return true;
			current = current.pointer;
		}
		return false;
	}
	
	insertAt(index, value) {
		let counter = 0;
		let current = this.head;
		let newNode = new Node(value);
		 
		while(current !== null) {
			if (index - 1 === counter) {
				let nextNode = current.pointer;
				let previousNode = current;
				newNode.pointer = nextNode;
				previousNode.pointer = newNode;
				return this;
			}
			current = current.pointer;
			counter++;
		}
	}
	
	removeFrom(index) {
		if (this.head === null || index < 0) return this;
		
		// Case 1: Remove head
		if(index === 0) {
			this.head = this.head.pointer;
			return this;
		}
		
		let current = this.head;
		let counter = 0;
		
		// Case 2: Remove node at given index other than head
		while (current !== null) {
			if (counter === index - 1){
				let removingNode = current.pointer;
				let nextNode = removingNode.pointer;
				current.pointer = nextNode;
				removingNode.pointer = null;
				return this;
			}
			current = current.pointer; 
			counter++;
		}
	}
	
	head() {
		return this.head.value;
	}
	
	tail() {
		let tail = this.head;
		while (tail !== null && tail.pointer !== null) {
			tail = tail.pointer;
		}
		return tail.value;
	}
	
	toString() {
		let valuesString = ''; 
		let current = this.head;
		while (current !== null) {
			valuesString  += `${current.value} -> `;
			current = current.pointer;
		}
		valuesString += "null";
		return valuesString;
	}
}
