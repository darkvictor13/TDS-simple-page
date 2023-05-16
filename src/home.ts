interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imagePath: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Dragonbone Sword",
    description: "A powerful two-handed sword made from dragon bones.",
    price: 100,
    imagePath: "../public/DragonboneSword.png",
  },
  {
    id: 2,
    title: "Daedric Helmet",
    description: "Strong helmet forged in the depths of Oblivion.",
    price: 50,
    imagePath: "../public/daedric_helmet.jpg",
  },
  {
    id: 3,
    title: "Daedric Boots",
    description: "Strong boots forged in the depths of Oblivion.",
    price: 40,
    imagePath: "../public/daedric_boots.jpg",
  },
  {
    id: 4,
    title: "Ebony Boots",
    description: "Strong boots made from ebony.",
    price: 30,
    imagePath: "../public/ebony_boots.jpg",
  },
  {
    id: 5,
    title: "Iron Boots",
    description: "Weak boots made from iron.",
    price: 10,
    imagePath: "../public/iron_boots.jpg",
  },
  {
    id: 6,
    title: "Orcish Helmet",
    description: "Strong helmet made from orichalcum.",
    price: 40,
    imagePath: "../public/orcish_helmet.jpg",
  },
  {
    id: 7,
    title: "Steel Plate Helmet",
    description: "Strong helmet made from steel.",
    price: 30,
    imagePath: "../public/steel_plate_helmet.jpg",
  },
  {
    id: 8,
    title: "DawnGuard Helmet",
    description: "Strong steel helmet. Good for vampire hunting.",
    price: 30,
    imagePath: "../public/dawnguard_helmet.jpg",
  },
];

const itemsDiv = document.getElementById("items-div");
products.forEach((product) => {
  const newItemDiv = document.createElement("div");
  newItemDiv.classList.add("col-md-4");

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("col-md-4", "d-flex", "justify-content-center");
  newItemDiv.appendChild(innerDiv);

  const itemContent = `
    <div class="item">
      <img src="${product.imagePath}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button class="btn btn-buy">Buy Now</button>
    </div>
  `;
  innerDiv.innerHTML = itemContent;
  itemsDiv?.appendChild(newItemDiv);
});
