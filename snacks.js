// Array containing product details, including the image paths
const products = [
    { name: "LADDU", type: "veg", image: "images/ladu.jpg", priceKg: 200, priceHalfKg: 120 },
    { name: "SUNNUDALLU", type: "veg", image: "images/Sunnundalu.jpg", priceKg: 180, priceHalfKg: 100 },
    { name: "JUNU", type: "veg", image: "images/junnu.jpg", priceKg: 300, priceHalfKg: 170 },
    { name: "KAJJI KAYALU", type: "veg", image: "images/kayalu.jpg", priceKg: 280, priceHalfKg: 160 }
];

let currentFilter = "all";

// Function to toggle between different filters (all, veg, nonveg)
function toggleFilter() {
    if (currentFilter === "all") {
        currentFilter = "veg";
    } else if (currentFilter === "veg") {
        currentFilter = "nonveg";
    } else {
        currentFilter = "all";
    }
    
    document.getElementById('filter-button').innerText = `Filter: ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)}`;
    renderProducts(); // Refresh product list with the new filter applied
}

// Function to render product cards based on the current filter
function renderProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear the container before adding new products

    // Filter products based on the selected filter
    const filteredProducts = products.filter(product => currentFilter === "all" || product.type === currentFilter);

    // Create product cards for each filtered product
    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">1 Kg: ₹${product.priceKg}</p>
            <p class="price">Half Kg: ₹${product.priceHalfKg}</p>
        `;
        container.appendChild(productCard);
    });
}

// Render products when the document content is fully loaded
document.addEventListener("DOMContentLoaded", renderProducts);
