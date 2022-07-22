//selecting all collapse class elements
let collapsible = document.getElementsByClassName("collapse");
var i;
// looping through each collapse element and changing its maxHeight property
for (i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}