

let products = [
   {
     id: "letter-А",
     name: "Атлас",
     image: "../images/page2/Atlas.jpeg",
     alt: 'Atlas',
   },
   {
     id: "letter-С",
     name: "Стрейч-атлас",
     image: "../images/page2/Stretch-atlas.jpeg",
     alt: 'Stretch atlas',
   },
   {
     id: "letter-Г",
     name: "Габардин",
     image: "../images/page2/Gabardine.jpeg",
     alt: 'Gabardine',
   },
   {
     id: "letter-Ф",
     name: "Фліс",
     image: "../images/page2/Fleece.jpeg",
     alt: 'Fleece',
   },
   {
     id: "letter-К",
     name: "Кулір",
     image: "../images/page2/Jersey.jpeg",
     alt: 'Jersey',
   },
   {
     id: "letter-Б",
     name: "Бавовна",
     image: "../images/page2/Cotton.jpg",
     alt: 'Cotton',
   },
   {
     id: "letter-Т",
     name: "Трикотаж трьохнитка",
     image: "../images/page2/three-thread.jpeg",
     alt: 'Three thread',
   },
   {
     id: "letter-Т",
     name: "Трикотаж двохнитка",
     image: "../images/page2/dvunitka(2).jpg",
     alt: 'Dvunitka',
   },
   {
     id: "letter-Т",
     name: "Трикотаж французький",
     image: "../images/page2/French-knitwear.jpg",
     alt: 'French knitwear',
   },
   {
     id: "letter-К",
     name: "Костюмна тканина (драп)",
     image: "../images/page2/2-drapovaya-tkan.jpg",
     alt: 'Suit fabric (Drap)',
   },
   {
     id: "letter-К",
     name: "Костюмна тканина (шотландка)",
     image: "../images/page2/Plaid-suit-fabric.jpg",
     alt: 'Plaid suit fabric',
   },
   {
     id: "letter-Ш",
     name: "Шкірзам",
     image: "../images/page2/Artificial-leather.jpeg",
     alt: 'Artificial leather',
   },
   {
     id: "letter-З",
     name: "Замша",
     image: "../images/page2/Suede.jpeg",
     alt: 'Suede',
   },
   {
      id: "letter-П",
      name: "Плащівка",
      image: "../images/page2/raincoat-fabric.jpeg",
      alt: 'Raincoat-fabric',
    },
    {
      id: "letter-Д",
      name: "Джинс",
      image: "../images/page2/jeans.jpg",
      alt: 'Jeans',
    },
    {
      id: "letter-Л",
      name: "Льон",
      image: "../images/page2/linen.jpeg",
      alt: 'Linen',
    },
    {
      id: "letter-Ш",
      name: "Шифон",
      image: "../images/page2/Chiffon.jpg",
      alt: 'Chiffon',
    },
    {
      id: "letter-М",
      name: "Манжетна тканина",
      image: "../images/page2/Cuff-fabric.jpg",
      alt: 'Cuff fabric',
    },
    {
      id: "letter-О",
      name: "Оксфорд",
      image: "../images/page2/oxford-1.jpg",
      alt: 'Oxford fabric',
    },
    {
      id: "letter-Т",
      name: "Тканина на постіль (бязь)",
      image: "../images/page2/calico-fabric.jpg",
      alt: 'Сalico fabric',
    },
    {
      id: "letter-П",
      name: "Підкладка",
      image: "../images/page2/Lining-fabric.jpg",
      alt: 'Lining fabric',
    }
   
 ]

 let info = JSON.stringify(products)
 let infoText = JSON.parse(info)
 console.log(infoText);

 function blockProduct() {
   let productsDiv = document.getElementById('productsDiv');

   for (i = 0; i < 21; i++) {
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