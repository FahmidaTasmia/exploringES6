const users =[
    {id:1, name:'abul', job:'doctor'}
]

// console.log(users[0].name);

const data ={
    count:5000,
    data:[
        {id:1, name:'babul', job:'leader'},
        {id:1, name:'dabul', job:'teacher'},

    ]

   
}
console.log(data.data[1].job);


const numbers =[12,5,87,44];
const half = numbers.map(x=>x/2);
const double = numbers.map(n=>n*2);
console.log(half);
console.log(double);


const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];

const firstLetter = friends.map(friend=>friend[0]);

const nameLength = friends.map(friends=>friends.length);

console.log(firstLetter)
console.log(nameLength);




// filter array


const product =[

    {id:1, name:'laptop', price:45000},
    {id:1, name:'mobile', price:90000},
    {id:1, name:'watch', price:66000},
    {id:1, name:'tablet', price:55000}
]

const expensive = product.filter(product => product.price >60000);
console.log(expensive);