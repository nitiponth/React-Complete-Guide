import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 11.98,
    title: "Atomic Habits",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  },
  {
    id: "p2",
    price: 21.49,
    title: "A Promised Land",
    description:
      "A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy",
  },
  {
    id: "p3",
    price: 9.16,
    title: "Becoming",
    description:
      "An intimate, powerful, and inspiring memoir by the former First Lady of the United States",
  },
  {
    id: "p4",
    price: 16.79,
    title: "The Lost Apothecary",
    description: "INSTANT NEW YORK TIMES BESTSELLER",
  },
  {
    id: "p5",
    price: 13.29,
    title: "The Midnight Library",
    description:
      "A feel-good book guaranteed to lift your spirits. —The Washington Post ",
  },
  {
    id: "p6",
    price: 11.19,
    title: "Norwegian Wood",
    description:
      "Stunning and elegiac, Norwegian Wood first propelled Haruki Murakami into the forefront of the literary scene.",
  },
];

const booksList = DUMMY_PRODUCTS.map((book) => (
  <ProductItem
    key={book.id}
    id={book.id}
    title={book.title}
    price={book.price}
    description={book.description}
  />
));

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{booksList}</ul>
    </section>
  );
};

export default Products;
