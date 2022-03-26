let products = [
  {
    photo: "img/big-mac.png",
    name: "Big Mac",
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Mc Chicken",
    price: 4.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/double-cb.png",
    name: "Double Cheese Burger",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/fries.png",
    name: "Frites",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/nuggets.png",
    name: "Mc Nuggets",
    price: 3.49,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/salad.png",
    name: "Salade",
    price: 2.79,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/cola.png",
    name: "Coca",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/water.png",
    name: "Eau",
    price: 1.49,
    active: false,
    quantity: 1,
  },
];

const App = {
  data() {
    return {
      products,
      productChoices: [],
    };
  },
  methods: {
    addOrRemoveProduct(product) {
        if (product.active) {
            product.active = false;
            product.quantity = 1;
            this.productChoices.splice(this.productChoices.indexOf(product), 1);
        }
        else {
            product.active = true;
            this.productChoices.push(product);
        }
    },
    totalPriceProductChoice(productChoice) {
      return productChoice.quantity * productChoice.price;
    },
    totalPurchase() {
        return this.productChoices.reduce((acc, productChoice) => {
            return acc + this.totalPriceProductChoice(productChoice);
        }, 0);
    }
  },
};

Vue.createApp(App).mount("#app");
