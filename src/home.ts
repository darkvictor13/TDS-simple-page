enum ProductCategory {
  SWORD = "Sword",
  HELMET = "Helmet",
  BOOTS = "Boots",
  ALL = "All",
}

interface Product {
  type: ProductCategory;
  title: string;
  description: string;
  price: number;
  imagePath: string;
}

const products: Product[] = [
  {
    type: ProductCategory.SWORD,
    title: "Dragonbone Sword",
    description: "A powerful one-handed sword made from dragon bones.",
    price: 100,
    imagePath: "../public/DragonboneSword.png",
  },
  {
    type: ProductCategory.SWORD,
    title: "Daedric Sword",
    description:
      "A powerful one-handed sword forged in the depths of Oblivion.",
    price: 90,
    imagePath: "../public/daedric_sword.jpg",
  },
  {
    type: ProductCategory.SWORD,
    title: "DawnBreaker",
    description: "Meridia's sword that burns undead and destroys undead.",
    price: 120,
    imagePath: "../public/dawnbreaker.png",
  },
  {
    type: ProductCategory.SWORD,
    title: "Nordic Sword",
    description:
      "A powerful one-handed sword made from nordic steel, made in Solstheim.",
    price: 80,
    imagePath: "../public/nordic_sword.png",
  },
  {
    type: ProductCategory.HELMET,
    title: "Daedric Helmet",
    description: "Strong helmet forged in the depths of Oblivion.",
    price: 50,
    imagePath: "../public/daedric_helmet.jpg",
  },
  {
    type: ProductCategory.BOOTS,
    title: "Daedric Boots",
    description: "Strong boots forged in the depths of Oblivion.",
    price: 40,
    imagePath: "../public/daedric_boots.jpg",
  },
  {
    type: ProductCategory.BOOTS,
    title: "Ebony Boots",
    description: "Strong boots made from ebony.",
    price: 30,
    imagePath: "../public/ebony_boots.jpg",
  },
  {
    type: ProductCategory.BOOTS,
    title: "Iron Boots",
    description: "Weak boots made from iron.",
    price: 10,
    imagePath: "../public/iron_boots.jpg",
  },
  {
    type: ProductCategory.HELMET,
    title: "Orcish Helmet",
    description: "Strong helmet made from orichalcum.",
    price: 40,
    imagePath: "../public/orcish_helmet.jpg",
  },
  {
    type: ProductCategory.HELMET,
    title: "Steel Plate Helmet",
    description: "Strong helmet made from steel.",
    price: 30,
    imagePath: "../public/steel_plate_helmet.jpg",
  },
  {
    type: ProductCategory.HELMET,
    title: "Dawnguard Helmet",
    description: "Strong steel helmet. Good for vampire hunting.",
    price: 30,
    imagePath: "../public/dawnguard_helmet.jpg",
  },
];

const containerDiv = document.getElementById("container") as HTMLDivElement;
const itemsDiv = document.getElementById("items-div") as HTMLDivElement;

function refreshItems(category: ProductCategory) {
  console.log("renderItems", category);

  // removendo os elementos filhos do itemsDiv
  while (itemsDiv?.firstChild) {
    itemsDiv.removeChild(itemsDiv?.lastChild as Node);
  }
  addElements(category);
}

function addElements(category: ProductCategory = ProductCategory.ALL) {
  console.log("addElements", category);

  const filteredProducts =
    category === ProductCategory.ALL
      ? products
      : products.filter((product) => {
          return product.type === category;
        });

  console.log("filtered", filteredProducts);

  filteredProducts.forEach((product) => {
    console.log(product.title);
    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("col-md-4");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("d-flex", "justify-content-center");
    newItemDiv.appendChild(innerDiv);

    const itemContent = `
    <div class="item">
      <img src="${product.imagePath}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button class="btn btn-buy" onclick="handleBuy()">Buy Now</button>
    </div>
  `;
    innerDiv.innerHTML = itemContent;
    itemsDiv?.appendChild(newItemDiv);
  });
}

function handleBuy() {
  alert("Item purchased!");
}
