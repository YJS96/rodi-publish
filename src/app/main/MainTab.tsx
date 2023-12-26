import React from "react";



export default function MainTab() {
  return (
    <>
      <article className="content_group">
        <div className="main_wrap box_width">
          <div className="top_header">
            <h3 className="tit">RODI님의 7월 현황</h3>
          </div>
          <section className="sc_total">
            <div className="section_top">
              <h4 className="section_tit">매출처 선택</h4>
              <div className="check_wrap">
                <div className="checkbox_group">
                  <input type="checkbox" checked id="all" />
                  <label htmlFor="all">
                    <span>전체</span>
                  </label>
                </div>
                <div className="checkbox_group">
                  <input type="checkbox" id="naver" />
                  <label htmlFor="naver">
                    <span>스마트스토어</span>
                  </label>
                </div>
                <div className="checkbox_group">
                  <input type="checkbox" id="cupang" />
                  <label htmlFor="cupang">
                    <span>쿠팡</span>
                  </label>
                </div>
                <div className="checkbox_group">
                  <input type="checkbox" id="gmarket" />
                  <label htmlFor="gmarket">
                    <span>G마켓</span>
                  </label>
                </div>
                <div className="checkbox_group">
                  <input type="checkbox" id="auction" />
                  <label htmlFor="auction">
                    <span>옥션</span>
                  </label>
                </div>
                <div className="checkbox_group">
                  <input type="checkbox" id="11st_global" />
                  <label htmlFor="11st_global">
                    <span>11번가 글로벌</span>
                  </label>
                </div>
                <div className="checkbox_group">
                  <input type="checkbox" id="11st_korea" />
                  <label htmlFor="11st_korea">
                    <span>11번가 국내</span>
                  </label>
                </div>
                <div className="checkbox_group">
                  <input type="checkbox" id="lotteon" />
                  <label htmlFor="lotteon">
                    <span>롯데온</span>
                  </label>
                </div>
                <div className="checkbox_group">
                  <input type="checkbox" id="interpark" />
                  <label htmlFor="interpark">
                    <span>인터파크</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="total_area">
              <div className="sales">
                <span className="tit">
                  <i></i>이번달 매출
                </span>
                <div className="value">1,924,300원</div>
                <div className="contrast down">
                  <i></i>6월대비 20%
                </div>
              </div>
              <div className="buy">
                <span className="tit">
                  <i></i>이번달 구매 건수
                </span>
                <div className="value">300건</div>
                <div className="contrast up">
                  <i></i>6월대비 20%
                </div>
              </div>
              <div className="collect">
                <span className="tit">
                  <i></i>이번달 상품 수집 수
                </span>
                <div className="value">854개</div>
                <div className="contrast down">
                  <i></i>6월대비 20%
                </div>
              </div>
              <div className="register">
                <span className="tit">
                  <i></i>이번달 상품 등록 수
                </span>
                <div className="value">300개</div>
                <div className="contrast down">
                  <i></i>6월대비 20%
                </div>
              </div>
            </div>
          </section>
          <div className="double_file">
            <section className="sc_plan">
              <div className="section_top">
                <h4 className="section_tit">RODI Plan</h4>
              </div>
              <div className="plan_wrap">
                <div className="my_plan">
                  <div>
                    <span className="tit">나의 요금제</span>
                    <div className="value_group">
                      <span>Pro Plan</span>
                      <div className="info">26일 남음 (2023.08.05까지)</div>
                    </div>
                  </div>
                  <a href="#">
                    요금제 결제하러 가기<i></i>
                  </a>
                </div>
                <div className="my_business certified">
                  {/* <!--인증시 certified/ 미인증시 uncertified--> */}
                  <div>
                    <span className="tit">사업자 인증</span>
                    <div className="value_group">
                      <span className="certified_tag">
                        <img src="images/shield-fill.svg" />
                        인증
                      </span>
                      <span className="uncertified_tag">
                        <img src="images/unshield-fill.svg" />
                        미인증
                      </span>
                      <div className="info">
                        <span className="number">473-02-08982</span>
                        <span className="main">대표계정</span>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="certified_btn">
                    직원 계정 추가하러 가기<i></i>
                  </a>
                  <a href="#" className="uncertified_btn">
                    사업자 인증하고 RODI 시작하기<i></i>
                  </a>
                </div>
              </div>
            </section>
            <section className="sc_plan">
              <div className="section_top">
                <h4 className="section_tit">현재 환율</h4>
              </div>
              <div className="exchange_group">
                <div className="china">
                  <div className="country">
                    <i></i>
                    <div>
                      <p>중국</p>
                      <span>CNY</span>
                    </div>
                  </div>
                  <div className="value_group">
                    <span>위안</span>
                    <div className="price">123원</div>
                    <div className="contrast down">
                      <i></i>32원
                    </div>
                  </div>
                </div>
                <div className="usa">
                  <div className="country">
                    <i></i>
                    <div>
                      <p>미국</p>
                      <span>USD</span>
                    </div>
                  </div>
                  <div className="value_group">
                    <span>달러</span>
                    <div className="price">1,320원</div>
                    <div className="contrast">
                      <i></i>-
                    </div>
                  </div>
                </div>
                <div className="england">
                  <div className="country">
                    <i></i>
                    <div>
                      <p>영국</p>
                      <span>GBP</span>
                    </div>
                  </div>
                  <div className="value_group">
                    <span>파운드</span>
                    <div className="price">1,673원</div>
                    <div className="contrast down">
                      <i></i>3원
                    </div>
                  </div>
                </div>
                <div className="uro">
                  <div className="country">
                    <i></i>
                    <div>
                      <p>유럽</p>
                      <span>EUR</span>
                    </div>
                  </div>
                  <div className="value_group">
                    <span>유료</span>
                    <div className="price">1,500원</div>
                    <div className="contrast up">
                      <i></i>12원
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="double_file">
            <section className="sc_notice">
              <div className="section_top">
                <h4 className="section_tit">RODI 공지사항</h4>
                <a href="#" className="btn_more">
                  더보기<i></i>
                </a>
              </div>
              <div className="notice_list">
                <a href="#">
                  <p className="tit">
                    로디에도 직원 계정 기능이 새로 생겼습니다.
                  </p>
                  <span className="date">2023-02-01</span>
                </a>
                <a href="#">
                  <p className="tit">로디에 처음 오셨나요?</p>
                  <span className="date">2023-02-01</span>
                </a>
                <a href="#">
                  <p className="tit">무료체험 문의 관련 공지사항입니다.</p>
                  <span className="date">2023-02-01</span>
                </a>
                <a href="#">
                  <p className="tit">
                    사진 편집기 오류 관련 에러 해결되었습니다.
                  </p>
                  <span className="date">2023-02-01</span>
                </a>
                <a href="#">
                  <p className="tit">로디에 처음 오셨나요?</p>
                  <span className="date">2023-02-01</span>
                </a>
              </div>
            </section>
            <section className="sc_cs">
              <div className="section_top">
                <h4 className="section_tit">Q&A 및 고객센터</h4>
              </div>
              <div className="banner_group">
                <a href="#" className="guide">
                  <div className="text_group">
                    <span>로디에 처음 오셨나요?</span>
                    <p>
                      RODI
                      <br />
                      사용가이드
                    </p>
                  </div>
                  <img src="images/illu_list.svg" />
                </a>
                <a href="#" className="qa">
                  <div className="text_group">
                    <span>궁금한 점이 있으셨나요?</span>
                    <p>
                      RODI
                      <br />
                      Q&A
                    </p>
                  </div>
                  <img src="images/illu_qa.svg" />
                </a>
                <a href="#" className="call">
                  <div className="text_group">
                    <span>상담이 필요하신가요?</span>
                    <p>
                      RODI
                      <br />
                      고객센터
                    </p>
                  </div>
                  <img src="images/illu_cs.svg" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
