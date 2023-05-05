window.addEventListener('load', maFunction);

function maFunction () {
    
    setTimeout(function() {
        console.log('Ma page est chargé');
    }, 1000);  
};

const div1 = document.getElementsByClassName ('div1')[0];

div1.addEventListener('click', jeClique);

function jeClique() {
    console.log('je clique sur ma div1');   
}

div1.addEventListener('click', changerBg);

function changerBg() {
    if  (div1.style.backgroundColor == "") {
        div1.style.backgroundColor = "green";
    } else if (div1.style.backgroundColor != "") {
        div1.style.backgroundColor = "";
    }
};

const div2 = document.getElementsByClassName ('div2')[0];

console.log('div2');

div2.addEventListener('dblclick', play);

function play() {
    console.log('je clique sur ma div2');

    if  (
        div2.style.backgroundColor == "") {
        div2.style.backgroundColor = "blue";
    } 
    else if (
        div2.style.backgroundColor != "") {
        div2.style.backgroundColor = "";
    }
};


