const navMenu = () => {
  const mobileButton = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list-ul");

  mobileButton.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    // navList.style.display = "flex";
  });
};

navMenu();

// const productButton = document.querySelector("#prod");
// const productList = document.querySelector(".prod-div");

// productButton.addEventListener("mouseover", () => {
//   productList.classList.toggle("prod-div-active");
// });
// productButton.addEventListener("mouseout", () => {
//   productList.classList.toggle("prod-div");
// });
