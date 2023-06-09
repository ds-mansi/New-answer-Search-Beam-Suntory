import StandardSection from "../sections/StandardSection";
import { ProductsCard } from "../components/cards/ProductsCard";
import { VerticalConfig } from "../components/UniversalResults";
import { ArticlesCard } from "../components/cards/ArticlesCard";
import { FaqCard } from "../components/cards/FaqCard";
import { ProductReciepeCard } from "../components/cards/ProductReciepeCard";
import {BlogsCard} from "../components/cards/BlogsCard";

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
  product_reciepes: {
    SectionComponent: StandardSection,
    label: "Reciepes",
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductReciepeCard,
      showOrdinal: false,
    },
  },
  blogs: {
    SectionComponent: StandardSection,
    label: "Blogs",
    viewAllButton: true,
    cardConfig: {
      CardComponent: BlogsCard,
      showOrdinal: false,
    },
  },
};
