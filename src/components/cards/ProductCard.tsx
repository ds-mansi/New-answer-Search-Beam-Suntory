import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";

import Product from "../../types/products";

const ProductCard: CardComponent<Product> = ({
  result,
}: CardProps<Product>): JSX.Element => {
  const product: Product = result.rawData;

  console.log(product, "product");
  const productImage = product?.c_productCard?.image?.url
    ? product.c_productCard.image.url
    : "";
  const productBtn = product?.c_productCard?.cta?.label
    ? product.c_productCard.cta.label
    : "";
  const productLink = product?.c_productCard?.cta?.link
    ? product.c_productCard.cta.link
    : "";
  return (
    <>
      <div className="justify-between border rounded-lg mb-4 p-4 w-1/6 shadow-sm">
        <img
          src={productImage}
          style={{ height: "150px", margin: "auto", position: "relative" }}
          alt=""
        />
        <div className="absolute font-semibold bg-[#FBC13D] text-white text-xs px-3 py-1 mb-5 rounded-tr-xl uppercase">
          <p className="">
            <a href={productLink}>{productBtn}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
