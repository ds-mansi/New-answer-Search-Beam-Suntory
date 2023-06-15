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
          <img src={icon?.socialIcon?.url} alt="" className="pr-3"/>
        </a>
      );
    }
  );
  const FooterList1 = footerprops?.props?.c_footerList?.map((list: Link) => {
    return (
      <ul>
        <li className="pr-3 pt-4 text-xl text-[#B12328] font-semibold">
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
          <li className="pr-3 font-semibold text-[#3C3C3C]">
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
      <div className="bg-[#F5F1EE]">
        <a href="#">
          <img src={footerImage} alt="" className="m-auto pt-7"/>
        </a>
        <div className="flex" style={{justifyContent:"center"}}>{socialIcon}</div>
        <div className="flex" style={{justifyContent:"center"}}>{FooterList1}</div>
        <p style={{textAlign:"center",padding:"15px",fontWeight:"500"}}>{footertandc}</p>
        <div className="flex" style={{justifyContent:"center"}}>{FooterList2}</div>
        <a href="#">
          <img src={footerImage2} alt="" style={{margin:"auto",paddingBottom:"25px"}}/>
        </a>
      </div>
    </>
  );
};
export default Footer;
