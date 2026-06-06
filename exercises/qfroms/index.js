// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.stack_one = new Stack()
        this.stack_two = new Stack()
    }

    revert(first, second){
        while(first.peek()){
            second.push(first.pop())
        }
    }

    add(record) {
        this.stack_one.push(record)
    }

    remove(){
        this.revert(this.stack_one, this.stack_two)

        const result = this.stack_two.pop()

        this.revert(this.stack_two, this.stack_one)

        return result
    }

    peek(){
        this.revert(this.stack_one, this.stack_two)

        const result = this.stack_two.peek()

        this.revert(this.stack_two, this.stack_one)

        return result
    }

}

module.exports = Queue;
