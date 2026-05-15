const products = [
    {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/01.jpg',
      name:'noodle one',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'12$' ,
      id:1
    },
    {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/02.jpg',
      name:'Nooe',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'66$',
      id:1 
    },
    {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/03.jpg',
      name:'One',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'89$' ,
      id:1
    },
    {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/04.jpg',
      name:'dle Oe',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'100$', 
      id:1
    },
    {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/05.jpg',
      name:'Ne e',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'132$', 
      id:2
    },
    {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/06.jpg',
      name:'Noname',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'57$' ,
      id:2
    },
    {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/07.jpg',
      name:'Oe',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'92$' ,
      id:2
    },
        {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/08.jpg',
      name:'Nopol',
      text:`Orci varius natoque penatibus et <br> 
      magnis dis parturient montes, <br>
       nascetur ridiculus mus.`,
      price:'22$' ,
      id:2
    },
        {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/08.jpg',
      name:'Nopol',
      text:`Orci varius natoque penatibus et <br> 
      magnis dis parturient montes, <br>
       nascetur ridiculus mus.`,
      price:'22$' ,
      id:3
    },
        {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/03.jpg',
      name:'One',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'89$',
      id:3
    },
        {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/02.jpg',
      name:'Nooe',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'66$' ,
      id:3
    },
        {
      img:'https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/06.jpg',
      name:'Noname',
      text:`Orci varius natoque penatibus et <br>
      magnis dis parturient montes,<br>
       nascetur ridiculus mus.`,
      price:'57$' ,
      id:3
    },
]
let row = document.querySelector('#products .row');

function el(arr){
 row.innerHTML='';

 for(let i = 0; i < arr.length; i++){

  const col = document.createElement('div');

  col.className = 'col';
  col.classList.add('w-25');

  col.innerHTML = `
    <div class="wrapper prod-wrap">
        <img src="${arr[i].img}">
        <div class="title-2 dis-2 blue">${arr[i].name}</div>
        <div class="prod-text dis-2">${arr[i].text}</div>
        <div class="price dis-2 green">${arr[i].price}</div>
    </div>
  `;

  row.appendChild(col);
 }
}

el(products.filter(item => item.id === 1));

let btn = document.querySelectorAll('.btn-green');


for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(){
    for(let j = 0; j < btn.length; j++){
      btn[j].classList.remove('active');
    }
    el(products.filter(item => item.id === i + 1));
    btn[i].classList.add('active');
  });
}


