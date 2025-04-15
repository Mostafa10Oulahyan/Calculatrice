let zero=document.getElementById("z")
let one=document.getElementById("one")
let two=document.getElementById("two")
let threee=document.getElementById("three")
let four=document.getElementById("four")
let five=document.getElementById("five")
let six=document.getElementById("six")
let seven=document.getElementById("seven")
let eight=document.getElementById("eight")
let nine=document.getElementById("nine")
let numbers=[zero,one,two,threee,four,five,six,seven,eight,nine]
numbers.forEach(n=>{
    n.style.color='white'
})

let per=document.getElementById("per")
let divison=document.getElementById("divison")
let sub=document.getElementById("sub")
let multi=document.getElementById("multi")
let plus=document.getElementById("plus")
let equal=document.getElementById("e")
let parentèse1=document.getElementById("parentèse1")
let parentèse2=document.getElementById("parentèse2")
let cos=document.getElementById("cos")
let sin=document.getElementById("sin")
let tan=document.getElementById("tan")
let sqrt=document.getElementById("sqrt")
let a=[cos,sin,tan,sqrt]
a.forEach(elt=>{
    elt.style.color="yellow"
})
let point=document.getElementById("point")
let CE=document.getElementById("CE").style.color='red'
let C=document.getElementById("C").style.color="red"
let num=""
let operation = document.getElementById("operation");
let res = document.getElementById("res");

let history = document.getElementById("history")
function addToHistory(op, result) {
    let item = document.createElement("div")
    item.innerHTML = `${op} = <strong>${result}</strong>`
    history.prepend(item) 
}
$('#H').on("click", function () {
    $('#history').slideToggle(400)
})
function UpdateClear(){
    if(document.querySelectorAll("#history > div").length==0){
        document.getElementById("btn").style.display="none"
    }
    else{
        document.getElementById("btn").style.display="block"
    }
}
document.getElementById("btn").onclick=function(){
    let historyDivs = document.querySelectorAll("#history > div");
    historyDivs.forEach(d => d.remove())
    operation.innerHTML = ""
    res.innerHTML = ""
    UpdateClear()
}

document.querySelectorAll("input[type=button]").forEach(buttons => {
    buttons.addEventListener("click", function () {
        let value = this.value
        if (operation.innerHTML==""){
            res.innerHTML=""    
        }
        if (value === "C") {
            num = ""
            operation.innerHTML = ""
            res.innerHTML = ""
        }
        else if (value === "CE") {
            num = num.slice(0, -1)
            operation.innerHTML = num
            res.innerHTML = ""
        }
         else if (value === "=") {
            try {
                num = eval(num.replace("sqrt", "Math.sqrt")
                    .replace("cos", "Math.cos")
                    .replace("sin", "Math.sin")
                    .replace("tan", "Math.tan")
                    .replace("%","*0.01"))
                res.innerHTML = num
                if (operation.innerHTML && res.innerHTML && res.innerHTML !== "Error") {
                    addToHistory(operation.innerHTML, res.innerHTML);
                    UpdateClear()
                }
            } catch {
                num = "Error"
                res.innerHTML = num
            }
        }
        else if(value!=="🕘" ) {
            num += value
            operation.innerHTML = num
        }
    })
})
//    JS  TOogle HHHHHh
const TOGGLE_BTN = document.getElementById("toggleBtn");

const TOGGLE = () => {
    const IS_PRESSED = TOGGLE_BTN.matches("[aria-pressed=true]");
    document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
    TOGGLE_BTN.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};

TOGGLE_BTN.addEventListener("click", TOGGLE);