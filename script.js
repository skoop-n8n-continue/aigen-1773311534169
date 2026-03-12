const menuData = [
    {
        category: "Burgers",
        items: [
            { name: "Classic Cheeseburger", price: "$8.99", desc: "Beef patty, cheddar, lettuce, tomato, house sauce" },
            { name: "Bacon Double", price: "$11.99", desc: "Two patties, crispy bacon, american cheese, onions" },
            { name: "Mushroom Swiss", price: "$10.49", desc: "Swiss cheese, sautéed mushrooms, truffle mayo" },
            { name: "Spicy Jalapeño", price: "$9.99", desc: "Pepper jack, jalapeños, spicy mayo, crispy onions" }
        ]
    },
    {
        category: "Sides & Drinks",
        items: [
            { name: "French Fries", price: "$3.99", desc: "Crispy golden shoestring fries" },
            { name: "Onion Rings", price: "$4.99", desc: "Beer-battered thick cut onion rings" },
            { name: "Craft Soda", price: "$2.49", desc: "Cola, Root Beer, Lemon-Lime, Orange" },
            { name: "Milkshakes", price: "$4.99", desc: "Vanilla, Chocolate, Strawberry, Oreo" }
        ]
    }
];

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    menuData.forEach(cat => {
        const col = document.createElement('div');
        col.className = 'menu-column';

        const title = document.createElement('div');
        title.className = 'category-title';
        title.textContent = cat.category;
        col.appendChild(title);

        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'menu-items';

        cat.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            const header = document.createElement('div');
            header.className = 'item-header';

            const name = document.createElement('div');
            name.className = 'item-name';
            name.textContent = item.name;

            const price = document.createElement('div');
            price.className = 'item-price';
            price.textContent = item.price;

            header.appendChild(name);
            header.appendChild(price);

            const desc = document.createElement('div');
            desc.className = 'item-desc';
            desc.textContent = item.desc;

            itemDiv.appendChild(header);
            itemDiv.appendChild(desc);

            itemsDiv.appendChild(itemDiv);
        });

        col.appendChild(itemsDiv);
        container.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', renderMenu);