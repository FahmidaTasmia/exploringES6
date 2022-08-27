const petOwner = {
    name:'tasmia',
    age: 25,
    contact:{
        phone:'8938876',
        email:"tasmia@gmail.com"
    },

    cat: {
        name:'lofie',
        info:{
            color:'white',
            weight:'1.2kg'
        }
    }
};

console.log(petOwner?.dog?.name);