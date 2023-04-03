
function chekForm() {
  let name = document.getElementById('name');
  let nameV = name.value;

  let simbol = /^[А-ЯІЇЄҐ][а-яіїєґ']*(-[А-ЯІЇЄҐ][а-яіїєґ']+)*$/iu;
  name.style.border = 'none';

  if (!simbol.test(nameV)) {
    name.style.border = '2px solid red';
    return false;
  }

  let num = document.getElementById('tel');
  if (!num) {
    console.error("No element found with id 'tel'");
    return false;
  }

  let numTelValue = num.value;
  let simbolNumTel = /^(0|380)\d{9}$/;
  num.style.border = 'none';

  if (!simbolNumTel.test(numTelValue)) {
    num.style.border = '2px solid red';
    return false;
  }

  // сохраняем данные в sessionStorage
  sessionStorage.setItem('name', nameV);
  sessionStorage.setItem('phone', numTelValue);

  return true;
}

// добавляем обработчик отправки формы
let poolForm = document.getElementById('pool');
if (poolForm) {
  poolForm.addEventListener('submit', function(event) {
    // проверяем форму
    if (!chekForm()) {
      event.preventDefault(); // останавливаем отправку формы, если есть ошибки
    }
  });
}

 
// COMMENT

    let button = document.querySelector('button');
    let comments = [];

    button.addEventListener("click", function(){
        let userName = document.querySelector('#userName');
        let userNameValue = userName.value;
        console.log(userNameValue);
        let userComment = document.querySelector('#comment');
        let userCommentValue = userComment.value;
        console.log();

        if(userNameValue == "" || userCommentValue == ""){
            alert("Заповніть поле");
            return;
        }

        let d = new Date();
        let comment = {
            name: userNameValue,
            date: d.toLocaleString(),
            text: userCommentValue
        };
        
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));

        addComment(comment);

        userComment.value = "";
        window.scrollTo(0, document.body.scrollHeight);
    });

    function addComment(comment) {
        let div = document.createElement("DIV");
        let name = document.createElement("h5");
        name.innerHTML = comment.name;
        div.appendChild(name);

        let date = document.createElement("p");
        date.innerHTML = comment.date;
        div.appendChild(date);

        let commentary = document.createElement("p");
        commentary.innerHTML = comment.text;
        div.appendChild(commentary);

        commentsDiv.appendChild(div);
    }

    // Перевіряємо, чи є коментарі в Local Storage
    if(localStorage.getItem('comments')) {
        comments = JSON.parse(localStorage.getItem('comments'));
        comments.forEach(comment => {
            addComment(comment);
        });
    }

    

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
  







