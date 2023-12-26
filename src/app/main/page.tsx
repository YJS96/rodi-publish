"use client";
import React, { useState } from "react";

import MainTab from "./MainTab";
import Collection from "./Collection";
import Registration from "./Registration";
import OrderList from "./OrderList";
import MarketRink from "./MarketRink";
import Notice from "./Notice";
import Settings from "./Settings";
import Link from "next/link";

export default function MainLayout() {
  const [currentTab, setCurrentTab] = useState<String>("mainTab")

  const handleTab = (newTab : string) => {
    setCurrentTab(newTab)
  }

  return (
    <>
      <article className="content_group">
        <div className="wrap function_wrap">
          <header>
            <div className="header_area">
              <div className="left">
                <div onClick={() => handleTab("mainTab")} className="logo">
                  <img src="/images/logo.svg" />
                </div>
              </div>
              <div className="right">
                <div className="profile_area btn-open">
                  <div className="img">
                    <img src="/images/profile_img.png" />
                  </div>
                  <div className="info">
                    <div className="id">rodi@rodi.com</div>
                    <div className="tag_plan pro">Pro Plan</div>
                    {/* <!--<div className="tag_plan free">무료체험 Plan</div>--> */}
                  </div>
                  <i className="down"></i>
                </div>
              </div>
              <div className="logout-popup" id="logoutPopup">
                <button>
                  로그아웃<i></i>
                </button>
              </div>
            </div>
          </header>
          <div className="body_wrap">
            {/* <!--S 사이드바 시작--> */}
            <article className="sidebar_group">
              <ul className="menu_list">
                <li className={currentTab === "mainTab" ? "home active" : "home"}>
                  <a onClick={() => handleTab("mainTab")}>
                    <i></i>홈
                  </a>
                </li>
                <li className={currentTab === "collection" ? "collection active" : "collection"}>
                  <a onClick={() => handleTab("collection")}>
                    <i></i>수집상품
                  </a>
                </li>
                <li className={currentTab === "registration" ? "registration active" : "registration"}>
                <a onClick={() => handleTab("registration")}>
                    <i></i>등록상품
                  </a>
                </li>
                <li className={currentTab === "orderList" ? "order active" : "order"}>
                <a onClick={() => handleTab("orderList")}>
                    <i></i>주문관리
                  </a>
                </li>
                <li className={currentTab === "marketRink" ? "market active" : "market"}>
                <a onClick={() => handleTab("marketRink")}>
                    <i></i>마켓연동
                  </a>
                </li>
              </ul>
              <ul className="menu_list">
                <li className={currentTab === "notice" ? "notice active" : "notice"}>
                <a onClick={() => handleTab("notice")}>
                    <i></i>공지사항
                  </a>
                </li>
                <li className={currentTab === "settings" ? "setting active" : "setting"}>
                <a onClick={() => handleTab("settings")}>
                    <i></i>설정
                  </a>
                </li>
                <li className="plan">
                  <a href="#">
                    <i></i>요금제
                  </a>
                </li>
              </ul>
            </article>
            {/* 사이드바 끝 */}
            {currentTab === "mainTab" && <MainTab />}
            {currentTab === "collection" && <Collection />}
            {currentTab === "registration" && <Registration />}
            {currentTab === "orderList" && <OrderList />}
            {currentTab === "marketRink" && <MarketRink />}
            {currentTab === "notice" && <Notice />}
            {currentTab === "settings" && <Settings />}
          </div>
        </div>
      </article>
    </>
  );
}
