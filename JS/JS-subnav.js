const buyProduct = document.getElementsByClassName("item__buy");
const HeartCheck = document.getElementsByClassName("item__heart");
const cartCheck = document.getElementsByClassName("item__cart");

function success() {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    const TimeOut = setTimeout(() => {
      main.removeChild(toast);
    }, 4000);

    toast.onclick = (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(TimeOut);
      }
    };

    toast.classList.add("toast");
    toast.style.animation = `SlideInLeft ease .3s, FadeOut linear 1s 3s forwards`;
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">Success</h3>
            <p class="toast__msg">Sản phẩm đã được thêm vào giỏ hàng của bạn</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
        `;

    main.appendChild(toast);
  }
}

let buyProductBtn = Array.from(buyProduct);
buyProductBtn.forEach((e) => {
  e.addEventListener("click", () => {
    success();
  });
});

let HChecked = Array.from(HeartCheck);
HChecked.forEach((e) => {
  e.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("far")) {
      evt.target.classList.remove("far");
      evt.target.classList.add("fas");
      evt.target.classList.add("heart--on");
    } else {
      evt.target.classList.remove("fas");
      evt.target.classList.remove("heart--on");
      evt.target.classList.add("far");
    }
  });
});

let CChecked = Array.from(cartCheck);
CChecked.forEach((e) => {
  e.addEventListener("click", (evt) => {
    if (!evt.target.classList.contains("cart--checked")) {
      success();
      evt.target.classList.add("cart--checked");
    } else {
      confirm("It was removed from your cart!");
      evt.target.classList.remove("cart--checked");
    }
  });
});
