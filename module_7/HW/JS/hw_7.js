/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
function createPostCard (obj) {
  
   
    let div = document.createElement('div');
    div.classList.add('post');
   
    let img = document.createElement('img');
    img.classList.add('post__image');
    img.setAttribute('src',obj.img);
    img.setAttribute('alt','post image');
  
    let h2 = document.createElement('h2');
    h2.classList.add('post__title');
    h2.textContent = obj.title;
  
    let p = document.createElement('p');
    p.classList.add('post__text');
    p.textContent =obj.text;
  
  
    let a = document.createElement('a');
    a.classList.add('button');
    img.setAttribute('href',obj.link);
    a.textContent='Read more';
  
    div.prepend(img,h2,p,a);
    let wrapper = document.querySelector('.wrapper');
    wrapper.append(div);
  
  }



const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

  function createCards(arr) {
      for (let el of arr) {
        createPostCard (el);
      }
  }

  createCards(posts);