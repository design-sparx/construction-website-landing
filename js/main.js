window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("top-navbar").classList.add("bg-dark");
    document.getElementById("top-navbar").classList.add("shadow-lg");
  } else {
    document.getElementById("top-navbar").classList.remove("bg-dark");
    document.getElementById("top-navbar").classList.remove("shadow-lg");
  }
}
