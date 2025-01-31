const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more-btn");

async function fetchListOfProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const data = await response.json();

    if (data?.products?.length) renderProducts(data.products);
   
  } catch (error) {
    console.log(" Error fetching products:", error);
  }
}

function renderProducts(products) {
  console.log(products);
}

fetchListOfProducts();
