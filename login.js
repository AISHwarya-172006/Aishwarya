function handleLogin()
{
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    const errorMsg=  document.getElementById('Error');

    const LoginData = [
        {username= "username",password:"password"},
        {username:"cr7", password:"pass123"},

    ]
    const isValid = LoginData.some((user)=>user.username && user.password== password);
    if(isValid){
        window.location.href = "flexbox.html"
        errorMsg.innerText="Login Successfull"

    }
    else{

        errorMsg.innerText = "Invalid Credentials"
    }
}