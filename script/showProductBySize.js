const searchInput = document.getElementById('search_shoes');

searchInput.addEventListener('input', function() {
  const size = searchInput.value.trim(); // Lấy nội dung của ô tìm kiếm và loại bỏ khoảng trắng đầu và cuối

  let productHTML = '';

  product.forEach((product) =>  {
    // Kiểm tra xem kích thước giày của sản phẩm có bằng size không
    if (product[size] !== undefined && product[size] > 0) {
      const priceInVND = (product.price * 1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

      productHTML += `
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

  // Kiểm tra nếu ô tìm kiếm rỗng hoặc không có kích thước giày nào khớp, thì hiển thị tất cả đôi giày
  if (size === '' || productHTML === '') {
    product.forEach((product) =>  {

      if(product.keyword.includes(search)) {
        const priceInVND = (product.price * 1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    
        productHTML += `
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
  };

  document.querySelector('.js-pro-container').innerHTML = productHTML;
});
