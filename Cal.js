let input = document.getElementById("input");
let total = "";   
document.getElementById("buttonContainer").addEventListener("click", () => {
    // console.log(event.target.innerHTML);
    if (event.target.innerHTML === "reset") {
        input.value = null;
        total = " ";
    }
    else if(event.target.innerHTML === "="){
        total = eval(total);
        if(total == null){
            input.value = "NaN/infinity"
        }else{
            input.value = total;
        }
    }
    else{
        total += event.target.innerHTML;
        input.value = total;
    }

})
