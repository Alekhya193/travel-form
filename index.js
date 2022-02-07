console.log("sleepyyyyyyyy");

const namee= document.getElementById('name');
const email= document.getElementById('email');
const phone =document.getElementById('phone');

let validname= false;
let validemail=false;
let validphone=false;
$('#failure').hide();
$('#success').hide();

// console.log(namee,email,phone)

namee.addEventListener('blur',()=>{
    console.log("namee is blured");
    //validation
    let regex=/^[a-zA-Z]([0-9a-zaA-Z]){2,10}$/;
    let str=namee.value;
    console.log(regex,str)
    if (regex.test(str)) {
        console.log('name is valid');
        namee.classList.remove('is-invalid');
        validname= true;
    }
    else{
        console.log("name is not valid")
        namee.classList.add('is-invalid');
        validname= false;
    }
})

email.addEventListener('blur',()=>{
    console.log("email is blured ");
    //validation
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;  // /^ ()@()\.() $/
    let str=email.value;
    console.log(regex,str)
    if (regex.test(str)) {
        console.log('email is valid');
        email.classList.remove('is-invalid');
        validemail= true;
    }
    else{
        console.log("email is not valid")
        email.classList.add('is-invalid');
        validemail= false;
    }
})

phone.addEventListener('blur',()=>{
    console.log("phone is blured");
    //validation
    let regex=/^([0-9]){10}$/;
    let str=phone.value;
    console.log(regex,str)
    if (regex.test(str)) {
        console.log('phone no. is valid');
        phone.classList.remove('is-invalid');
        validphone =true;
    }
    else{
        console.log("phone no. is not valid")
        phone.classList.add('is-invalid');
        validphone =false;
    }
})

console.log(validemail,validname,validphone);
let submit= document.getElementById('submit');

submit.addEventListener('click',(e)=>{
    e.preventDefault();


    if (validemail && validname && validphone) {
        let failure=document.getElementById('failure');
        console.log("event added/submitted");
    let success =document.getElementById('success');
    success.classList.add('show');
    // failure.classList.remove('show');

    $('#failure').hide();
    $('#success').show();

    }

    else{
        console.log("event not added");
        let failure=document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();

    }
})