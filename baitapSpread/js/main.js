
let str = document.querySelector(".heading").innerHTML;
let char = [...str];

let spanHTML = '';

for (var item of char) {
    spanHTML += `
        <span>${item}</span>
    `;
  
}
document.querySelector('.heading').innerHTML = spanHTML;