

let string = "";

function handleClick(e) {
  if (e.target.innerHTML === '=') {
    string = eval(string);
    document.querySelector('input').value = string;
  } else if (e.target.innerHTML === 'AC') {
    string = "";
    document.querySelector('input').value = string;
  } else if (e.target.innerHTML === 'M+') {
    memory += parseFloat(string);
    string = "";
    document.querySelector('input').value = string;
  } else if (e.target.innerHTML === 'M-') {
    memory -= parseFloat(string);
    string = "";
    document.querySelector('input').value = string;
  } else if (e.target.innerHTML === 'MC') {
    memory = 0;
    string = "";
    document.querySelector('input').value = string;
  } else {
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
  }
}

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', handleClick);
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace'];

  if (validKeys.includes(key)) {
    e.preventDefault();

    if (key === '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (key === 'Backspace') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else {
      string = string + key;
      document.querySelector('input').value = string;
    }
  }
});

