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
let scientific=document.querySelectorAll(".sci")
 scientific.forEach(sc=>{
    sc.style.color="rgb(18, 129, 255)"
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
                    .replace("%","*0.01")
                    .replace("ln","Math.log10")
                    .replace("π","Math.PI") 
                    .replace("e","Math.E")
                    .replace("x²", "**2")
                    .replace("xᵇ", "**")
                    .replace("10ˣ", "10**")
                    .replace(/eˣ(\d+)/g, "Math.exp($1)")
                    .replace(/(\d+)!/g, "factorial($1)")
                    // .replace("ln","Math.log(")
                    // .replace("1/x", "1/"))
            )

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
function factorial(n) {
    if (n < 0) {
        res.innerHTML = "ERROR"
        return;
    }
    let fa = 1;
    for (let i = n; i >= 1; i--) {
        fa *= i;
    }

    res.innerHTML = fa;
    return fa
}
$('#arrow').on("click", function () {
        $('#calculatrice').toggleClass("cal");
        $('.sci').css({
            "display":"block"
        });   
        if ($('#calculatrice').hasClass('cal')) {
        $('#calculatrice').animate({ width: "700px" }, 1500);
        $('#sc-Maths').fadeIn(1500);
     } else {
        $('#calculatrice').animate({ width: "400px" }, 500);
        $('#sc-Maths').fadeOut(500);
    }

    $('#operation').html("");
    $('#arrow').toggleClass("a");
});
//    JS  TOogle HHHHHh
const TOGGLE_BTN = document.getElementById("toggleBtn");

const TOGGLE = () => {
    const IS_PRESSED = TOGGLE_BTN.matches("[aria-pressed=true]");
    document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
    TOGGLE_BTN.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};
TOGGLE_BTN.addEventListener("click", TOGGLE);