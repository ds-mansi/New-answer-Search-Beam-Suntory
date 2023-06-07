import { StandardSection } from "@yext/search-ui-react";
import { ProductsCard } from "../components/cards/ProductsCard";
import { VerticalConfig } from "../components/UniversalResults";
// import StandardSection from "../sections/StandardSection";
export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  products: {
    SectionComponent: StandardSection,
    label: "Products",
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductsCard,
      showOrdinal: false,
    },
  },
};
