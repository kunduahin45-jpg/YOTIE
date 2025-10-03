// 🍱 Sample Menu Items
const menuItems = [
  { name: "Shrimp Dumplings", price: "৳380", category: "Dim Sum", img: "https://i.pinimg.com/736x/8e/f0/9e/8ef09ef507b6d2ae791c5133a8173a5e.jpg" },
  { name: "Fish Cake", price: "৳350", category: "Dim Sum", img: "https://i.pinimg.com/736x/d1/84/cf/d184cf9c99dc58f64f29fe9039151ea6.jpg" },
  { name: "Crispy Spring Rolls", price: "৳300", category: "Small Plates", img: "https://i.pinimg.com/736x/d1/40/2e/d1402e62e65bb1b9303ed220ccd71376.jpg" },
  { name: "Seafood Soup", price: "৳420", category: "Small Plates", img: "https://i.pinimg.com/1200x/53/eb/0f/53eb0fbc5cd5441cd440becdf8043b93.jpg" },
  { name: "Beef Chow Mein", price: "৳520", category: "Rice & Noodles", img: "https://i.pinimg.com/736x/7c/0c/99/7c0c991bd44a2d308b15054f7f772f09.jpg" },
  { name: "Chicken Rice Bowl", price: "৳450", category: "Rice & Noodles", img: "https://i.pinimg.com/1200x/ee/a6/5d/eea65d3dc7586499a375a40a74109cba.jpg" },
  { name: "Mango Sticky Rice", price: "৳320", category: "Dessert", img: "https://i.pinimg.com/736x/80/ad/8b/80ad8bfff13645a22463db8ad8f29188.jpg" },
  { name: "Matcha Cheesecake", price: "৳360", category: "Dessert", img: "https://i.pinimg.com/1200x/b8/05/0f/b8050fb381c055ebfd905737b0c6a45b.jpg" },
];

// 🧩 Load Menu
const menuGrid = document.getElementById("menu-grid");
function displayMenu(items) {
  menuGrid.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.category}</p>
      <div style="font-weight:700;margin-top:6px">${item.price}</div>
    `;
    menuGrid.appendChild(card);
  });
}
displayMenu(menuItems);

// 🥢 Filter Menu
function filterCategory(category) {
  document.querySelectorAll(".menu-cat").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`[data-cat="${category}"]`).classList.add("active");

  if (category === "All") {
    displayMenu(menuItems);
  } else {
    const filtered = menuItems.filter(item => item.category === category);
    displayMenu(filtered);
  }
}

// 📅 Handle Reservation
function handleReserve(e) {
  e.preventDefault();
  const name = document.getElementById("r-name").value;
  const phone = document.getElementById("r-phone").value;
  const people = document.getElementById("r-people").value;
  const date = document.getElementById("r-date").value;

  alert(`✅ Reservation received!\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n👥 People: ${people}\n📅 Date: ${date}`);
  e.target.reset();
  return false;
}

// 📩 Handle Contact
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("c-name").value;
  const email = document.getElementById("c-email").value;
  const message = document.getElementById("c-message").value;

  alert(`📨 Message sent!\n\n👤 ${name}\n📧 ${email}\n💬 ${message}`);
  e.target.reset();
  return false;
}

// 📍 Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// 📱 Mobile Menu Toggle
function toggleMobile() {
  const nav = document.querySelector("nav.primary");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
