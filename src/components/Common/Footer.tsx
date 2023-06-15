import * as React from "react";
import { SocialIcon, Type } from "./Header";
import { Link } from "../../types/type";

const Footer = (footerprops: Type) => {

  const footerImage = footerprops?.props?.c_footerImage.url
    ? footerprops.props.c_footerImage.url
    : "";
  const socialIcon = footerprops?.props?.c_socialIcons?.map(
    (icon: SocialIcon) => {
      return (
        <a href={icon?.socialLink?.link}>
          <img src={icon?.socialIcon?.url} alt="" />
        </a>
      );
    }
  );
  const FooterList1 = footerprops?.props?.c_footerList?.map((list: Link) => {
    return (
      <ul>
        <li>
          <a href={list.link}> {list.label}</a>
        </li>
      </ul>
    );
  });
  const footertandc = footerprops?.props?.c_footerTandc
    ? footerprops?.props?.c_footerTandc
    : "";
  const FooterList2 = footerprops?.props?.c_footerListing2?.map(
    (list: Link) => {
      return (
        <ul>
          <li>
            <a href={list.link}> {list.label}</a>
          </li>
        </ul>
      );
    }
  );
  const footerImage2 = footerprops?.props?.c_footerDrinkImage.url
    ? footerprops.props.c_footerDrinkImage.url
    : "";
  return (
    <>
      <div>
        <a href="#">
          <img src={footerImage} alt="" />
        </a>
        <div className="flex">{socialIcon}</div>
        <div className="flex">{FooterList1}</div>
        <p>{footertandc}</p>
        <div className="flex">{FooterList2}</div>
        <a href="#">
          <img src={footerImage2} alt="" />
        </a>
      </div>
    </>
  );
};
export default Footer;
