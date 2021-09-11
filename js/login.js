
 document.getElementById('login-submit').addEventListener('click', function(){
     //email

     const emailField = document.getElementById('user-email');
     const userEmail = emailField.value;

     //password

     const passwordField = document.getElementById('user-password');
     const userPassword =  passwordField.value;

     //check pass- email

     if (userEmail == 'tanviraditto90@gmail.com' && userPassword == 'Aditto60254'){
         window.location.href = 'banking.html';
     }
 })

