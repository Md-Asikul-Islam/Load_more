const products_container = document.querySelector(".products-container");

const load_more_btn = document.querySelector(".load-more-btn")


async function fetchListOfProducs() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method:"GET"
    });

    const products = await response.json();
    console.log(products)
  } catch (error) {
    console.log("Error fetching products:", error)
  }
}

fetchListOfProducs()