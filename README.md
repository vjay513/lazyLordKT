# lazyLordKT
Interview Questions

I know we have lot of websites and lot of content in the world, even I am also inspired those websites and documented all questions at one place.



### Implement a queue using two stacks

A stack is a data structure where items can be added to a collection and removed from it just like in a queue, except the difference is the order in which they are removed. In a stack, the last item added will be the first item removed (last in, first out). Stacks usually have two basic methods, push, which adds an item into the stack, and pop, which "pops off" the top item from the stack. 

Queue is a linear data structure where the first element is inserted from one end called REAR and deleted from the other end called as FRONT. ... In a queue, one end is always used to insert data (enqueue) and the other is used to delete data (dequeue), because queue is open at both its ends.

```Refer question1.js for the solution```

### Implement linkedlist within javascript

A linked list is an ordered collection of data elements. A data element can be represented as a node in a linked list. Each node consists of two parts: data & pointer to the next node.

Unlike arrays, data elements are not stored at contiguous locations. The data elements or nodes are linked using pointers, hence called a linked list.

A linked list has the following properties:

- Successive nodes are connected by pointers.
- The last node points to null.
- A head pointer is maintained which points to the first node of the list.
- A linked list can grow and shrink in size during execution of the program.
- It can be made just as long as required.
- It allocates memory as the list grows. Unlike arrays, which have a fixed size. Therefore, the upper limit on the number of elements must be known in advance. Generally, the allocated memory is equal to the upper limit irrespective of the usage. This is one the key advantages of using a linked list over an array.
- In contrast to an array, which stores data contiguously in memory, a linked list can easily insert or remove nodes from the list without reorganization of the entire data structure.

```Refer question2.js for the solution```

### How to design a tiny URL or URL shortener?

Design a system url that takes big urls like "https://www.thisisbigurlyooknow.com/interviewquestions/tinyurl" and convert to short 6 letters URL.

So your program should take an integer id and generate a 6 character long URL. 

A URL character can be one of the following

- A lower case alphabet [‘a’ to ‘z’], total 26 characters
- An upper case alphabet [‘A’ to ‘Z’], total 26 characters
- A digit [‘0′ to ‘9’], total 10 characters

There are total 26 + 26 + 10 = 62 possible characters.

So the task is to convert an integer (database id) to a base 62 number where digits of 62 base are "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs.


input: https://www.test123.io/collection/page/5668639101419520/5649050225344512/5668600916475904/
output: http://tinyurl.com/jlg8zpc

```Refer question3.js for the solution```

Within the logic Id and tinyUrl output will come same every time, why becasue we have a req number which is unique. 

let say we have any number which is similar to the unique key then we have to try with another unique key.