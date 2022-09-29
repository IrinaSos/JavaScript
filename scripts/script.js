// Part 1

const mercedes = {
    name: "Mercedes",
    model: "GL450",
    engine: 4.0,
    year: 2015,
    color: "black",
    hp: 300,
    forSale: true
};

const bmw = {
    name: "BMW",
    model: "X6",
    engine: 3.0,
    year: 2018,
    color: "white",
    hp: 313,
    forSale: false
};

const audi = {
    name: "Audi",
    model: "Q7",
    engine: 3.0,
    year: 2021,
    color: "blue",
    hp: 249,
    forSale: true
};


// 1. Создайте переменную year и поместите в нее текущий год.

const year = 2022;


/* 2. Сделайте три операции: добавьте в каждый объект свойство carAge,
которое будет содержать возраст этого автомобиля.Вычислить его нужно программно,
при помощи переменной year.*/

mercedes.carYear = year - mercedes.year;
alert(`Mercedes age is - ${mercedes.carYear} year/s`);

bmw.carYear = year - bmw.year;
alert(`BMW age is - ${bmw.carYear} year/s`);

audi.carYear = year - audi.year;
alert(`Audi age is - ${audi.carYear} year/s`);


/* 3. Создайте переменную с названием names, в которой будут находиться названия автомобилей
и их модели через запятую в одну строку (на основе свойств созданных объектов, путем соединения строк).*/

const names = `Name and model of all cars - ${mercedes.name} ${mercedes.model}, ${bmw.name} ${bmw.model}, 
    ${audi.name} ${audi.model}`;

alert(names);


/* 4. Создайте переменную с названием averageAge, в которой будет просчитываться среднее арифметическое
возрастов всех 3 автомобилей.*/

const averageAge = (mercedes.carYear + bmw.carYear + audi.carYear) / 3;

alert(`Average age of all cars is - ${averageAge} year/s`);


/* 5. Создайте переменную atLeastOneForSale, в которую будет помещаться результат логического значения для
вопроса “Хотя бы один автомобиль продаётся?”, который рассчитывается с помощью логического оператора на
основе свойства forSale всех трех объектов.*/

const atLeastOneForSale = (mercedes.forSale || bmw.forSale || audi.forSale) ? 'yes' : 'no';

alert(`Is there at least one car for sale? The answer is - ${atLeastOneForSale}`);


/* 6. Создайте переменную allYoungerThanFive, в которую будет помещаться результат логического значения
для вопроса “Все авто младше 5 лет?”, который рассчитывается с помощью логического оператора и оператора
сравнения на основе всех трех значений авто.*/

const allYoungerThanFive = (mercedes.carYear < 5 && bmw.carYear < 5 && audi.carYear < 5) ? 'yes' : 'no';

alert(`Are all cars under 5 years old? The answer is - ${allYoungerThanFive}`);


/* 7. Создайте переменную atLeastOneHasLittleHp, в которую будет помещаться результат логического значения
для вопроса “Хоть один автомобиль имеет менее 250 лошадиных сил?”, который рассчитывается с помощью
логических операторов на основе всех трех значений мощности (т.е. хоть у одного менее 250 л.с.).*/

const atLeastOneHasLittleHp = (mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250) ? 'yes' : 'no';

alert(`Does any car have less than 250 horsepower? The answer is - ${atLeastOneHasLittleHp}`);



// Part 2

/* 1. Создайте переменную car. Поместите в нее любой из созданных выше объектов авто (заново создавать
объект не надо, нужно использовать переменную). Для всех дальнейших пунктов нужно использовать именно
объект car.*/

const car = bmw;


/* 2. Если автомобиль имеет название Mercedes и модель его GL450 выведите сообщение на экран - “Мой
любимый мерседес!”, в противном случае (если в объекте марка и модель другие) выведите на экран
“Это - ” + название и марка автомобиля из объекта автомобиля. К примеру, если в car мы поместим объект
bmw, на экран должно быть выведено «Это - BMW X6».*/

if (car.name === "Mercedes" && car.model === "GL450") {
    alert(`My favorite Mercedes!`);
} else {
    alert(`This is - ${car.name} ${car.model}`);
}


/* 3. Если автомобиль новый (0 лет), то выводим сообщение “Новый автомобиль”, в противном случае если
автомобилю до 3 лет (включительно), выводим сообщение “Свежий автомобиль”, в противном случае выводим
следующее сообщение “Лет этому авто: ” + количество лет данному авто, чтобы сообщение было такое
“Лет этому авто: 6” (если автомобилю в объекте 6 лет);*/

if (car.carYear === 0) {
    alert(`New car`);
} else if (car.carYear <= 3 && car.carYear > 0) {
    alert(`Fresh car`);
} else {
    alert(`The age of this car is: ${car.carYear}`);
}


/* 4. Создайте переменную var consumption, в которую с помощью тернарного оператора будет присваиваться
одно из следующих значений:
    - “Прожорливый автомобиль”, если объем двигателя более 3.0
    - “Экономичный автомобиль”, если объем двигателя менее или равен 3.0
и выведите эту переменную через alert после того, как ей будет присвоено значение.
Внимание! В этом пункте нужно именно присвоить значение строки в переменную в зависимости от условия,
а только потом уже выводить переменную через alert.*/

const consumption = (car.engine <= 3.0 && car.engine > 0) ? 'Economy car' : 'Car consumes a lot of fuel';

alert(`Car characteristics (by engine size) - ${consumption}`);


/* 5. Создайте новую переменную russianColor, в которую в зависимости от цвета автомобиля (свойства
color в объекте car) будет присваиваться соответствующий цвет на русском языке:
    - black - черный
    - silver - серебристый
    - red - красный
    - white - белый
    - gray - серый
    - blue - синий
    В противном случае в переменную russianColor должен разместиться текст - Невозможно определить
цвет автомобиля.
    Для выполнения этого пункта используйте оператор switch. После чего выведите переменную
russianColor на экран через alert. В переменной russianColor будет находиться название цвета на
русском (например, если в car.color был "black", значит в russianColor будет "черный").*/

const russianColor = {
    black: "черный",
    silver: "серебристый",
    red: "красный",
    white: "белый",
    gray: "серый",
    blue: "синий"
};

switch (car.color) {
    case 'black':
        alert(`Цвет машины на русском: ${russianColor.black}`);
        break;
    case 'silver':
        alert(`Цвет машины на русском: ${russianColor.silver}`);
        break;
    case 'red':
        alert(`Цвет машины на русском: ${russianColor.red}`);
        break;
    case 'white':
        alert(`Цвет машины на русском: ${russianColor.white}`);
        break;
    case 'gray':
        alert(`Цвет машины на русском: ${russianColor.gray}`);
        break;
    case 'blue':
        alert(`Цвет машины на русском: ${russianColor.blue}`);
        break;
    default:
        alert(`Unable to determine car color`);
        break;
}


