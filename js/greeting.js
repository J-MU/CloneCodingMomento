const loginForm=document.querySelector('.LoginForm');
const loginInputText=loginForm.querySelector('input');
const UserNameView=document.querySelector('.UserNameView');

const HIDDEN_CLASS_NAME="hidden";
const USERNAME_KEY='userName';

function onLoginSubmit(event){
    const UserName=loginInputText.value;  

//     // input innerText를 UserName에 삽입  
    if(UserName===''||UserName===null||UserName==undefined){
        return;
    }
    localStorage.setItem(USERNAME_KEY,UserName);
    
    event.preventDefault(); //새로고침 Lock
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    
    //Show Welcome Ment by using UserName
    paintGreetings(UserName);
    console.log("sumit");
}
function paintGreetings(name){
    UserNameView.innerText=`환영합니다. ${name} 님!`;
    UserNameView.classList.remove(HIDDEN_CLASS_NAME);
}
//코드 시작
const savedUserName=localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    //show Form
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}else{
    paintGreetings(savedUserName);
}
