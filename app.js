let data = [
    {
        Q: "Q : JS is used For?",
        a: "Frontend",
        b: "Animation",
        c: "Dynamically update Content",
        d: "Backend",
        ans: "ans3",

    },
    {
        Q : "Q : Fullform of JS ?",
        a : "JavaScript",
        b : "JavaSience",
        c : "JavaS",
        d : "Javasecure",
        ans : "ans1",

    },
    {
        Q : "Q : who developed JS ?",
        a : "santa",
        b : "brenden Eich",
        c : "george",
        d : "Neck",
        ans : "ans2",

    },
    {
        Q : "Q : When JS develope ?",
        a : "1995",
        b : "1990",
        c : "1999",
        d : "1892",
        ans:"ans1"

    },
   
    {
        Q : "Q : how can we create array in javascript   ?",
        a : "{}",
        b : ":",
        c : "[]",
        d : "()",
        ans:"ans3"

    },
    {
        Q : "How can you handle asynchronous operations in JavaScript?",
        a : "Using promises or async/await",
        b : "Using synchronous functions",
        c : "Using eval()",
        d : "Using the setTimeout() function",
        ans:"ans1"

    },
    {
        Q : " What will null == undefined return in JavaScript?",
        a : " true",
        b : "false",
        c : "undefined",
        d : "null",
        ans:"ans1"

    },
    {
        Q : " What will 1 + '1' return in JavaScript?",
        a : " '11'",
        b : "2",
        c : "nan",
        d : "11",
        ans:"ans1"

    },
    {
        Q : "What is the output of Object.getPrototypeOf({})?",
        a : "Object.prototype",
        b : "null",
        c : "undefined",
        d : "Object",
        ans:"ans1"

    },
    {
        Q : "Q : What is the Symbol data type used for in JavaScript?",
        a : "To create unique identifiers for object properties",
        b : "To represent text data",
        c : " To define functions",
        d : "To represent boolean values",
        ans:"ans1"

    },

] 
 
let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options");
let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");

question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;

function checkAns(){
 let ans;
  answers.forEach((curElement)=>{
    if(curElement.checked){
        ans = curElement.id;
        console.log(ans);
    }
  })
  return ans;
}

function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;
    })
}
function next(){

    let checkedAns = checkAns();

    if(checkedAns == data[num].ans){
        score++;
    }
    num++;
    disSelect();

    if(num < data.length){
question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;
    }else{
        myScore.innerHTML=`You Scored ${score}/${data.length} <br/><br/>
        <button onclick="location.reload()">  start again</button>`;

        nextBtn.style.display="none";
        document.querySelector(".btn").style.backgroundColor="lightBlue"
    }

}