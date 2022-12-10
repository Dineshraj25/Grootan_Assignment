const url ="https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
async function getapi(url) {

    const response = await fetch(url)
    .then(response => response.json())
    // .then(data => JSON.stringify(data))
    .then(res=>{
    console.log(res)
    show(res);}
    )
    .catch((err)=>console.log(err));
    // var data = await response.json();
    // var con=JSON.stringify(data);
    // console.log(con);
  
    // show(con);
}
getapi(url);

function show(data){
    var demo=data.results[0];
    document.getElementById("demo").innerHTML = demo.question;
    document.getElementById("age1").innerHTML = demo.incorrect_answers[0];
    document.getElementById("age2").innerHTML = demo.incorrect_answers[1];
    document.getElementById("age3").innerHTML = demo.incorrect_answers[2];
}