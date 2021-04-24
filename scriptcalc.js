var op; //выбранный оператор
function func() 
{
  var result;
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  switch (op) 
  {
    case '+':
      result = a + b;
      break;

    case '-':
      result = a - b;
      break;

    case '*':
      result = a * b;
      break;

    case '/':
      if (b) 
      {
        result = a / b;
      } 
      else 
      {
        result = 'Бесконечность';
      }
      break;

      case 'Max':
      result = Math.max(a,b)
      break;

      case 'Min':
      result = Math.min(a,b)
      break;

    default:
      result = 'Выберите операцию';
  }
  document.getElementById("result").innerHTML = result;
}
