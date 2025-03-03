const numbers=[2,4,3,5,6,7,1,8]
const even=numbers.filter(num=>num%2===0)
console.log(even);
const obj=[
    {name:"name1",marks:90},
    {name:"name2",marks:60},
    {name:"name3",marks:74},
    {name:"name4",marks:80},
]
//print marks bove 75
const pass=obj
              .filter(num=>num.marks>75)
              .map(num=>num.name)
console.log(pass);