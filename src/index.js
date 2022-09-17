import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];

function FilterableProductTable(props) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="FilterableProductTable">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnly={setInStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={props.products}
      />
    </div>
  );
}

function SearchBar(props) {
  function onFilterTextChange(e) {
    props.onFilterTextChange(e.target.value);
  }

  function onInStockOnly(e) {
    props.onInStockOnly(e.target.checked);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={onFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={onInStockOnly}
        />
        Only show products in stock
      </p>
    </form>
  );
}

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(props.filterText) === -1) {
      return;
    }
    if (props.inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow(props) {
  const { category } = props;

  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow(props) {
  const { product } = props;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

root.render(<FilterableProductTable products={PRODUCTS} />);
