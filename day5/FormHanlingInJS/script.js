const handleUserName = (e) => {
    const target = e.target;
    console.log(target.value);
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    // const username=e.target[0].value
    // const useremail=e.target[1].value
    // const userpassword=e.target[2].value

    // console.log(username ,useremail,userpassword);

    const target=e.target;
    const userName=target.username.value;
    const userEmail=target.useremail.value;
    const userPassword=target.password.value;
    if(!userEmail.endsWith('@lpu.in')){
        alert('please enter your lpu email id')
    }else{
        console.log('correct')
    }

}