import React from "react";
import styled from "styled-components";
import { IoMailOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BiSolidMap } from "react-icons/bi";
const FooterStyles = styled.section`
  margin: auto;
  .footer-info {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 25px 0;
    background-color: #7f3f30;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    .footer-register {
      width: 400px;
      position: relative;
      .footer-email {
        color: #000;
        font-size: 14px;
        padding: 10px 100px 10px 20px;
        width: 100%;
      }
      .btn-register {
        background-color: #c09b5a;
        padding: 5px 10px;
        position: absolute;
        right: 2px;
        bottom: 3px;
        color: #fff;
      }
    }
  }
  .footer-static {
    padding: 40px 0;
    color: #fff;
    background-color: #000;
    .footer-content {
      width: 1100px;
      margin: auto;
      display: flex;
      .footer-address {
        width: 400px;
        font-size: 14px;
        border-right: 1px solid #646464;
        .logo {
          display: flex;
          gap: 20px;
          .header-logo {
            img {
              width: 60px;
              height: 60px;
            }
          }
          .logo-name {
            font-size: 40px;
            font-family: "Playfair Display";
          }
        }
        .address-detail {
          margin: 10px 0;
        }
      }
      .footer-support {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        .list-support {
          padding: 20px;
          display: block;
          .title-support {
            line-height: 39px;
            font-weight: 700;
            text-transform: uppercase;
            font-family: "Playfair Display";
          }
          .partner {
            display: flex;
            .image-link {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }
          .item-support {
            display: flex;
            flex-direction: column;
            .support-link {
              font-size: 13px;
              line-height: 1.8rem;
              text-decoration: none;
              display: block;
              width: 100%;
              color: #fff;
              font-family: "Montserrat Alternates", sans-serif;
            }
          }
        }
      }
    }
  }
`;
const Footer = () => {
  return (
    <div className="w-full mt-14">
      <div className="flex bg-[#7F3F30] p-4 text-white justify-center gap-5 items-center">
        <div className="flex gap-5 items-center">
          <IoMailOutline className="text-3xl inline-block" />
          <h4 className="sm:text-xs md:text-sm lg:text-lg uppercase inline-block">
            receive information when promotion
          </h4>
        </div>
        <div className="md:w-1/2 lg:w-1/2 flex">
          <input
            className="sm:py-1 sm:text-xs md:text-sm lg:text-lg px-4 w-3/4 text-black"
            placeholder="Enter your email"
          />
          <button className="ml-5 bg-black px-2 py-2">Register</button>
        </div>
      </div>
      <div className="bg-black text-white px-10 py-8">
        <div className="flex w-full justify-between">
          <div className="flex w-1/3">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="header-logo">
                  <svg
                    id="logo"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 md:w-6 lg:h-10 lg:w-10"
                  >
                    {" "}
                    <path
                      d="M18.9523 11.0726C18.5586 7.69873 18.1429 4.13644 18.1429 0H21.8571C21.8571 4.08998 21.4434 7.64774 21.0502 11.0254C20.7299 13.778 20.4235 16.411 20.3666 19.115C22.2316 17.1697 23.863 15.107 25.572 12.9463C27.6791 10.2823 29.9043 7.46945 32.829 4.54464L35.4554 7.17104C32.5633 10.0631 29.7547 12.2861 27.0884 14.3966L27.0859 14.3985C24.9141 16.1178 22.8365 17.7624 20.885 19.6334C23.579 19.5765 26.1911 19.2717 28.9272 18.9524C32.3011 18.5586 35.8636 18.1429 40 18.1429V21.8571C35.9102 21.8571 32.3524 21.4432 28.9749 21.0502L28.9724 21.05C26.2204 20.7298 23.5882 20.4236 20.885 20.3666C22.829 22.2302 24.8906 23.8609 27.0499 25.5687L27.0533 25.5716C29.7174 27.6789 32.5304 29.9039 35.4554 32.829L32.829 35.4554C29.9369 32.5634 27.714 29.755 25.6038 27.0889L25.5988 27.082L25.5946 27.0765C23.8775 24.9081 22.2349 22.8338 20.3666 20.885C20.4235 23.589 20.7299 26.222 21.0502 28.9746C21.4434 32.3523 21.8571 35.91 21.8571 40H18.1429C18.1429 35.8636 18.5586 32.3013 18.9523 28.9274L18.9531 28.9219C19.272 26.1877 19.5765 23.5772 19.6334 20.885C17.7651 22.8338 16.1225 24.9081 14.4054 27.0765L14.4012 27.082L14.3962 27.0889C12.286 29.755 10.0631 32.5634 7.17104 35.4554L4.54464 32.829C7.46959 29.9039 10.2826 27.6789 12.9467 25.5716L12.9501 25.5687C15.1094 23.8609 17.171 22.2302 19.115 20.3666C16.411 20.4237 13.7779 20.73 11.0251 21.0502C7.6476 21.4432 4.08984 21.8571 0 21.8571V18.1429C4.13644 18.1429 7.69894 18.5586 11.0728 18.9524C13.8089 19.2717 16.421 19.5765 19.115 19.6334C17.1627 17.7617 15.0843 16.1166 12.9116 14.3966C10.2453 12.2861 7.43666 10.0631 4.54464 7.17104L7.17104 4.54464C10.0957 7.46945 12.3209 10.2823 14.428 12.9463C16.137 15.1069 17.7684 17.1696 19.6334 19.1148C19.5765 16.4227 19.272 13.8123 18.9531 11.0781L18.9523 11.0726Z"
                      className="ccustom"
                      fill="#FFA589"
                    ></path>{" "}
                  </svg>
                </div>
                <div className="md:flex md:flex-col lg:flex lg:flex-col">
                  <span className="text-white md:text-xs lg:text-lg">
                    Vela hotel
                  </span>
                  <span className="star-box flex">
                    <img
                      className="img-star sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-5 lg:w-5"
                      src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-3d-golden-star-png-image_13370055.png"
                      alt="hotel"
                    />
                    <img
                      className="img-star sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-5 lg:w-5"
                      src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-3d-golden-star-png-image_13370055.png"
                      alt="hotel"
                    />
                    <img
                      className="img-star sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-5 lg:w-5"
                      src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-3d-golden-star-png-image_13370055.png"
                      alt="hotel"
                    />
                    <img
                      className="img-star sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-5 lg:w-5"
                      src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-3d-golden-star-png-image_13370055.png"
                      alt="hotel"
                    />
                    <img
                      className="img-star sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-5 lg:w-5"
                      src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-3d-golden-star-png-image_13370055.png"
                      alt="hotel"
                    />
                  </span>
                </div>
              </div>
              <div className="my-7 sm:text-sm">
                <p className="address-detail">
                  83 Hoa Binh, Ward An Lac, Dist Ninh Kieu, Can Tho City,
                  Vietnam
                </p>
                <p className="address-detail">Tel: +84 (0) 794 458 600</p>
                <p>Email: hoanglong255l@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 gap-12">
            <div className="flex w-1/2 flex-col gap-2">
              <NavLink className="text-white" to={"/"}>
                Location & map
              </NavLink>
              <NavLink className="text-white" to={"/"}>
                Event
              </NavLink>
              <NavLink className="text-white" to={"/"}>
                News
              </NavLink>
              <NavLink className="text-white" to={"/"}>
                Policy Booking
              </NavLink>
              <NavLink className="text-white" to={"/"}>
                cooperate
              </NavLink>
            </div>
            <div className="w-1/2">
              <h3 className="mb-5 cursor-pointer">Follow us</h3>
              <div className="flex gap-5">
                <NavLink className="support-link" to={"/"}>
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="https://diamondseahotel.com/UploadFile/Article/Tripadvisor-diamond-sea-hotel-da-nang-2018.jpg"
                    alt="app"
                  />
                </NavLink>
                <NavLink className="support-link" to={"/"}>
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="https://kent.vn/wp-content/uploads/2018/08/AAEAAQAAAAAAAAOpAAAAJGE5YTVhNDM3LWNiM2ItNGUzZC1hZjViLTYxNzU5MTVkODRmMg.png"
                    alt="app"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;