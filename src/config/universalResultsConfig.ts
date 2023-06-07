import { StandardSection } from "@yext/search-ui-react";
import { ProductsCard } from "../components/cards/ProductsCard";
import { VerticalConfig } from "../components/UniversalResults";
import { ArticlesCard } from "../components/cards/ArticlesCard";
import { FaqCard } from "../components/cards/FaqCard";
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
  articles: {
    SectionComponent: StandardSection,
    label: "Articles",
    viewAllButton: true,
    cardConfig: {
      CardComponent: ArticlesCard,
      showOrdinal: false,
    },
  },
  faqs: {
    SectionComponent: StandardSection,
    label: "FAQ",
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false,
    },
  },
};