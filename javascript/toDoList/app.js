const btnDOM = document.querySelector("#liveToastBtn")
btnDOM.addEventListener('click', bilgiGonder);
const textDOM = document.querySelector("#task");




const isNull = (str) => {
    let control = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            control = false;
        }
    }
    return control;
}


function bilgiGonder() {

    const listDOM = document.querySelector("#list");
    const liDOM = document.createElement("li");
    const str = textDOM.value;

    if (str == null || isNull(str)) {

        alert("birşeyler yazmalısın.");
        textDOM.value = "";

    } else {

        liDOM.innerHTML =
            `${textDOM.value} 
            <span onclick ="hide()" class="ml-2 mb-1 close" id="liBtn" data-dismiss="toast" aria-label="Close">&times;</span> 
        ` ;
        listDOM.append(liDOM)
        liDOM.setAttribute("class", "");
        localStorage.setItem(textDOM.value, 'yapılacak');
        textDOM.value = "";
        
    }
}


function hide() {
    let liBtnDOM = document.querySelectorAll("#liBtn");

    for (let i = 0; i < liBtnDOM.length; i++) {
        liBtnDOM[i].onclick = function () {
            this.parentNode.remove();
            let key = this.parentNode.innerText;
            console.log(key)
            localStorage.removeItem(key.value);

        }
    }
}



var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);






