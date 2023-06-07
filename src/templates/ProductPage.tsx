import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import { answersHeadlessConfig } from "../config/answersHeadlessConfig";
import "../index.css";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  DirectAnswer,
  AppliedFilters,
  LocationBias,
} from "@yext/search-ui-react";

import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import "../index.css";
import Navigation from "../components/Navigation";
import { ProductsCard } from "../components/cards/ProductsCard";

export const getPath: GetPath<TemplateProps> = () => {
  return "products";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: `Beam Suntory`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

answersHeadlessConfig.verticalKey = "products";
const searcher = provideHeadless(answersHeadlessConfig);

const Product: Template<TemplateRenderProps> = () => {
  return (
    <>
      <SearchHeadlessProvider searcher={searcher}>
        <div className="px-4 py-8">
          <div className="mx-auto flex max-w-5xl flex-col">
            <SearchBar />
            <Navigation/>
            <DirectAnswer />
            <SpellCheck />
            <ResultsCount />
            <AppliedFilters hiddenFields={["builtin.entityType"]} />
            <div className="product-card flex flex-wrap">
            <VerticalResults
              CardComponent={ProductsCard}
              displayAllOnNoResults={false}
            />
            </div>
              <LocationBias />
          </div>
          <Pagination />
        </div>
      </SearchHeadlessProvider>
    </>
  );
};

export default Product;
