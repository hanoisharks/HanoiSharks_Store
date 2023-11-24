let productHTML = '' ;

let search = '' ;


product.forEach((product) =>  {

  if(product.keyword.includes(search)) {
    const priceInVND = (product.old_price * 1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const salePrice = (product.price * 1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const salePercent = ((product.old_price - product.price) / product.price) * 100;
    const formattedSalePercent = salePercent.toString().split('.')[0];
    productHTML += `
      <div class="pro" onclick="window.location.href='sproduct${product.id}.html'">
      <span class="discount">
          <strong>
            <i class="fa-solid fa-heart"></i>
            Giảm ${formattedSalePercent}%
          </strong>
        </span>
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
          <h4 id="old-price">${priceInVND}</h4>
          <h4 id="new-price">${salePrice}</h4>
        </div>
        <a href="#"><img class="cart" src="cart_icon.png" alt=""></a>
      </div>
    `;
  }
});

document.querySelector('.js-pro-container').
innerHTML = productHTML;