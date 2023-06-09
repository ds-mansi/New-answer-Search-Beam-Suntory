import * as React from "react";
import {
  CompositionMethod,
  useComposedCssClasses,
} from "../../hooks/useComposedCssClasses";
import { CardProps } from "../../models/cardComponent";
import "../../../src/index.css";

export interface StandardCardConfig {
  showOrdinal?: boolean;
}

export interface StandardCardProps extends CardProps {
  configuration: StandardCardConfig;
  customCssClasses?: StandardCardCssClasses;
  cssCompositionMethod?: CompositionMethod;
}

export interface StandardCardCssClasses {
  container?: string;
  header?: string;
  body?: string;
  descriptionContainer?: string;
  ctaContainer?: string;
  cta1?: string;
  cta2?: string;
  ordinal?: string;
  title?: string;
  ctaButton?: string;
  ProductPriceClass?: string;
}

const builtInCssClasses: StandardCardCssClasses = {
  container:
    "justify-between border rounded-lg mb-4 p-4 shadow-sm ProductVerticalContainer",
  header: "text-grey-800 ProductHeaderClass text-2xl font-bold",
  body: "flex justify-end pt-2.5",
  descriptionContainer: "w-full text-base",
  ctaContainer: "flex flex-col justify-end ml-4",
  cta1: "min-w-max bg-blue-600 text-white font-medium rounded-lg py-2 px-5 shadow",
  cta2: "min-w-max bg-white text-blue-600 font-medium rounded-lg py-2 px-5 mt-2 shadow",
  ordinal: "mr-1.5 text-lg font-medium",
  title: "text-lg font-bold text-black-800",
  ctaButton:
    "flex justify-center border-2 w-full rounded-md self-center	align-middle mt-4 hover:bg-green-900",
  ProductPriceClass: "ProductPrice flex flex-row",
};

/**
 * This Component renders the base result card.
 *
 * @param props - An object containing the result itself.
 */
export function ProductReciepeCard(props: StandardCardProps): JSX.Element {
  const { result, customCssClasses, cssCompositionMethod } = props;
  const cssClasses = useComposedCssClasses(
    builtInCssClasses,
    customCssClasses,
    cssCompositionMethod
  );

  interface ProductReceipeCard {
    url: string;
  }
  interface ReceipeCard {
    name?: string;
    c_recipePhoto?: ProductReceipeCard;
  }
  /**
   * This function limits the words
   * @param string
   * @param limit
   * @returns The variable containing the truncated Description.
   */

  const allproduct: ReceipeCard = result.rawData;

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={allproduct?.c_recipePhoto?.url}
          alt=""
          className="rounded-tl-3xl rounded-br-3xl"
        />
        <div className="absolute bottom-0	bg-[#B12328] text-white px-7 py-1 mb-5 rounded-tr-xl uppercase">
          <option value="product name">{allproduct.name}</option>
        </div>
      </div>
    </>
  );
}
