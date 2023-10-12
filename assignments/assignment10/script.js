class Toy {
    constructor(name, price, ageRange, rating, image) {
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.image = image;
    }

    get item() {
        const section = document.createElement("section");

        return section;
    }
}

const showToys = () => {
    const toys = [];
    toys.push(new Toy("American Girl Doll", 39.99, "3-8", 4, ""));
    toys.push(new Toy("Rubik's Cube", 9.99, "8-13", 5, ""));
    toys.push(new Toy("Nerf Gun", 44.99, "6-12", 5, ""));
    toys.push(new Toy("LEGO Set", 64.99, "3-10", 5, ""));
    toys.push(new Toy("Hot Wheels", 29.99, "4-9", 4, ""));
    toys.push(new Toy("Pokemon Cards", 4.99, "7-12", 4, ""));
};

window.onload = () => {
    showToys();
};

