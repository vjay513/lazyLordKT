function linkedlist(){
    this.head = this.tail = null;
}

linkedlist.prototype = {
    createNode: function(data, next){
        return {
            data: data||null, 
            next: next||null
        }
    },

    addToHead: function(data){

        var node = this.createNode(data);
        if(!this.head){
            this.head = this.tail = node;
        }else {
            node.next = this.head;
            this.head = node;
        }

        return this;

    },

    addToTail: function(data){
        var node = this.createNode(data) 
        if(!this.head){
            this.head = this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    },
    deleteFromHead: function(){
        var data = this.head;
        if(this.head){
            if(this.head.next){
                this.head = this.head.next;
            }else {
                this.head = this.tail = null;
            }
        }
        console.log(data);
        return data;
    },
deleteFromTail: function() {
    var data = null,
        head = this.head,
        tail = this.tail,
        tempNode;

    if(head !== null) {
      if(head === tail) {
        data = tail.data;
        this.head = this.tail = null;
      }
      else {
        data = tail.data;

       for(tempNode = this.head; tempNode.next !== tail; tempNode = tempNode.next);
       this.tail = tempNode;
       this.tail.next = null;
      }
    }

    return data;
  },
    searchNodeInLinkedList: function(searchData){
        var temp = this.head
 for(tempNode = this.head; tempNode.data !== searchData; tempNode = tempNode.next);
        return tempNode || 'no data';
    }
    
}

var hh = new linkedlist();

hh.addToTail(1);
hh.addToTail(2);
hh.addToTail(3);
hh.addToTail(4);
