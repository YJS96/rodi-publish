"use client";
// import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"

export default function Login() {

  return (
    <>
      <div className="login_wrap">
        <div className="login_box">
          <div className="top">
            <h2 className="logo">
              <Image src="/images/logo_vertical.svg" width="114" height="83" alt="logo" />
            </h2>
            <p className="sub_txt">소셜 계정으로 간편하게 로그인하세요<br /></p>
          </div>
          <div className="login_btn_group">
            <Link href={"/main"} className="naver_login">
              <Image src="/images/btn_naver_icon.svg" width="18" height="18" alt="naver"/>
              네이버로 로그인하기
            </Link>
            <Link href={"/main"} className="kakao_login">
              <Image src="/images/btn_kakao_icon.svg" width="18" height="18" alt="kakao"/>
              카카오톡으로 로그인하기
            </Link>
            <Link href={"/main"} className="google_login">
              <Image src="/images/btn_google_icon.svg" width="18" height="18" alt="google"/>
              구글로 로그인하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
