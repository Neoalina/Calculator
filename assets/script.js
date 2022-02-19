function getA(){
    let a=document.getElementById('number1').value;
    return +a;
}
function getB(){
    let b=document.getElementById('number2').value;
    return +b;
}

// function plus(){
//     document.getElementById('answer').value=(getA() + getB());
// }
// function minus(){
//     document.getElementById('answer').value=(getA() - getB() );
// }
// function multiplication(){
//     document.getElementById('answer').value=( getA() * getB() );
// }
// function division(){
//     if (getB()==0) {
//         alert( 'Делить на ноль нельзя!' );
//     } else {
//     document.getElementById('answer').value=( getA() / getB() );}
// }


//создание класса со статическими методами
class Calculator {
    static PlusS(a, b) {
        return a+b;
    }
    static MinusS(a, b) {
        return a-b;
    }
    static MultiplicationS(a, b) {
        return a*b;
    }
    static DivisionS(a, b) {
        if (b==0) {
            alert( 'Делить на ноль нельзя!' );
        } else {
        return a/b
        }
    }
}


function plus() {
    document.getElementById('answer').value=Calculator.PlusS(getA(), getB());
}
function minus() {
    document.getElementById('answer').value=Calculator.MinusS(getA(), getB());
}
function multiplication() {
    document.getElementById('answer').value=Calculator.MultiplicationS(getA(), getB());
}
function division() {
    document.getElementById('answer').value=Calculator.DivisionS(getA(), getB());}
