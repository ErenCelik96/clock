const sec = document.querySelector(".secs"); // html den secs class ını seçip burada atadık
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

function tiktak() { 
  let second = new Date().getSeconds(); //fonk içinde saniye, dakika ve saat verilerini çektik
  let minute = new Date().getMinutes();
  let hour = new Date().getHours();

  sec.style.transform = `rotate(${180+(second * 6)}deg)`//çektiğimiz verilere uygun olarak css deki değerleri değiştirmek sureti ile çubukları hareket ettiriyoruz
  min.style.transform = `rotate(${180+(minute * 6)}deg)`
  hours.style.transform = `rotate(${180+(hour * 30)}deg)`

  console.log({second,minute,hour})
}

setInterval(tiktak, 1000); //her 1000 milisaniyede işlem yapar