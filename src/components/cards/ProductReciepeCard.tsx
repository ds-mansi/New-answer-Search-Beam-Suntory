import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import Ce_productRecipes from "../../types/product_reciepes";

const ProductReciepeCard: CardComponent<Ce_productRecipes> = ({
  result,
}: CardProps<Ce_productRecipes>): JSX.Element => {
  const productrecipe: Ce_productRecipes = result.rawData;


 
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={productrecipe?.c_recipePhoto?.url}
          alt=""
          className="rounded-tl-3xl rounded-br-3xl"
        />
        <div className="absolute bottom-0	bg-[#FBC13D] text-white px-7 py-1 mb-5 rounded-tr-xl uppercase">
          <option value="product name">{productrecipe.name}</option>
        </div>
      </div>
    </>
  );
};

export default ProductReciepeCard;
