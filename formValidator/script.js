const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Show input Error Message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

//Check email is valid
function checkEmail(input){
    var re = /\S+@\S+\.\S+/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,'Email is not valid')
    }
}

//Password match
function checkPassowordMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input1,'Passwords doesnot match');
    }
    else{

    }
}

//Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input)
        }
    })
    
}

//Check input Length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(
            input,`${getFieldName(input)} must be atleast ${min} charaters`
        );
    }
    else if(input.value.length > max){
        showError(
            input,`${getFieldName(input)} must be less than ${min} charaters`
        );
    }
    else{
        showSuccess(input);
    }
}

//get Fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event Listners
form.addEventListener('submit',function(e){
    e.preventDefault();




    // if(username.value == ''){
    //     showError(username,'Usern ame is required');
    // }
    // else{
    //     showSuccess(username);
    // }
    // if(email.value == ''){
    //     showError(email,'Email is required');
    // }
    // else if(!isValidEmail(email.value)){
    //     showError(email,'Email is not valid');
    // }
    // else{
    //     showSuccess(email);
    // }
    // if(password.value == ''){
    //     showError(password,'Password is required');
    // }
    // else{
    //     showSuccess(password);
    // }
    // if(password2.value == ''){
    //     showError(password2,'Passoword2 is required');
    // }
    // else{
    //     showSuccess(password2);
    // }


    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email)
    checkPassowordMatch(password,password2);
    
})