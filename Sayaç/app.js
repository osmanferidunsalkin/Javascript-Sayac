let sayi=document.querySelector(".rakam"),
 artı=document.querySelector(".arti"),
 eksi=document.querySelector(".eksi"),
 Sifirla=document.querySelector(".Sifirla");
let value=0;
artı.addEventListener("click",()=>{
value++;
sayi.textContent=value;
});
eksi.addEventListener("click",()=>{
    value--;
    sayi.textContent=value;
    });
 Sifirla.addEventListener("click",()=>{
        value=0;
        sayi.textContent=value;
        });