window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  //   AFTER DOM FULLY LOADED
  window.onresize = function () {
    location.reload();
  };
  console.log("Window size: " + document.documentElement.clientWidth);
  let mediaBreakpointSize = 1050;
  // // OKUSNE MALICE DESC
  var dnevi = document.querySelectorAll(".ommd-li");
  var dneviHiddens = document.querySelectorAll(".ommd-hidden-div");
  dneviHiddens[0].style.display = "flex";
  dnevi[0].classList.add("selecttt");
  console.log(dneviHiddens);
  for (let x = 0; x < dnevi.length; x++) {
    dnevi[x].addEventListener("click", function () {
      for (let y = 0; y < dneviHiddens.length; y++) {
        dneviHiddens[y].style.display = "none";
      }
      for (let z = 0; z < dnevi.length; z++) {
        dnevi[z].classList.remove("selecttt");
      }
      dneviHiddens[x].style.display = "flex";
      dnevi[x].classList.add("selecttt");
    });
  }

  var anchorButton = document.querySelector("#anchor-arrow-button-button");
  anchorButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth", speed: 1 });
  });

  var i = setInterval(function () {
    if (window.scrollY > 400) {
      anchorButton.style.opacity = 1;
      anchorButton.style.cursor = "pointer";
    } else {
      anchorButton.style.opacity = 0;
      anchorButton.style.cursor = "default";
    }
  }, 20);

  // COOKIES
  var cookies = document.querySelector(".cookies");
  var cookies2 = document.querySelector(".cookies2");
  var cookiesX = document.querySelector("#cookies-x");
  var cookiesSprejmiButton = document.querySelector(".cookies-sprejmi-button");
  var cookiesZavrniButton = document.querySelector(".cookies-zavrni-button");
  cookies.addEventListener("click", function () {
    cookies.style.display = "none";
    cookies2.style.display = "block";
  });
  cookiesX.addEventListener("click", function () {
    cookies.style.display = "flex";
    cookies2.style.display = "none";
  });
  cookiesSprejmiButton.addEventListener("click", function () {
    cookies.style.display = "flex";
    cookies2.style.display = "none";
  });
  cookiesZavrniButton.addEventListener("click", function () {
    cookies.style.display = "flex";
    cookies2.style.display = "none";
  });
  // DESKTOP
  if (document.documentElement.clientWidth > mediaBreakpointSize) {
    window.addEventListener("scroll", (event) => {
      let scroll = this.scrollY;
      // console.log(scroll);
      if (scroll > 23) {
        document.querySelector(".header").style.position = "fixed";
        document.querySelector(".header").style.top = "0px";
        document.querySelector(".header").style.backgroundColor = "#252525";
      } else {
        document.querySelector(".header").style.position = "absolute";
        document.querySelector(".header").style.top = "20px";
        document.querySelector(".header").style.backgroundColor = "transparent";
      }
    });
  } else {
    // HEADER
    var scrollHolder;
    window.addEventListener("scroll", (event) => {
      let scroll = this.scrollY;
      scrollHolder = scroll;
      // console.log(scroll);
      if (scroll > 12) {
        document.querySelector(".header").style.position = "fixed";
        document.querySelector(".header").style.top = "0px";
        document.querySelector(".header").style.backgroundColor = "#252525";
      } else {
        document.querySelector(".header").style.position = "absolute";
        document.querySelector(".header").style.top = "10px";
        document.querySelector(".header").style.backgroundColor = "transparent";
      }

      menuHiddenDiv.style.top = scrollHolder + "px";
    });

    // MENU BUTTON
    var mPonudba = document.querySelector(".mobile-ponudba-button");
    var mPonudbaHidden = document.querySelector(".mhm-li-p-hidden");

    mPonudba.addEventListener("click", function () {
      if (!mPonudbaHidden.classList.contains("active")) {
        mPonudbaHidden.style.display = "block";
        mPonudbaHidden.classList.add("active");
      } else {
        mPonudbaHidden.style.display = "none";
        mPonudbaHidden.classList.remove("active");
      }
    });

    var menuButton = document.querySelector(".hmmb-container");
    var menuHiddenDiv = document.querySelector(".mobile-hidden-menu-div");
    var body = document.querySelector("body");
    var html = document.querySelector("html");
    menuButton.addEventListener("click", function () {
      menuHiddenDiv.style.left = "0px";
      menuHiddenDiv.style.opacity = "1";
      // body.style.height = "100%";
      // body.style.overflow = "hidden";
      html.style.height = "100%";
      html.style.overflow = "hidden";
      menuTransDiv.style.display = "block";

      // menuHiddenDiv.style.top = scrollHolder + "px";
    });
    var menuTransDiv = document.querySelector(".mobile-hidden-trans");
    var menuHiddenDivXButton = document.querySelector(".mhnd-x-button");
    menuHiddenDivXButton.addEventListener("click", function () {
      menuHiddenDiv.style.left = "-350px";
      menuHiddenDiv.style.opacity = "0";

      html.style.removeProperty("height");

      html.style.removeProperty("overflow");

      menuTransDiv.style.display = "none";
    });

    menuTransDiv.addEventListener("click", function () {
      menuHiddenDiv.style.left = "-350px";
      menuHiddenDiv.style.opacity = "0";

      html.style.removeProperty("height");
      html.style.removeProperty("overflow");
      menuTransDiv.style.display = "none";
    });
  }
});
