const jamk = document.querySelector('.jamk');
let inf = null;

function showPrompt(text, callback) {
  jamk.tabIndex = -1; // кнопка не будет реагировать на табуляцию
  const modal = document.querySelector('.modal');
  const title = document.querySelector('.title');
  const form = document.querySelector('.form');
  const txtarea = document.querySelector('.text');
  const cancel = document.querySelector('.btnCancel');

  modal.style.display = 'block'; // показываем модальное окно
  txtarea.focus(); // фокус в textarea
  title.textContent = text || ''; // заголовок либо переданный, либо отсутствует

  form.addEventListener('submit', callback);
  document.body.addEventListener('keydown', (e) => { // по нажатию esc всё закрывается и очищается
    if (e.keyCode === 27) callback(null);
  });

  cancel.onclick = e => callback(null); // тоже что и esc
}

function consl(txt) {
  const x = txt;
  if (x === null) {
    const modal = document.querySelector('.modal');
    const txtarea = document.querySelector('.text');
    txtarea.textContent = '';
    modal.style.display = 'none';
    jamk.tabIndex = 1;
  } else {
    alert(txt);
  }
}

function show() {
  // можно прикрутить передачу аргументов в функцию, но мне лень xD
  showPrompt('Что-то там написано', consl);
}

jamk.onclick = show;