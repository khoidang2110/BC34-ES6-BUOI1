

    const coloList = ["pallet", "viridian", "pewter", "cerulean", 
"vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

   const buttonColor = ()=>{
   var btnColor = '';
   btnColor+=`<button class="color-button ${coloList[0]} active" onclick="changeHouseColor('${coloList[0]}')" ></button>`;
   
    for (let index1=1;index1<coloList.length; index1++){
 btnColor+= `<button class="color-button ${coloList[index1]}" onclick="changeHouseColor('${coloList[index1]}')"></button>`
   }
   document.getElementById('colorContainer').innerHTML = btnColor;
    };
//load trang web, thêm các button Color
window.onload = buttonColor;

let changeHouseColor = (color) =>{
    document.getElementById('house').className = 'house' + " " + color;
    activeButton();
    
}

const activeButton = () => {
    let btnContainer = document.querySelector('#colorContainer');
    let listBtn = btnContainer.getElementsByClassName('color-button');

    for (var i = 0; i < listBtn.length; i++) {
        listBtn[i].addEventListener('click', function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

