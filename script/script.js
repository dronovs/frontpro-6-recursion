const user = {
    name:'Bob',
    age: 34,
    id:1,
    address:{
        city:'Odessa',
        country:'Ukraine'
    },
    books:[
        {
            name:'red one',
            id:35,
            author: {
                name:'Some Author',
                id:277
            },
            tags:['history', 'roman']
        }
    ]
}
console.log(`Basic object: `,user);

function copyObject (obj, values) {
    if (obj && values) {
        for (let property in values) {
            if (values.hasOwnProperty(property)) {
                if (obj[property] && typeof values[property] === 'object') {
                    obj[property] = copyObject(obj[property], values[property]);
                } else {
                    obj[property] = values[property];
                }
            }
        }
    }
    return obj;
}

let user2 = copyObject(user);
console.log(`First clone: `, user2);
