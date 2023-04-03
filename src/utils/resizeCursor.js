export const resizeCursor = () => {
    document.querySelector(".cursor").innerHTML = "";
    document.querySelector(".cursor").style.width = "12px";
    document.querySelector(".cursor").style.height = "12px";
    document.querySelector(".cursor").style.background = "#E0FF23";
  };