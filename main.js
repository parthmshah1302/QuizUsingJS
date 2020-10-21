function check(){
    var q1=document.myform.q1.value;
    var q2=document.myform.q2.value;
    var q3=document.myform.q3.value;
    var q4=document.myform.q4.value;
    var q5=document.myform.q5.value;
    
    var counter=0;
    if(q1=="a"){
        counter++;
    }
    if(q2=="a"){
        counter++;
    }
    if(q3=="b"){
        counter++;
    }
    if(q4=="d"){
        counter++;
    }
    if(q5=="c"){
        counter++;
    }
    alert("Your score is "+counter+"/5 marks.")
}