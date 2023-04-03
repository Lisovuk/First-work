
 let callBtn = document.getElementById('call-btn');
  let callPopup = document.getElementById('call-popup');

  window.addEventListener('scroll', () => {
    let { bottom } = callBtn.getBoundingClientRect();
    let screenHeight = window.innerHeight;

    if (bottom < screenHeight) {
      callBtn.style.bottom = '20px';
    } else {
      callBtn.style.bottom = bottom - screenHeight + 20 + 'px';
    }
  });

  callBtn.addEventListener('click', () => {
    callPopup.style.display = 'block';
  });

  callPopup.addEventListener('click', (event) => {
    if (event.target === callPopup) {
      callPopup.style.display = 'none';
    }
  });

   
  function closePopup() {
    document.getElementById("call-popup").style.display = "none";
  }





  function chekForm2() {
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
      return false;
    }

    let numTelValue = num.value;
    let simbolNumTel = /^(0|380)\d{9}$/;
    num.style.border = 'none';

    if (!simbolNumTel.test(numTelValue)) {
      num.style.border = '2px solid red';
      return false;
    }

    return true;
  }

 
  let poolForm = document.getElementById('pool2');
  if (poolForm) {
    poolForm.addEventListener('submit', function(event) {

      if (!chekForm2()) {
        event.preventDefault(); 
      }
    });
  }


  let products = [
    {
      id: "letter-Р",
      name: "Резинка",
      image: "./images/page3/rubber-band.jpg",
      alt: 'Rubber band',
    },
    {
      id: "letter-Б",
      name: "Блискавка",
      image: "./images/page3/Lightning.jpg",
      alt: 'Lightning',
    },
    {
      id: "letter-А",
      name: "Атласні стрічки",
      image: "./images/page3/Satin-ribbons.jpg",
      alt: 'Satin ribbons',
    },
    {
      id: "letter-Р",
      name: "Репс",
      image: "./images/page3/repsjpg.jpg",
      alt: 'Ripple cloth',
    },
    {
      id: "letter-О",
      name: "Органза",
      image: "./images/page3/Orhanza.jpg",
      alt: 'Orhanza',
    },
    {
      id: "letter-Н",
      name: "Наліпки на одяг",
      image: "./images/page3/Stickers-on-clothes.jpeg",
      alt: 'Stickers on clothes',
    },
    {
      id: "letter-Т",
      name: "Тесьма",
      image: "./images/page3/Tesma.jpg",
      alt: 'Tesma',
    },
    {
      id: "letter-М",
      name: "Мереживо",
      image: "./images/page3/Lace.jpg",
      alt: 'Lace',
    },
    {
      id: "letter-Г",
      name: "Гавчики",
      image: "./images/page3/Zipper-lock.jpg",
      alt: 'Zipper lock',
    },
    {
      id: "letter-Н",
      name: "Набір для вишивки (муліне)",
      image: "./images/page3/Embroidery-kit-(mouliné).jpg",
      alt: 'Embroidery kit (mouliné)',
    },
    {
      id: "letter-Б",
      name: "Бісер",
      image: "./images/page3/Beads.jpeg",
      alt: 'Beads',
    },
    {
      id: "letter-П",
      name: "Пряжа",
      image: "./images/page3/spinning.jpg",
      alt: 'Spinning',
    }
    
  ]

  let info = JSON.stringify(products)
  let infoText = JSON.parse(info)
  console.log(infoText);

  function blockProduct() {
    let productsDiv = document.getElementById('productsDiv');

    for (i = 0; i < 12; i++) {
      let product = document.createElement('div');
      
      let wrapperBlock = document.createElement('div');
      wrapperBlock.classList.add('wrapper__block')

      let wrapperProduct = document.createElement('div')
      wrapperProduct.setAttribute('id', infoText[i].id);
      wrapperProduct.classList.add('wrapper__product')

      let imageProduct = document.createElement('img')
      imageProduct.src = infoText[i].image
      imageProduct.alt = infoText[i].alt 
      imageProduct.classList.add('image__product')

      let title = document.createElement('h5')
      text = infoText[i].name
      title.innerHTML = text
      title.classList.add('info')


      productsDiv.appendChild(product)
      product.append(wrapperBlock)
      wrapperBlock.appendChild(wrapperProduct)
      wrapperProduct.appendChild(imageProduct)
      wrapperProduct.appendChild(title)
    }

  }

  blockProduct();

  
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