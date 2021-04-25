import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">MINDSET</Link>
        </li>
        <li>
          <Link to="/products/p2">SUBTLE ART OF NOT GIVING A F*CK</Link>
        </li>
        <li>
          <Link to="/products/p3">CALL ME BY YOUR NAME</Link>
        </li>
        <li>
          <Link to="/products/p4">DOG'S PURPOSE, A</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Products;
