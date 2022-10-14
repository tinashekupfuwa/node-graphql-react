const { v4 } = require("uuid");
const { animals } = require("./Category");

const Mutation = {
  addAnimal: (
    parent,
    { image: title, slug, rating, price, description, stock, onSale, category },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      title,
      slug,
      rating,
      price,
      description,
      stock,
      onSale,
      category,
    };

    animals.push(newAnimal);
    return newAnimal;
  },
};

module.export = Mutation;

// type Animal {
//   id: ID!
//   image: String!
//   title: String!
//   slug: String!
//   rating: Float!
//   price: String!
//   description: [String!]!
//   stock: Int!
//   onSale: Boolean
//   category: Category
// }
