function Max()
{
d=document;
var a = Number(d.form1.A.value) ;
var b = Number(d.form1.B.value) ;
var x1 = Math.max(a,b) ;
d.form1.x1.value=x1;
}

function Check()
{
d=document;
var admin, name; 
name = "Евгений Моисеев";
admin = name;
alert( admin ); 
}

function Age()
{
    d=document;
    let name = prompt("Введите имя"),
            age = +prompt('Введите ваш возраст');
 
        alert(`Здравствуйте, ${name}!`);
        
        var result = confirm('Вы уверены, что вам '+age+' ?');
        if (result == true)
        {
            alert ('Хорошо')
        }
        else 
        {
            age = +prompt('Введите ваш возраст');
            alert ('ОК')
        }
}

function Show()
{
    d=document;
    var city, country;
    city = "Москва";
    country = "Россия";
    alert (country);
    alert (city);
}

function Resume()
{
    d=document;
    var result = confirm('Вы уверены, что хотите сохранить данные?');
        if (result == true)
        {
            alert ('Данные сохранены!')
        }
        else 
        {
            alert ('Отмена сохранения!')
        }
}
