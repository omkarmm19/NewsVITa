
var buttons = document.getElementsByClassName("action");


var links = [
    "https://forms.gle/pzfXBbdsExQ6h6816",  
    "https://docs.google.com/forms/d/e/1FAIpQLSepBaa_ql-WFKQQaTlCsRxzbvJ-E3byc75FDyniw5le1vDopg/viewform", 
    "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdPUQx-pXVsgnsHTcx84MoxXRXLDDgNInKpiJzGLBz6TlUB2w/viewform?usp=send_form",  
    "https://forms.gle/MdBfARB1SGmhn3BM8"   
];

// Loop through all buttons and add the click event listener to each
for (var i = 0; i < 5; i++) {
    (function(index) {
        buttons[index].addEventListener("click", function() {
           
            window.location.href = links[index];
        });
    })(i);
}
