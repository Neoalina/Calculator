function getA(){
    let a=document.getElementById('number1').value;
    return +a;
}
function getB(){
    let b=document.getElementById('number2').value;
    return +b;
}

function plus(){
    document.getElementById('answer').value=(getA() + getB());
}
function minus(){
    document.getElementById('answer').value=(getA() - getB() );
}
function multiplication(){
    document.getElementById('answer').value=( getA() * getB() );
}
function division(){
    if (getB()==0) {
        alert( 'Делить на ноль нельзя!' );
    } else {
    document.getElementById('answer').value=( getA() / getB() );}
}