
var name = prompt('Введите свое имя')

var birt = +prompt('Введите свой год рождения')

var year = +prompt('Введите нынешний год')

if(birt < year) {
    alert(name + ', ' + 'Ваш возраст ' + (year - birt));
}else{
    alert('Ошибка');
}