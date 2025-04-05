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
let Math=[cos,sin,tan,sqrt]
Math.forEach(elt=>{
    elt.style.color="yellow"
})
let point=document.getElementById("point")
let CE=document.getElementById("CE").style.color='red'
let C=document.getElementById("C").style.color="red"
let num=""
let operation = document.getElementById("operation");
let res = document.getElementById("res");
document.querySelectorAll("input[type=button]").forEach(buttons => {
    buttons.addEventListener("click", function () {
        let value = this.value
        if (value == "C") {
            num = ""
            operation.innerHTML = ""
            res.innerHTML = ""
        }
        else if (value == "CE") {
            num = num.slice(0, -1)
            operation.innerHTML = num
            res.innerHTML = ""
        }
         else if (value == "=") {
            try {
                num = eval(num.replace("sqrt", "Math.sqrt")
                    .replace("cos", "Math.cos")
                    .replace("sin", "Math.sin")
                    .replace("tan", "Math.tan")
                    .replace("%","*0.01"))
                res.innerHTML = num
            } catch {
                num = "Error"
                res.innerHTML = num
            }
        }
        else {
            num += value
            operation.innerHTML = num
        }
    })
})

