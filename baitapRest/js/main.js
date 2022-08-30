
const getSum=(...rest) =>{
    let tinhTong = 0;
    for(let i = 0;i < rest.length; i++){
        tinhTong += rest[i]*1;
    }
    let diemTB = tinhTong/rest.length
   return diemTB;
}

document.getElementById("btnKhoi1").onclick = () =>
{
    
let ly  = document.getElementById("inpLy").value;
let hoa = document.getElementById("inpHoa").value;
 let toan = document.getElementById("inpToan").value;
document.getElementById("tbKhoi1").innerHTML = getSum(toan,ly,hoa);

};
document.getElementById("btnKhoi2").onclick = () =>
{
let van = document.getElementById("inpVan").value;
let su = document.getElementById("inpSu").value;
let dia = document.getElementById("inpDia").value;
let english = document.getElementById("inpEnglish").value;

document.getElementById("tbKhoi2").innerHTML = getSum(van,su,dia,english);

};