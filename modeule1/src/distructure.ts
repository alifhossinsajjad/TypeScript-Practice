//destructure operator 
//object destructure
const user = {
    id: 234,
    name: {
        fristName: "alif",
        lastname: "mia"
    },
    contactNom: "018234874",
}

const { contactNom, name: { fristName : sureName /* -----> it is called name alias*/ } } = user


//array destructure 

const myfriends = ['alif', 'arfan', 'midul', 'biri','lifan'];



const [, , valobasa, ...smoking]  = myfriends