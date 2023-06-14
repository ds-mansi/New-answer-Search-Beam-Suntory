import * as React from "react";

export interface Image {
  url: string;
  height: number;
  width: number;
}
export interface Link {
  label: string;
  link: string;
}

export interface Header {
  logo: Image;
  navbar: Link[];
}
export interface SocialIcon {
  socialIcon: Image;
  socialLink: Link;
}
export interface UpperHeader {
  headerTextLink: Link;
  headerUpperIcon: Image;
  headerUpperIconLink: Link;
}
export interface LowerHeader {
  headerLowerIcons: Image;
  iconsLink: Link;
}

export interface propsType {
  c_footerDrinkImage: Image;
  c_footerImage: Image;
  c_footerList: Link[];
  c_footerListing2: Link[];
  c_footerTandc: string;
  c_header: Header;
  c_headerUpper: UpperHeader;
  c_lowerHeader: LowerHeader[];
  c_socialIcons: SocialIcon[];
}

export interface Type {
  props: propsType;
}

const Header = (headprops: Type) => {

    const Logo = headprops?.props?.c_header?.logo?.url
      ? headprops.props.c_header.logo.url
      : "";
  const headnav = headprops?.props?.c_header?.navbar?.map((nav: Link) => {
    return (
      <>
        <ul>
          <li style={{ padding: "50px 0px 0px 100px" }}>
            <a href={nav.link}>{nav.label}</a>
          </li>
        </ul>
      </>
    );
  });
  const upperBuy = headprops?.props?.c_headerUpper?.headerTextLink?.label
    ? headprops.props.c_headerUpper.headerTextLink.label
    : "";
  const upperLink = headprops?.props?.c_headerUpper?.headerTextLink?.link
    ? headprops.props.c_headerUpper.headerTextLink.link
    : "";
  const UpperHeaderIcon = headprops?.props?.c_headerUpper?.headerUpperIcon.url
    ? headprops.props.c_headerUpper.headerUpperIcon.url
    : "";
  const UpperHeaderLink = headprops?.props?.c_headerUpper?.headerUpperIconLink
    .link
    ? headprops.props.c_headerUpper.headerUpperIconLink.link
    : "";
  const LowerHeaderIcon = headprops?.props?.c_lowerHeader?.map(
    (lower: LowerHeader) => {
      return (
        <a href={lower?.iconsLink?.link}>
          <img
            src={lower?.headerLowerIcons?.url}
            alt={lower?.iconsLink?.label}
          />
        </a>
      );
    }
  );

  return (
    <>
      <div className="flex">
        <a href="#">
          <img
            src={Logo}
            style={{ height: "150px", padding: "10px 0px 10px 25px" }}
          />
        </a>
        {headnav}
        <a href={upperLink}>{upperBuy}</a>
        <a href={UpperHeaderLink}>
          <img src={UpperHeaderIcon} alt="" style={{ height: "20px" }} />
        </a>
        {LowerHeaderIcon}
      </div>
    </>
  );
};
export default Header;
