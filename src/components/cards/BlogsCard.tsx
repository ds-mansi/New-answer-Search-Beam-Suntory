import * as React from "react";
import {
  CompositionMethod,
  useComposedCssClasses,
} from "../../hooks/useComposedCssClasses";
import { CardProps } from "../../models/cardComponent";
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
  container: "justify-between border rounded-lg mb-4 p-4 shadow-sm",
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
export function BlogsCard(props: StandardCardProps): JSX.Element {
  const { result, customCssClasses, cssCompositionMethod } = props;
  const cssClasses = useComposedCssClasses(
    builtInCssClasses,
    customCssClasses,
    cssCompositionMethod
  );

  /**
   * This function limits the words
   * @param string
   * @param limit
   * @returns The variable containing the truncated Description.
   */

  interface NewBlogData {
    name?: string;
    headline?: string;
    description?: string;
    c_blogImage?: { url: string | undefined };
    c_button?: { label: string; link: string };
  }

  const Blogs: NewBlogData = result.rawData;

  //   const blogName = Blogs?.name ? Blogs.name : ""; // Name of the Blog
  const blogHeadline = Blogs?.headline ? Blogs.headline : ""; // Headline of the Products
  const blogDesciption = Blogs?.description ? Blogs.description : ""; // description of the Products

  const blogImage = Blogs?.c_blogImage?.url ? Blogs.c_blogImage.url : "";
  const blogBtn = Blogs?.c_button?.label ? Blogs.c_button.label : "";

  return (
    <>
      <div className={cssClasses.container} style={{ width: "34%" }}>
        <img
          src={blogImage}
          style={{
            height: "150px",
            margin: "auto",
            width: "100%",
            marginBottom: "15px",
          }}
          alt=""
        />
        <div>
          {/* <h3 className={cssClasses.header} style={{color:"#B12328"}}>{blogName}</h3> */}
          <h4 className="font-semibold text-[#B12328] mb-2">{blogHeadline}</h4>
          <p className="mb-2">{blogDesciption}</p>
          <p
           
            className="border border-[#B12328] w-2/6 text-center text-[#B12328] "
          >
            <a href={Blogs?.c_button?.link}>{blogBtn}</a>
          </p>
        </div>
      </div>
    </>
  );
}
