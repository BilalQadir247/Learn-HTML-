//Search box
function searchlist(){
  let input = document.getElementById("Search").value.toLowerCase();
  let li = document.querySelectorAll('#mylist li');

  li.forEach(item => {
   let a = item.querySelector("a");

   if(a){
    let text = a.innerText.toLowerCase();
    
    if(text.includes(input)){
        item.style.display = "";
    } else {
        item.style.display = "none"
    }
   }
  })
}

//Code Editor

let output = document.querySelector("#output");
let html = document.querySelector(".code-html-left textarea");
let css = document.querySelector(".code-css-left textarea");

function runcode(){
  let htmlcode = html.value;
  let csscode = "<style>" + css.value + "</style>"
  output.contentDocument.body.innerHTML = htmlcode + csscode;

}

html.addEventListener("keyup", runcode)
css.addEventListener("keyup", runcode)


//try it yourself

const codebtn1 = document.querySelectorAll(".code-btn-1");
codebtn1.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("try-here-code").scrollIntoView({
      behavior: "smooth"
    })
  })
}); 


// login and sign up

const login = document.querySelector("#login");
const signup = document.querySelector("#signup");
const quizbutton = document.querySelector(".code-btn-2");

signup.addEventListener("click",()=>{
  window.location.href = "sign.html"
});

login.addEventListener("click", () => {
  window.location.href = "login.html"
});

