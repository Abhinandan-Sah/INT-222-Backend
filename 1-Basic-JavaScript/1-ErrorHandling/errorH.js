function First(){
    let a=123;
    let b=0; 
    try{
        if(b==0){
            throw "Do not divisible by zero";
        }
    }
    catch(e){
        document.getElementById('demo').innerHTML +=
        "<br>" + e + "<br>";
    }
    finally{
        document.getElementById('demo').innerHTML +=
        "it will execute anyways!";
    }
}