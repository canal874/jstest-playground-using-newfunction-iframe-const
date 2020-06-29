/**
 * JS Playground implementation using new Function() in iframe
 */

const run = function() {
  const code = document.getElementById("code").value;
  const previewFrame = document.getElementById("previewFrame").contentWindow;
  previewFrame.preview(code);
};

const say = function(txt) {
  document.body.insertAdjacentHTML("beforeend", `${txt}<br>`);
};
