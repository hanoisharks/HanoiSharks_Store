let NewProductHTML = '' ;

search = 'new' ;


product.forEach((product) =>  {

  if(product.keyword.includes(search)) {
    priceInVND = (product.price * 1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    NewProductHTML += `
      <div class="pro" onclick="window.location.href='sproduct${product.id}.html'">
        <img src="img/shoes/${product.img}" alt="">
        <div class="des">
          <span>Hanoi Sharks</span>
          <h5>${product.name}</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>${priceInVND}</h4>
        </div>
        <a href="#"><img class="cart" src="cart_icon.png" alt=""></a>
      </div>
    `;
  }
});

document.querySelector('.js-new-pro-container').
innerHTML = NewProductHTML;