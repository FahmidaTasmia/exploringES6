const person = {
    name:'tasmia',
    age: 25,
    contact:{
        phone:'8938876',
        email:"tasmia@gmail.com"
    },

    education:{
        SchoolName:"vk high school",
        subject:[
            {name:'bangla', mark:45},
            {name:'english', mark:95},
            {name:'math', mark:85}
        ]
            
        }
    }

    console.log(person.contact.email);
    console.log(person.education.subject[2].name);
