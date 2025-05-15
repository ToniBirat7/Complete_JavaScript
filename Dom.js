const ele = document.querySelector("body");

Array.from(ele.children).forEach((element) => {
  element.addEventListener("click", () => {
    element.remove();
  });
});
