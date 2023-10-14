class Toy {
    constructor(name, price, ageRange, rating, image) {
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.image = image;
    }

    get ToyItem() {
        const section = document.createElement("section");
        section.classList.add("toy-style");
        section.append(this.picture(this.image));

        return section;
    }

    get details() {
        const section = document.createElement("section");
        section.classList.add("hover-style");

        const h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = this.name;

        const ul = document.createElement("ul");
        section.append(ul);
        ul.append(this.listItem("Price: " + this.price));
        ul.append(this.listItem("Age Range: " + this.ageRange));
        ul.append(this.listItem("Rating: " + this.rating));

        return section;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    listItem(info) {
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}

const showToys = () => {
    const toylist = document.getElementById("toy-list");
    const hoverDiv = document.getElementById("hover-div");
    const toys = [];
    toys.push(new Toy("American Girl Doll", 39.99, "3-8", 4, "agd.jpg"));
    toys.push(new Toy("Rubik's Cube", 9.99, "8-13", 5, "rubiks.jpg"));
    toys.push(new Toy("Nerf Gun", 44.99, "6-12", 5, "nerf.jpg"));
    toys.push(new Toy("LEGO Set", 64.99, "3-10", 5, "lego.jpg"));
    toys.push(new Toy("Hot Wheels", 29.99, "4-9", 4, "hotw.jpg"));
    toys.push(new Toy("Pokemon Cards", 4.99, "7-12", 4, "pokemon.jpg"));

    toys.forEach(toy => {
        toylist.append(toy.ToyItem);
    });

    toys.forEach(toy => {
        hoverDiv.append(toy.details);
    });
};

window.onload = () => {
    showToys();
};

