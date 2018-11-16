'use strict'

  class Gallery {
    constructor ({items, parentNode}) {
      this.items = items;
      this.parentNode = parentNode;
      this.number = Math.floor(Math.random()*this.items.length);
      this.fullview = this.creatElement('div','class','fullview');//СОЗДАЕМ DIV 
      this.fullviewImg =this.creatElement('img','src', this.items[this.number].fullview);
      this.ulPreview = this.creatElement ('ul','class','preview');
      this.change = this.change.bind(this);
      }
 
      creatElement (tag,atributeName,atributeValue) {//ФУНКЦИЯ КОТОРАЯ СОЗДАЁТ ЭЛЕМЕНТЫ
    let tagName = document.createElement(tag);
    tagName.setAttribute(atributeName,atributeValue);
    return tagName;
    }

  
    creatUL () {
  
      for (let el of this.items) {
        let li = document.createElement('li');
      this.ulPreview.append(li);
        let img = document.createElement('img');
          img.setAttribute('src',el.preview);
          img.setAttribute('data-fullview',el.fullview);
          img.setAttribute('alt',el.alt);
          li.append(img);
      }
      //return this.ulPreview;
    }

    change (event) {//вешаем обработчик событий
      let ulArr = [...document.querySelectorAll('.preview >li> img')];
      for (let el of ulArr) {
          event.target === el? el.classList.add('choose'):el.classList.remove('choose')
            }
      this.fullviewImg.src = `${event.target.dataset.fullview}`;   
    }

    event () {//вешаем обработчик событий
      this.ulPreview.addEventListener('click',this.change);
    }
      
    appendElement () {
      // Добавляем элементы  В HTML
      this.parentNode.append(this.fullview,this.ulPreview);
      this.fullview.append(this.fullviewImg);}

    creat () {
      this.creatUL();
      this.appendElement();
      this.event();
    }

      }


 const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];
  let houses = new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
  });


 houses.creat();

   const galleryItemsNew = [
    
    { preview: 'img/preview-12.jpeg', fullview: 'img/fullview-12.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-13.jpeg', fullview: 'img/fullview-13.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-14.jpeg', fullview: 'img/fullview-14.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-15.jpeg', fullview: 'img/fullview-15.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-16.jpeg', fullview: 'img/fullview-16.jpeg', alt: "alt text 5" },
       { preview: 'img/preview-7.jpeg', fullview: 'img/fullview-7.jpeg', alt: "alt text 5" },
     { preview: 'img/preview-8.jpeg', fullview: 'img/fullview-8.jpeg', alt: "alt text 6" },


  ];
 
  let newYear = new Gallery ({
    items: galleryItemsNew,
    parentNode:  document.querySelector('.image-gallery-new'),
  });

  newYear.creat();

 


// const galleryItems = [
//     { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
//     { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
//     { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
//     { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
//     { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
//     { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
//     { preview: 'img/preview-7.jpeg', fullview: 'img/fullview-7.jpeg', alt: "alt text 5" },
//     { preview: 'img/preview-8.jpeg', fullview: 'img/fullview-8.jpeg', alt: "alt text 6" },
//   ];


  
//   function creatElement (tag,atributeName,atributeValue) {//ФУНКЦИЯ КОТОРАЯ СОЗДАЁТ ЭЛЕМЕНТЫ
//     let tagName = document.createElement(tag);
//     tagName.setAttribute(atributeName,atributeValue);
//     return tagName;
//   }
//           // СТУЧИМ В HTML
//   let imageGallery = document.querySelector('.image-gallery');
//           //СОЗДАЕМ DIV 
//   let fullview = creatElement('div','class','fullview');
//    //console.log(fullview);
//           //СОЗДАЕМ  IMG
//   let number = Math.floor(Math.random()*galleryItems.length);
//   let fullviewImg = creatElement('img','src', galleryItems[number].fullview);
//     //console.log(number);
//             //СОЗДАЕМ UL+LI  
//     let ulPreview = creatElement ('ul','class','preview');  
//       for (let el of galleryItems) {
//         let li = document.createElement('li');
//         ulPreview.append(li);
//               let img = document.createElement('img');
//               img.setAttribute('src',el.preview);
//               img.setAttribute('data-fullview',el.fullview);
//               img.setAttribute('alt',el.alt);
//               li.append(img);
//       }
    
//       function change (event) {
//         fullviewImg.src=`${event.target.dataset.fullview}`
//         let ulArr = [...document.querySelectorAll('.preview >li >img')];
//         for (let el of ulArr) {
//         event.target === el? el.classList.add('choose'):el.classList.remove('choose')
//             // event.target.alt === el.childNodes[0].alt? el.classList.add('choose'):el.classList.remove('choose')
//               }// сравниваю элементы из массива li c event target по полю alt
//       }
      
//       ulPreview.addEventListener('click',change);
     
//           // Добавляем элементы  В HTML
//     imageGallery.append(fullview,ulPreview);
//           fullview.append(fullviewImg);

 