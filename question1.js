// Author: lazylord
var hybridStack = [] // this stack act like queue

Array.prototype.add = function(val) {
    hybridStack.push(val)
    // stack1 is array we are using for adding element
    // for both stack and queue both add elements at the end
}

Array.prototype.kick = function(){
    var stack2 = []; // helper stack
    // here we have to apply our logic
    // you know will add basic conditions
    if(this.length === 0){
        // if the stack1 is empty, we can't remove any thing right
        return 'There is no elements Lazylord';
    } else if(this.length === 1){ // if a single operation as enqueue was performed
        return this.pop();
    } else {
        // we have to apply our brain here
        // we are queue now, so we have to kick the first one first
        while(this.length > 0){
            stack2.push(this.pop())
        }
        const ret = stack2.pop(); // popped element
        
        while(stack2.length > 0){
            this.push(stack2.pop())
        }// After kicking the first element remaining array
        return ret;
    }
}

Array.prototype.remaining = function(){
    return this;
}

