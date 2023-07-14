export const dummyData = [
    {
        id: 1,
        question: "What is the difference between a function and a method?",
        answer: "A method is a function that is associated with an object. A function is not associated with an object. A method is called using the dot notation: object.method(). A function is called using the function name: function().",
    },
    {
        id: 2,
        question: "What is the difference between == and ===?",
        answer: "The == operator compares objects for equality by invoking their toPrimitive() methods and coercing them to primitive values. The === operator does not coerce either value. It simply returns false if the types of the two values are different. If the types are the same, it returns true if the values are equal, and false if they are not.",
    },
    {
        id: 3,
        question: "What is the difference between null and undefined?",
        answer: "null is an assignment value. It can be assigned to a variable as a representation of no value. undefined is a type itself (undefined) that has a single value, undefined. undefined is a property of the global object. It is used when a variable has not been assigned a value, or not declared at all.",
    },
    {
        id: 4,
        question: "What is the difference between var, let and const?",
        answer: "var is function scoped or globally scoped if not inside a function. let and const are block scoped. var variables can be re-declared and updated. let variables can be updated but not re-declared. const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized. So if you try to access the variables before they are declared, you will get a ReferenceError with let and const.",
    },
    {
        id: 5,
        question: "What is the difference between .call and .apply?",
        answer: "The call() method calls a function with a given this value and arguments provided individually. The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).",
    },
    {
        id: 6,
        question: "What is the difference between synchronous and asynchronous functions?",
        answer: "A synchronous function is one where the next line of code is not executed until the current line completes. An asynchronous function is one where the next line of code is executed even if the current line has not finished executing.",
    },
    {
        id: 7,
        question: "What is the difference between == and ===?",
        answer: "The == operator compares objects for equality by invoking their toPrimitive() methods and coercing them to primitive values. The === operator does not coerce either value. It simply returns false if the types of the two values are different. If the types are the same, it returns true if the values are equal, and false if they are not.",
    },
    {
        id: 8,
        question: "What is the difference between null and undefined?",
        answer: "null is an assignment value. It can be assigned to a variable as a representation of no value. undefined is a type itself (undefined) that has a single value, undefined. undefined is a property of the global object. It is used when a variable has not been assigned a value, or not declared at all.",
    },
    {   
        id: 9,
        question: "What is the difference between var, let and const?",
        answer: "var is function scoped or globally scoped if not inside a function. let and const are block scoped. var variables can be re-declared and updated. let variables can be updated but not re-declared. const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized. So if you try to access the variables before they are declared, you will get a ReferenceError with let and const.",
    },
    {
        id: 10,
        question: "What is the difference between .call and .apply?",
        answer: "The call() method calls a function with a given this value and arguments provided individually. The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).",
    },


];