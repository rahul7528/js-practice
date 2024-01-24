// Specifically designed for iterating over the properties of an object.
// This loop gives key on iteration

obj={
    name: "Rahul",
    language: "Javascript",
}

for (let key in obj){
    console.log(obj[key]);
}

// Output: 
// Rahul
// Javascript



/// Example 2  - With string

let stng = "This is string"
for (let char in stng){
    console.log(stng[char]);
}

//Output:
/*
T
H
I
S

I
S

S
T
R
I
N
G

*/
