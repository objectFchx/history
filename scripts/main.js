const myImage = document.querySelector('img');
let img1 = 'images/new.png',
img2 = "images/offer_love.gif";
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc == img1) {
        myImage.setAttribute('src',img2)
    } else {
        myImage.setAttribute('src',img1)
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName(){
    const myName = prompt("请输入你的名字");
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name",myName);
        myHeading.textContent = `Welcome ${myName}`;
    } 
    
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storeName = localStorage.getItem('name');
    myHeading.textContent = `Welcome ${storeName}`;
}

myButton.onclick = function(){
    setUserName();
}