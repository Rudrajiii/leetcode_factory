// let x = {};
// x[1] = 5;
// x[2] = 6;
// x[3] = 7;
// x[4] = 8;
// x[5] = 9;
// console.log(x);
// delete x[1];
// console.log(x);
// for(let i in x){
//     console.log(x[i]);
// }

// let y = {type:"DRAW",Data:[{x:0,y:1,w:84,h:9},{x:0,y:1,w:84,h:9}]};

// let x = new Map();
// x.set(1,y);
// x.set(2,y);
// x.set(3,y);
// x.set(4,y);

// for(let [key,value] of x){
//     console.log(key,value);
// }

// x.forEach((key,value)=>{
//     console.log(key,value);
// })

// set
// has
// get
// forEach

let variable = {
    userName: null,
    passWord: null,
    email: null,
    phone: null,


    validateText(type, string) {
        //Javascript reGex for Email Validation.
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        // Javascript reGex for Phone Number validation.
        var regPhone = /^\d{10}$/;
        // Javascript reGex for Name validation
        var regName = /\d+$/g;
        //To check a password between 6 to 20 characters which contain at least one numeric digit, one
        var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if (type === 'password' && (string == "" || !regPassword.test(string))) return false;
        if (type === 'name' && (string == "" || regName.test(string))) return false;
        if (type === 'email' && (string == "" || !regEmail.test(string))) return false;
        if (type === 'phone' && (string == "" || !regPhone.test(string))) return false;

        return true;
    },
}

export default function Variable() {
    return variable;
};