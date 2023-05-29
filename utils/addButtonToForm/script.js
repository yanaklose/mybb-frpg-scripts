const addButtonToForm = (name, title, nextSibling = null) => {
  const form = document.querySelector("#form-buttons");

  const button = document.createElement('td');
  button.id = 'button-' + name;
  button.title = title;
  button.innerHTML = '<img src="/i/blank.gif">';

  form.querySelector('tr').insertBefore(button, nextSibling);
}

export { addButtonToForm };
