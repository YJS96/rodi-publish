"use client"
import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="service_wrap service_main">
        <header className={scrolled ? "scrolled" : ""}>
          <div className="left">
            <a href="#" className="logo"></a>
            <ul className="menu">
              <li>
                <a href="#">기능소개</a>
              </li>
              <li>
                <a href="#">가격정책</a>
              </li>
              <li>
                <a href="#">사용가이드</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
          </div>
          <div className="right btn_group small">
            <button className="fill_black mr_8 login">로그인</button>
            <button className="fill_main">무료로 체험해보기</button>
            <button className="mobile_menu_btn">menu</button>
          </div>
        </header>
        <div className="content_wrap">
          <section className="sc_visual_wrap">
            <div className="main_visual">
              <div className="txt_group" data-aos="flip-left">
                <p>세상에 없던</p>
                <p className="gradation">
                  반자동 업로드&
                  <br className="pc_tab_none" />
                  주문관리 통합시스템
                </p>
                <p>
                  RODI에 오신것을 <br className="pc_tab_none" />
                  환영합니다.
                </p>
              </div>
              <div className="img_group">
                <img
                  src="/images/service_sc01_visual_main.png"
                  className="main_img"
                />
                <div className="any_group">
                  <img
                    src="/images/service_main_visual_float1.svg"
                    className="float01"
                    data-aos="fade-up"
                  />
                  <img
                    src="/images/service_main_visual_float2.svg"
                    className="float02"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="900"
                  />
                  <img
                    src="/images/service_main_visual_float3.svg"
                    className="float03"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1500"
                  />
                  <img
                    src="/images/service_main_visual_float_logo.png"
                    className="float_logo"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  />
                </div>
              </div>
            </div>
            <div className="program_video_area">
              <div className="item">
                <div className="video_group">동영상 영역</div>
                <div className="txt_group">
                  <p className="tit">반자동 업로드 프로그램</p>
                  <div className="list">
                    <p>
                      5대 소싱몰 (타오바오, 1688, 알리익스프레스, 티몰, 아마존)
                      상품 수집 지원
                    </p>
                    <p>
                      8대 오픈마켓 (스마트스토어, 쿠팡, 옥션, 지마켓, 11번가
                      글로벌, 11번가 국내, 인터파크, 롯데온) 동시 업로드 지원
                    </p>
                    <p>URL, 크롬 익스텐션, 엑셀 수집 지원</p>
                    <p>
                      AI브러쉬, AI영역지우기, 배경지우기 등 프리미엄 AI툴 제공
                    </p>
                    <p>
                      상품명 추천 / 해시태그 추천 / 옵션가 기준 자동처리 버튼 등
                    </p>
                    <p>
                      최고 퀄리티 번역 품질로 일괄 번역, 여러 장 동시 번역,
                      자동번역 기능 제공
                    </p>
                  </div>
                </div>
              </div>
              <div className="dot_group">
                <i></i>
              </div>
              <div className="item">
                <div className="video_group">동영상 영역</div>
                <div className="txt_group">
                  <p className="tit">오픈마켓 주문관리 프로그램</p>
                  <div className="list">
                    <p>오픈마켓 주문현황 일괄 수집</p>
                    <p>일괄 배송처리 및 송장 수정</p>
                    <p>해외발주여부, 배대지 접수 여부 메모로 일일 장부 기능</p>
                    <p>세금소명자료 파일 제작 및 제공</p>
                    <p>한눈에 보는 매출, 매입, 순이익</p>
                  </div>
                </div>
              </div>
              <div className="txt_group">
                <p>
                  반자동 업로드 프로그램 & <br className="pc_tab_none" />
                  오픈마켓 주문관리 프로그램을
                </p>
                <p>
                  로디에서 한번에 만나보세요!
                  <img src="/images/service_sc01_fire.svg" />
                </p>
              </div>
            </div>
          </section>
          <section className="sc_shop_list_wrap">
            <h4 className="sc_tit">
              아래 모든 소싱몰과 <br className="pc_tab_none" />
              오픈마켓을 지원해요!
            </h4>
            <div className="list_group">
              <div>
                <div className="tit">
                  <span>해외소싱몰</span>
                </div>
                <div className="logo_set">
                  <div>
                    <img src="/images/service_main_logo_taobao.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_1688.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_ali.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_amazon.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_tmall.png" />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="tit">
                  <span>오픈마켓</span>
                </div>
                <div className="logo_set">
                  <div>
                    <img src="/images/service_main_logo_naver.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_coupang.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_gmarket.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_auction.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_11st.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_lotteon.png" />
                  </div>
                  <div>
                    <img src="/images/service_main_logo_interpark.png" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sc_function_wrap">
            <h4 className="sc_tit">
              최소 클릭수,
              <br className="pc_tab_none" /> 최소 시간, 최대 효율
            </h4>
            <ul className="function_list">
              <li data-aos="fade-up">
                <div className="img">
                  <img src="/images/service_main_fuction_img01.png" />
                </div>
                <div className="txt_group">
                  <span className="no">01</span>
                  <p className="tit">
                    추천 상품명 & 추천 해시태그 <br className="m_none" />
                    자동세팅{" "}
                  </p>
                  <p className="sub_txt">
                    상위노출 상품 데이터 기반 상품명 추천 키워드와 <br />
                    데이터 기반 추천 해시태그가 자동으로 세팅되어 있어요.
                  </p>
                </div>
              </li>
              <li className="right" data-aos="fade-up">
                <div className="img">
                  <img src="/images/service_main_fuction_img02.png" />
                </div>
                <div className="txt_group">
                  <span className="no">02</span>
                  <p className="tit">옵션가 최저가&최다상품 자동처리 버튼</p>
                  <p className="sub_txt">
                    옵션가 기준 일일히 눌러볼 필요 없이! <br />
                    최저가 기준 & 최다상품 기준만 고르면 자동으로 처리돼요.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up">
                <div className="img">
                  <img src="/images/service_main_fuction_img03.png" />
                </div>
                <div className="txt_group">
                  <span className="no">03</span>
                  <p className="tit">
                    여러 장 일괄번역 기능 &<br />
                    번역해서 가져오기 기능 제공
                  </p>
                  <p className="sub_txt">
                    한 장 한 장 번역 버튼 누를 필요 없이, 일괄 번역 가능!
                    <br />
                    '자동번역이미지' 기능을 통해 이미지를 가져올 때 자동으로
                    번역해서 가져올 수 있어요.
                  </p>
                </div>
              </li>
              <li className="right video_group" data-aos="fade-up">
                <div className="img">비디오영역</div>
                <div className="txt_group">
                  <span className="no">04</span>
                  <p className="tit">
                    AI 프리미엄 편집툴로 간편해진
                    <br />
                    이미지 편집
                  </p>
                  <p className="sub_txt">
                    AI브러쉬, AI영역제거, AI배경제거 3종 프리미엄 편집툴로
                    <br />
                    1초만에 외국어 지우기, 누끼 따기가 가능해요.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up">
                <div className="img">
                  <img src="/images/service_main_fuction_img05.png" />
                </div>
                <div className="txt_group">
                  <span className="no">05</span>
                  <p className="tit">로디 연결 사전 준비 최소화!</p>
                  <p className="sub_txt">
                    오픈마켓에서 일일이 사전 준비할 필요 없이 <br />
                    로디에서 한번에 출고지와 반품지, 배송 정보를 설정할 수
                    있어요.
                  </p>
                </div>
              </li>
              <li className="right" data-aos="fade-up">
                <div className="img">
                  <img src="/images/service_main_fuction_img06.png" />
                </div>
                <div className="txt_group">
                  <span className="no">06</span>
                  <p className="tit">원클릭 배송처리</p>
                  <p className="sub_txt">
                    한 번의 클릭으로 배송완료까지! 로디에서 모두 처리할 수
                    있어요. <br className="m_none" />
                    취소/환불 주문도 한번에 관리 가능해요.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up">
                <div className="img">
                  <img src="/images/service_main_fuction_img07.png" />
                </div>
                <div className="txt_group">
                  <span className="no">07</span>
                  <p className="tit">매출/매입 관리 & 소명자료 제작</p>
                  <p className="sub_txt">
                    여러 오픈마켓에서 발생한 매출과 매입을 한번에 관리하세요.
                    <br className="m_none" />
                    구매대행 셀러라면 꼭 필요한 세금소명자료도
                    <br className="m_none" />
                    로디에서 평소 해둔 메모로 모두 준비 가능해요.
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section className="sc_translation_wrap">
            <h4 className="sc_tit" data-aos="zoom-in">
              <span className="main">최고 퀄리티의 번역 품질</span>을<br />
              제공합니다.
            </h4>
            <div className="content_group">
              <div className="before">
                <div className="txt_group">
                  <img src="/images/service_emoji02.png" className="emoji" />
                  <p>
                    자동 번역인데
                    <br />
                    <span className="red">결국 다 손봐야 하는</span> 상품명
                  </p>
                </div>
                <img src="/images/service_main_translation_after_img.svg" />
              </div>
              <div className="after">
                <div className="txt_group">
                  <img src="/images/service_emoji02.png" className="emoji" />
                  <p>
                    <span className="blue">손댈 곳이 없는</span>
                    <br />
                    상위노출 상품명
                  </p>
                </div>
                <img src="/images/service_main_translation_before_img.svg" />
              </div>
            </div>
          </section>
          <section className="sc_margin_wrap">
            <h4 className="sc_tit">
              <span className="main">가장 정확한 마진율 계산기</span>
              <br />
              원가부터 판매가가 책정된 과정까지
              <br />
              모두 제공합니다.
            </h4>
            <div className="content_group">
              <div className="txt" data-aos="fade-up">
                <p>
                  <span>
                    설정한 마진율,
                    <br />
                    실제 마진율
                  </span>
                  과 비교해보신 적 있으신가요?
                </p>
              </div>
              <img
                src="/images/service_main_marginimg.svg"
                className="m_none"
              />
              <img
                src="/images/service_main_marginimg_m.svg"
                className="pc_tab_none"
              />
            </div>
          </section>
          <section className="sc_review_wrap">
            <h4 className="sc_tit">
              RODI의 생산성, <br className="pc_tab_none" />
              써보시면 놀라실걸요?
              <br />
              <span className="main">후기가 증명하는 생산성</span>
            </h4>
            <div className="review_swiper_wrap">
              <div className="swiper" dir="ltr">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        1 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        2 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        3 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        4 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        5 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        6 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        7 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        8 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        9 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p>
                        10 이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper" dir="rtl">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p id="text">
                        이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p id="text">
                        이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p id="text">
                        이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p id="text">
                        이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_box">
                      <p id="text">
                        이제까지 정말 많은 프로그램을 써봤는데, 생각보다 직접
                        해야하는 부분이 많아서 수동으로 돌리기도 했었어요.
                        그런데 로디에서는 정말알아서 한번에 다 해주고, 저는
                        검토만 하면 되니까 너무 편해요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sc_plan_wrap">
            <h4 className="sc_tit">
              로디 요금제를 소개할게요.
              <br />
              <span className="main">10일 무료체험</span>으로{" "}
              <br className="pc_tab_none" />
              먼저 이용해보세요!
            </h4>
            <div className="plan_wrap">
              <div className="toggle-button-cover">
                <div className="button-cover">
                  <div className="button b2" id="button-16">
                    <input type="checkbox" className="checkbox" />
                    <div className="knobs">
                      <span>연간결제</span>
                    </div>
                    <div className="layer"></div>
                  </div>
                </div>
              </div>
              <div className="plan_detail_group">
                <div className="pro_group" data-aos="flip-left">
                  <div className="top">
                    <p>
                      <img src="/images/label_pro.svg" />
                      PRO 요금제
                    </p>
                    <div className="price_group">
                      <span className="value">₩200,000</span>
                      <span>/월</span>
                    </div>
                  </div>
                  <div className="point_group">
                    <p>
                      5가지 소싱몰 (타오바오, 1688, 알리익스프레스, 티몰,
                      아마존) 에서 간편수집/엑셀수집/URL수집 모두 가능
                    </p>
                    <p>
                      국내 오픈마켓 8군데 동시업로드 제공 (스마트스토어, 쿠팡,
                      11번가 글로벌, 11번가 국내, ESM(옥션/지마켓), 롯데온,
                      인터파크){" "}
                    </p>
                    <p>
                      상품명/옵션명/상세페이지 등 모든 내역 최고 퀄리티 자동번역{" "}
                    </p>
                    <p>
                      AI브러시 / AI영역지우기 / AI배경제거 등 자연스러운 AI
                      프리미엄 보정툴
                    </p>
                    <p>
                      AI번역으로 이미지 글자 자동번역 및 여러 장 동시번역 가능
                    </p>
                    <p>
                      설정된 목표만큼 달성률 체크 및 매일/매주/매달 업로드수
                      분석 및 순위제공
                    </p>
                    <p>
                      카드수수료/마진/부가세 모두 고려한 정확도 높은 예상마진과
                      자동 가격책정기능
                    </p>
                    <p>여러 오픈마켓의 주문을 한번에 조회 및 배송 처리 기능</p>
                    <p>해외구매대행 세금소명자료 자동관리 및 엑셀다운 기능</p>
                    <p>상품 업로드 및 관리개수 무제한</p>
                  </div>
                  <div className="btn_group">
                    <button className="fill_main">요금제 결제</button>
                  </div>
                </div>
                <div className="free_group" data-aos="flip-left">
                  <div className="top">
                    <p>
                      <img src="/images/label_pree.svg" />
                      무료체험 요금제
                    </p>
                    <div className="price_group">
                      <span className="value">₩0</span>
                      <span>/월</span>
                    </div>
                  </div>
                  <div className="point_group">
                    <p>
                      PRO 요금제의 모든 기능 10일간 제공 (단, 상품 관리개수 한도
                      500개)
                    </p>
                  </div>
                  <div className="btn_group">
                    <span className="info_txt">
                      <i></i>가입 후 10일간
                    </span>
                    <button className="fill_black">요금제 결제</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sc_lastbn">
            <div className="txt_group">
              <p>
                세상에 없던
                <br />
                반자동 업로드 & <br className="pc_tab_none" />
                주문관리 통합시스템, RODI
              </p>
              <span>부담없이 무료로 이용해보세요!</span>
            </div>
            <div className="btn_group">
              <button className="fill_black">무료체험으로 시작하기</button>
            </div>
          </section>
        </div>
        <footer>
          <div className="footer_area">
            <h2 className="logo">
              <img src="/images/logo_vertical_gray.svg" />
            </h2>
            <div className="info_group">
              <div className="url_rink">
                <a href="#">일반 이용약관</a>
                <a href="#">개인정보 처리방침</a>
              </div>
              <div className="detail">
                <p>
                  <span className="only">상호명 : RODI</span>
                </p>
                <p>
                  <span>대표자 : 김정란</span>
                  <span>사업자번호 : 123-33-55567</span>
                </p>
                <p className="half">
                  <span>주소 : 서울시 관악구 행복로 110</span>
                  <span>통신판매업신고번호 : 2023-서울관악-1234</span>
                </p>
                <p>
                  <span>대표전화 : 070-2341-0344</span>
                  <span>대표 메일 : contact@rodi.co.kr</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
