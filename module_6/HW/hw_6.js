/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  
*/
/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger { 
    constructor(size, stuffing) {
      this._size = size;
      this._stuffing = stuffing;
      this._toppings = [];
    }  
    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     */
    addTopping(topping) {
      if (!this._toppings.includes(topping)) {
        this._toppings.push(topping);
      }
      
    return this._toppings;
    }
      /**
     * Убрать topping, при условии, что она ранее была добавлена
     */
    removeTopping(topping) {
      if (this._toppings.includes(topping)) {
        this._toppings.splice(this._toppings.indexOf(topping),1)
      }
      return this._toppings;
    }
      /**
     * Получить список toppings

     */
    getToppings() {
      return this._toppings;
    }
    /**
     * Узнать размер гамбургера
   
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */
    getSize() {
      return this._size;
    }
    /**
     * Узнать начинку гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     */
    getStuffing() {
      return this._stuffing;
    }
    /**
     * Узнать цену гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */
    calculatePrice() {
      let price = Hamburger.SIZES[this._size].price+Hamburger.STUFFINGS[this._stuffing].price + this._toppings.reduce((acc,el)=>acc+Hamburger.TOPPINGS[el].price,0);
      //console.log(Hamburger.TOPPINGS[this._toppings].price)
      //console.log(this._toppings);
      // for (let el of this._toppings) {
      //   console.log(Hamburger.TOPPINGS[el].price);
      // }
       return price; 
    }
    /**
  //    *
  //    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
  //    */
    calculateCalories() {
      let cal = Hamburger.SIZES[this._size].calories+Hamburger.STUFFINGS[this._stuffing].calories +this._toppings.reduce((acc,el)=>acc+Hamburger.TOPPINGS[[el]].calories,0) ;
      // console.log(Hamburger.SIZES[this._size].calories);
      // console.log(Hamburger.STUFFINGS[this._stuffing].calories);
       return cal;
    }
  }
  /*
    Размеры, виды добавок и начинок объявите как статические поля класса.
    Добавьте отсутсвующие поля по аналогии с примером.
  */
  Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  Hamburger.SIZE_LARGE = 'SIZE_LARGE';
  
  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100,
    },
  };
  
  Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
  Hamburger.STUFFING_SALAD = 'STUFFING_SALAD'
  Hamburger.STUFFING_MEAT = 'STUFFING_MEAT'
  
  Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
      price: 20,
      calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
      price: 35,
      calories: 15,
    },
  };
  
  Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
  Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
  
  Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
      price: 15,
      calories: 5,
    },
  };
  
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
  // Добавка из приправы
  hamburger.addTopping(Hamburger.TOPPING_SPICE);
  
  // Спросим сколько там калорий
  console.log("Calories: ", hamburger.calculateCalories());
  
  // Сколько стоит?
  console.log("Price: ", hamburger.calculatePrice());
  
  // Я тут передумал и решил добавить еще соус
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  
  // А сколько теперь стоит?
  console.log("Price with sauce: ", hamburger.calculatePrice());
  
  // Проверить, большой ли гамбургер?
  console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
  
  // Убрать добавку
  hamburger.removeTopping(Hamburger.TOPPING_SPICE);
  
  // Смотрим сколько добавок
  console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
