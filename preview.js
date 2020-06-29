function preview(code) {
  new Function(code)();
}

function child_say(txt) {
  document.body.insertAdjacentHTML("beforeend", `${txt}<br>`);
}
