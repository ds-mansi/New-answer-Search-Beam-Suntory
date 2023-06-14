import * as React from "react";

import "../index.css";
import {
  Template,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
  GetPath,
} from "@yext/pages";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { Image, Link } from "../types/type";

// export interface articletype{

// }

export interface TopArticleType {
  articleButton: Link;
  articleDesc: string;
  articleHead: string;
  articleImage: Image;
  articleKeywords: string[];
}

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "ce_blogs",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "name",
      "id",
      "slug",
      "c_banner",
      "c_heroSection",
      "c_aboutSection",
      "c_topArticles",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_blogs"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`${document.name}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.c_meta_title
      ? document.c_meta_title
      : `${document.name} Store of  Vista Optical`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      //   {
      //     type: "meta",
      //     attributes: {
      //       name: "description",
      //       content: `${
      //         document.c_meta_description
      //           ? document.c_meta_description
      //           : `Find the ${document.name} Vista Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
      //       }`,
      //     },
      //   },

      //   {
      //     type: "meta",
      //     attributes: {
      //       name: "author",
      //       content: StaticData.Brandname,
      //     },
      //   },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          // rel: "canonical",
          // href: `${
          //   document._site.c_canonical ? document.c_canonical : stagingBaseurl
          // }${
          //   document.slug ? document.slug : `${document.name.toLowerCase()}`
          // }.html`,
        },
      },

      //   {
      //     type: "meta",
      //     attributes: {
      //       property: "og:description",
      //       content: `${
      //         document.c_meta_description
      //           ? document.c_meta_description
      //           : `Find the ${document.name} Vista Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
      //       }`,
      //     },
      //   },
      //   {
      //     type: "link",
      //     attributes: {
      //       rel: "shortcut icon",
      //       href: favicon,
      //     },
      //   },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      //   {
      //     type: "meta",
      //     attributes: {
      //       property: "og:image",
      //       content: favicon,
      //     },
      //   },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: document.c_meta_title
            ? document.c_meta_title
            : `${document.name} Store of  Vista Optical`,
        },
      },
      //   {
      //     type: "meta",
      //     attributes: {
      //       name: "twitter:description",
      //       content: `${
      //         document.c_meta_description
      //           ? document.c_meta_description
      //           : `Find the ${document.name} Vista Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
      //       }`,
      //     },
      //   },
      /// twitter tag
    ],
  };
};

// };

const BlogDetailPage: Template<TemplateRenderProps> = ({ document }) => {
  console.log(document, "doc");
  const { _site } = document;
  const bannerImage = document?.c_banner?.bannerImage.url
    ? document.c_banner.bannerImage.url
    : "";
  const bannerHead = document?.c_banner?.bannerHeading
    ? document.c_banner.bannerHeading
    : "";
  const bannerDesc = document?.c_banner?.bannerDescription
    ? document.c_banner.bannerDescription
    : "";
  const heroImage = document?.c_heroSection?.heroImage.url
    ? document.c_heroSection.heroImage.url
    : "";
  const heroHead1 = document?.c_heroSection?.heroHead1
    ? document.c_heroSection.heroHead1
    : "";
  const heroHead2 = document?.c_heroSection?.heroHead2
    ? document.c_heroSection.heroHead2
    : "";
  const heroDesc = document?.c_heroSection?.heroDesc
    ? document.c_heroSection.heroDesc
    : "";
  const aboutHead = document?.c_aboutSection?.aboutHeading
    ? document.c_aboutSection.aboutHeading
    : "";
  const aboutDesc = document?.c_aboutSection?.aboutDesc
    ? document.c_aboutSection.aboutDesc
    : "";
  const aboutImg = document?.c_aboutSection?.aboutImage.url
    ? document.c_aboutSection.aboutImage.url
    : "";
  const aboutImgHead = document?.c_aboutSection?.aboutImageHeading
    ? document.c_aboutSection.aboutImageHeading
    : "";
  const aboutImgDesc = document?.c_aboutSection?.aboutImageDesc
    ? document.c_aboutSection.aboutImageDesc
    : "";
  const aboutImgNumb = document?.c_aboutSection?.aboutImageNumber?.map(
    (numb: number) => {
      return (
        <>
          <h2 className="pl-5">{numb}</h2>
        </>
      );
    }
  );
  const aboutImgNumbDesc = document?.c_aboutSection?.aboutImageNumberDesc?.map(
    (desc: string) => {
      return (
        <>
          <h2 className="pl-5">{desc}</h2>
        </>
      );
    }
  );

  const TopArticle = document?.c_topArticles?.map((a: TopArticleType) => {
    console.log(a, "abc");
    return (
      <>
        <div>
          <img src={a?.articleImage?.url} />
          <h2>{a?.articleHead}</h2>
          <p>{a.articleDesc}</p>
          <ul>
            <li>{a.articleKeywords}</li>
          </ul>
          <a href={a.articleButton.link}>{a.articleButton.label}</a>
        </div>
      </>
    );
  });
  return (
    <>
      <Header props={_site} />
      <div>
        <div className="relative ">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              {" "}
              <a href="#">Home </a>
            </li>
            <li className="breadcrumb-item">
              {" "}
              <a href="https://master-restfully--potential--katydid-sbx-pgsdemo-com.sbx.preview.pagescdn.com/index?query=">
                {" "}
                Search{" "}
              </a>
            </li>
            <li className="breadcrumb-item"> {document.name} </li>
          </ol>
          <img src={bannerImage} alt="" />
          <div className="absolute inset-y-0 pt-7 pl-3 text-white w-8/12">
            <h2 className="font-bold">{bannerHead}</h2>
            <p>{bannerDesc}</p>
          </div>
        </div>
        <div className="bg-[#f8f7f7]">
          <img
            src={heroImage}
            alt=""
            style={{ float: "right", width: "30%" }}
          />
          <div
            style={{
              padding: "10px 50px 100px 50px",
              backgroundColor: "#f8f7f7",
              height: "100%",
            }}
          >
            <div
              style={{ fontWeight: "bold", fontSize: "5rem", color: "#B1232B" }}
            >
              <h2>{heroHead1}</h2>
              <h2>{heroHead2}</h2>
            </div>
            <p style={{ width: "59%", color: "#B1232B" }}>{heroDesc}</p>
          </div>
        </div>
        <div style={{ paddingTop: "4.5rem", textAlign: "center" }}>
          <h3 className="font-bold text-base text-[#B1232B]	">{aboutHead}</h3>
          <p className="pt-5">{aboutDesc}</p>
        </div>
        <div className="flex h-full" style={{ paddingTop: "4rem" }}>
          <img
            src={aboutImg}
            alt=""
            style={{ width: "35%", paddingRight: "5rem" }}
          />
          <div>
            <h3 className="font-bold text-xl">{aboutImgHead}</h3>
            <p>{aboutImgDesc}</p>
            <div className="pt-4">
              <div className="flex text-[#B1232B] font-bold text-2xl	pr-3">
                {aboutImgNumb}
              </div>
              <div className="flex">{aboutImgNumbDesc}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Top Articles</h2>
      <div className="flex">{TopArticle}</div></div>
      <Footer props={_site} />
    </>
  );
};

export default BlogDetailPage;
