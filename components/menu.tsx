import Link from "next/link";
import MenuCSS from "./menu.module.scss";

export const Menu = () => {
  return (
    <ul className={MenuCSS.menu}>
      <li>
        <Link href="/products/">
          <a>Products</a>
        </Link>
      </li>
      <li>
        <Link
          href="/products/[category]"
          as={`/products/some-product-category`}
        >
          <a>Some Product Category</a>
        </Link>
      </li>
    </ul>
  );
};
