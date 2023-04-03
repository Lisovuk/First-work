function getWeather() {
   let request;
     if(window.XMLHttpRequest){
       request = new XMLHttpRequest();
     }
     else{
       request = new ActiveXObject("Microsoft.XMLHTTP");
     }
     

     request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Запоріжжя&units=metric&lang=ru&appid=f8a1e372a3e96d51cd1678b0126559b0");
     request.onload = function() {

       if(request.status === 200){
         document.getElementById('out').style.display = 'block'
         document.getElementById('outError').style.display = 'none'

         let weatherObj = JSON.parse(request.response)
         console.log(weatherObj);

         feelsId.innerText = weatherObj.main.temp_max + ' ℃'

         iconCode = weatherObj.weather[0].icon
         console.log(iconCode);

         imagePath = ' http://openweathermap.org/img/wn/' + iconCode + '@2x.png'
         console.log(imagePath);

         document.getElementById('weaterImg').src = imagePath
       }
       else if(request.status === 400) {
         document.getElementById('outError').style.display = 'block'
         document.getElementById('out').style.display = 'none'
       }
       
     }
       request.send();
 }





 function exchangeRate() {
   let request;
   if(window.XMLHttpRequest){
     request = new XMLHttpRequest();
   }
   else{
     request = new ActiveXObject("Microsoft.XMLHTTP");
   }
 


 request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
 request.onload = function() {
   if (request.status == 200) {
     // alert(request.response)
     allResponse = JSON.parse(request.response)
     console.log(allResponse);
     document.getElementById('valEUR').innerText = allResponse[0].ccy
     document.getElementById('valUSD').innerText = allResponse[1].ccy

     document.getElementById('buyEUR').innerText = allResponse[0].buy
     document.getElementById('buyUSD').innerText = allResponse[1].buy
   
     document.getElementById('saleEUR').innerText = allResponse[0].sale
     document.getElementById('saleUSD').innerText = allResponse[1].sale
   }
 }
 
 request.send()
}