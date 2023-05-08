const questions=[{
    "que": "Which of the following languages is more suited to a structured program?",
    "a":"PL/1",
    "b":"FORTRAN",
    "c":"BASIC",
    "d":"PASCAL",
    "correct":"d"
},
{
    "que": "The brain of any computer system is",
    "a":"ALU",
    "b":"Memory",
    "c":"CPU",
    "d":"Control unit",
    "correct":"c"
},
{
    "que": "Which of the following is not a logical data-base structure?",
    "a":"tree",
    "b":"relational",
    "c":"network",
    "d":"chain",
    "correct":"d"
},
]
let index= 0;
let total=questions.length;
let right=0,
wrong=0;

const quesBox = document.getElementById("quesBox") 
const optioninputs=document.querySelectorAll('.option')
const loadquestions=()=>{
    if (index===total){
        return endQuiz()
    }
    reset()
    const data=questions[index]
    quesBox.innerHTML=`${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerHTML= data.a ;
    optioninputs[1].nextElementSibling.innerHTML = data.b ;
    optioninputs[2].nextElementSibling.innerHTML= data.c;
    optioninputs[3].nextElementSibling.innerHTML = data.d;
}
const submitquiz=()=>{
    const data =questions[index];
    const ans=getanswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadquestions();
    return;
}
const getanswer=()=>{
    let answer;
    optioninputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}
const reset=()=>{
    optioninputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )

}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align="center">
    <h3> thanks for playing the quiz</h3> 
    <h2> ${right}/${total} </h2> are correct`
}
loadquestions();






