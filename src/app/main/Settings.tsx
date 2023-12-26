import React from 'react'

export default function Settings() {
  return (
    <article className="content_group">
			<div className="sub_wrap sub_setting product_edit_wrap pb_60">
				<div className="top_header box_width">
					<div className="tit_info_group">
						<h3 className="tit">설정</h3>
						<span className="info_txt"><i></i>추천 단어를 클릭하면 상품명에 추가됩니다.</span>
					</div>
				</div>
				<div className="tab_group fullunder_tab">
					<button className="tablinks" id="defaultOpen">공통설정</button>
					<button className="tablinks" >스마트스토어</button>
					<button className="tablinks" >쿠팡</button>
					<button className="tablinks" >ESM 2.0 (지마켓/옥션)</button>
				</div>
				<section id="Common" className="tabpage box_width">
					<div className="part">
						<div className="tit">
							<p>사업자 인증</p>
						</div>
						<div className="box">
							<div className="box_section_tit">
								<p>계정 설정</p>
							</div>
							<div className="account_setting_group">
								<div>
									<span className="tit">사업자등록번호</span>
									<span className="value">123-43-4444</span>
								</div>
								<div>
									<span className="tit">계정 상태</span>
									<span className="value not">미설정</span>
									{/* <!--<span className="value">설정</span>--> */}
								</div>
							</div>
							<div className="btn_group">
								<button className="fill_black" >사업자 인증하기</button>
							</div>
						</div>
					</div>
					<div className="part">
						<div className="tit">
							<p>이미지 자동 번역</p>
						</div>
						<div className="box pd24">
							<div className="input_group">
								<div className="toggle_group">
									<label>
										<span className="tit">이미지를 한글 번역 후 가져오기 ON</span>
										<input role="switch" type="checkbox" />
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="part">
						<div className="tit">
							<p>배송 설정</p>
						</div>
						<div className="box">
							<div className="mb_30">
								<div className="box_section_tit btn_on">
									<p>출고지/반품교환지</p>
									<div className="btn_group round_small">
										<button className="line_gray_white"  ><img src="/images/icon-16-duo.svg" />주소록</button>
									</div>
								</div>
								<div className="address_list_group">
									<div className="mb_10">
										<div className="name">
											<p>해외 배대지</p>
											<span className="tag_addr">출고지</span>
										</div>
										<div className="info">
											<p>Xinen Supply Chain Warehouse A, West of 11-A, Haibu Road, Crown Street, Weihai City, Shandong Province, 264200 </p>
											<div>
												<span>(+84) 156839293999</span>
												<span>Jungran Kim</span>
											</div>
										</div>
									</div>
									<div>
										<div className="name">
											<p>우리집</p>
											<span className="tag_addr">반품/교환지</span>
										</div>
										<div className="info">
											<p>서울시 행복구 행복동 100-11 101호 (03032)</p>
											<div>
												<span>(+82) 010-1234-1234</span>
												<span>김정란</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="box_section_tit">
									<p>배송비 설정</p>
								</div>
								<div className="flex mb_16">
									<div className="input_group mr_16 ">
										<div className="selectbox_group">
											<label>배송비 종류</label>
											<select>
												<option value="">무료</option>
												<option value="">유료</option>
												<option value="">조건부 무료</option>
											</select>
										</div>
									</div>
									<div className="input_group mr_16"> 
										<div className="text_group">
											<label>기본 배송비</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="2,500" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>무료배송 조건</label>
											<p className="right_group price_monetary_upto">원 이상</p>
											<input type="text" placeholder="0" value="30,000" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>반품 배송비 (편도)</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="5,000" />
										</div>
									</div>
									<div className="input_group ">
										<div className="text_group">
											<label>교환 배송비 (왕복)</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="5,000" />
										</div>
									</div>
								</div>
								<div className="flex">
									<div className="input_group mr_16">
										<div className="text_group">
											<label>제주 추가 배송비</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="2,500" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>도서산간 추가 배송비</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="30,000" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>배송출고 소요기간</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="5,000" />
										</div>
									</div>
									<div className="input_group mr_16"> 
										<div className="selectbox_group">
											<label>묶음배송 여부</label>
											<select>
												<option value="">묶음배송 불가</option>
												<option value="">묶음배송 가능</option>
											</select>
										</div>
									</div>
									<div className="input_group">
										<div className="selectbox_group">
											<label>판매가에 배송비 합산</label>
											<select>
												<option value="">합산하기</option>
												<option value="">합산하지 않기</option>
											</select>
										</div>
										<span className="under_txt small">무료배송이 유리한 쿠팡/11번가/ESM에서만 적용됩니다.</span>
									</div>
								</div>
							</div>
							<div className="btn_group width_fixed">
								<button className="fill_black">변경사항 저장</button>
							</div>
						</div>
					</div>
					<div className="part">
						<div className="tit">
							<p>판매가 설정</p>
						</div>
						<div className="box">
							<div className="mb_20">
								<div className="box_section_tit">
									<p>환율</p>
								</div>
								<div className="flex">
									<div className="input_group mr_16 w_220px">
										<div className="selectbox_group">
											<select>
												<option value="">실시간 환율</option>
												<option value="">고정 환율</option>
											</select>
										</div>
									</div>
									<div className="input_group w_220px">
										<div className="text_group">
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="고정환율(위안)" />
										</div>
									</div>
								</div>
							</div>
							<div className="mb_30">
								<div className="box_section_tit">
									<p>마진율 기본설정</p>
								</div>
								<div className="priceformula_group">
									<div className="mb_20">
										<div className="input_group w_80px">
											<div className="text_group small">
												<label>중국 원가</label>
												<input type="text" className="al_right" placeholder="0" value="320,000" readOnly/>
											</div>
											<span className="under_txt">위안가X환율</span>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-close.svg" /></i>
										<div className="input_group w_125px">
											<div className="text_group small">
												<label>소싱 수수료</label>
												<p className="right_group percent">1.25%</p>
												<input type="text" placeholder="0" value="1.0125" />
											</div>
											<span className="under_txt">브랜드수수료+카드수수료</span>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-plus.svg" /></i>
										<div className="input_group w_85px">
											<div className="text_group small">
												<label>해외 배송비</label>
												<p className="right_group price_monetary">원</p>
												<input type="text" placeholder="0" value="5,000" />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-duo.svg" /></i>
										<div className="input_group w_80px">
											<div className="text_group small">
												<label>기본 구매가</label>
												<input type="text" className="al_right" placeholder="0" value="35,375" readOnly />
											</div>
										</div>
										<i className="priceformula_icon straight"><img src="/images/icon-straight.svg" /></i>
										<div className="input_group w_80px">
											<div className="text_group small">
												<label>기본 구매가</label>
												<input type="text" className="al_right" placeholder="0" value="35,375" readOnly />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-slash.svg" /></i>
										<div className="input_group w_125px">
											<div className="text_group small">
												<label>마진율</label>
												<p className="right_group percent">30%</p>
												<input type="text" placeholder="0" value="0.7" />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-plus.svg" /></i>
										<div className="input_group w_120px">
											<div className="text_group small">
												<label>기본마진</label>
												<p className="right_group price_monetary">원</p>
												<input type="text" placeholder="0" value="0" />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-duo.svg" /></i>
										<div className="input_group w_80px mr_6">
											<div className="text_group small">
												<label>1차 판매가</label>
												<input type="text" className="al_right" placeholder="0" value="50,535" readOnly/>
											</div>
										</div>
										<div className="input_group w_80px mr_6">
											<div className="text_group small">
												<label>마진부가세</label>
												<input type="text" className="al_right" placeholder="0" value="1,516" readOnly />
											</div>
										</div>
										<div className="input_group w_80px"> 
											<div className="text_group small">
												<label>총 마진</label>
												<input type="text" className="al_right" placeholder="0" value="15,160" readOnly />
											</div>
										</div>
									</div>
									<div>
										<div className="input_group w_80px">
											<div className="text_group small">
												<label>기본 구매가</label>
												<input type="text" className="al_right" placeholder="0" value="30,000" readOnly />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-plus.svg" /></i>
										<div className="input_group w_125px">
											<div className="text_group small">
												<label>총 마진</label>
												<input type="text" className="al_right" placeholder="0" value="30,000" readOnly />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-plus.svg" /></i>
										<div className="input_group w_85px">
											<div className="text_group small">
												<label>마진부가세</label>
												<input type="text" className="al_right" placeholder="0" value="30,000" readOnly />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-duo.svg" /></i>
										<div className="input_group w_80px">
											<div className="text_group small">
												<label>2차 판매가</label>
												<input type="text" className="al_right" placeholder="0" value="35,375" readOnly />
											</div>
										</div>
										<i className="priceformula_icon straight"><img src="/images/icon-straight.svg" /></i>
										<div className="input_group w_80px">
											<div className="text_group small">
												<label>2차 판매가</label>
												<input type="text" className="al_right" placeholder="0" value="35,375" readOnly />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-slash.svg" /></i>
										<div className="input_group w_125px">
											<div className="text_group small">
												<label>오픈마켓 수수료</label>
												<p className="right_group percent">30%</p>
												<input type="text" placeholder="0" value="0.7" readOnly />
											</div>
										</div>
										<i className="priceformula_icon"><img src="/images/icon-16-duo.svg" /></i>
										<div className="input_group w_120px">
											<div className="text_group small">
												<label>3차 판매가</label>
												<input type="text" className="al_right" placeholder="0" value="35,375" readOnly />
											</div>
										</div>
									</div>
									<div className="gray_box">
										<div className="input_group w_140px">
											<div className="text_group small">
												<label>3차 판매가</label>
												<input type="text" className="al_right" placeholder="0" value="35,375" readOnly />
											</div>
										</div>
										<i className="priceformula_icon straight"><img src="/images/icon-straight.svg" /></i>
										<div className="input_group w_140px">
											<div className="selectbox_group small">
												<label>단위올림</label>
												 <select>
													<option selected>10원</option>
													 <option>100원</option>
													 <option>100원</option>
												</select>
											</div>
										</div>
										<i className="priceformula_icon straight"><img src="/images/icon-straight.svg" /></i>
										<div className="input_group w_140px mr_6">
											<div className="text_group small">
												<label>최종 판매가</label>
												<input type="text" className="al_right" placeholder="0" value="35,375" readOnly />
											</div>
										</div>
										<div className="input_group w_140px">
											<div className="text_group small">
												<label>판매가 할인율</label>
												<p className="right_group percent">30%</p>
												<input type="text" placeholder="0" value="0.7" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="box_section_tit">
									<p>오픈마켓 수수료</p>
								</div>
								<div className="flex mb_16">
									<div className="input_group mr_16">
										<div className="text_group">
											<label>스마트스토어</label>
											<p className="right_group price_monetary">%</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>쿠팡</label>
											<p className="right_group price_monetary">%</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>ESM 2.0 (옥션/지마켓)</label>
											<p className="right_group price_monetary">%</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>11번가 글로벌</label>
											<p className="right_group price_monetary">%</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>11번가 국내</label>
											<p className="right_group price_monetary">%</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group mr_16">
										<div className="text_group">
											<label>롯데온</label>
											<p className="right_group price_monetary">%</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>인터파크</label>
											<p className="right_group price_monetary">%</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
								</div>
							</div>
							<div className="btn_group width_fixed">
								<button className="fill_black">변경사항 저장</button>
							</div>
						</div>
					</div>
					<div className="part">
						<div className="tit">
							<p>상세페이지</p>
						</div>
						<div className="box">
							<div className="detail_img_group mb_24">
								<div className="detail_top mr_16">
									<div className="box_section_tit">
										<p>상단 이미지</p>
									</div>
									<div className="file_upload_group image">
										<label htmlFor="tb-file-upload"><i></i>이미지 추가하기</label>
										<input type="file" id="tb-file-upload" />
									</div>
								</div>
								<div className="detail_bottom">
									<div className="box_section_tit">
										<p>하단 이미지</p>
									</div>
									<div className="item">
										<img src="/images/eximg_01.png" />
										<div className="btn_group round_small">
											<button className="fill_gray"><img src="/images/icon-16-close.svg" />삭제</button>
										</div>
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="input_group mr_16">
									<div className="selectbox_group">
										<label>텍스트 수집</label>
										<select>
											<option value="">수집하기</option>
											<option value="">수집하지 않기</option>
										</select>
									</div>
								</div>
								<div className="input_group mr_16">
									<div className="selectbox_group">
										<label>동영상 수집</label>
										<select>
											<option value="">수집하기</option>
											<option value="">수집하지 않기</option>
										</select>
									</div>
								</div>
								<div className="input_group mr_16">
									<div className="selectbox_group">
										<label>옵션이미지 위치</label>
										<select>
											<option value="">상단</option>
											<option value="">하단</option>
										</select>
									</div>
								</div>
								<div className="input_group mr_16">
									<div className="selectbox_group">
										<label>옵션 이미지 배열</label>
										<select>
											<option value="">1단 배열</option>
											<option value="">2단 배열</option>
										</select>
									</div>
								</div>
								<div className="input_group">
									<div className="selectbox_group">
										<label>텍스트 수집</label>
										<select>
											<option value="">사용하기</option>
											<option value="">사용하지 않기</option>
										</select>
									</div>
								</div>
							</div>
							<div className="btn_group width_fixed">
								<button className="fill_black">변경사항 저장</button>
							</div>
							
						</div>
					</div>
					<div className="part">
						<div className="tit">
							<p>직원 설정</p>
						</div>
						<div className="box">
							<div className="mb_30">
								<div className="box_section_tit">
									<p>권한</p>
								</div>
								<div className="toggle_set_area">
									<div className="input_group mb_10">
										<div className="toggle_group">
											<label>
												<span className="tit">수집한 상품 삭제 권한 ON</span>
												<input role="switch" type="checkbox" />
											</label>
										</div>
									</div>
									<div className="input_group mb_10">
										<div className="toggle_group">
											<label>
												<span className="tit">등록한 상품 삭제 권한 ON</span>
												<input role="switch" type="checkbox" />
											</label>
										</div>
									</div>
									<div className="input_group">
										<div className="toggle_group">
											<label>
												<span className="tit">다른 사람이 수집한 상품 접근 권한 ON</span>
												<input role="switch" type="checkbox" />
											</label>
										</div>
									</div>
									<div className="input_group">
										<div className="toggle_group">
											<label>
												<span className="tit">다른 사람이 등록한 상품 접근 권한 ON</span>
												<input role="switch" type="checkbox" />
											</label>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="box_section_tit">
									<p>등록된 직원 현황</p>
								</div>
								<div>
									<table className="member_list_wrap">
										<caption>직원 현황</caption>
										<thead>
											<tr>
												<th className="name pl_16">직원 이름</th>
												<th className="id pl_30">직원 아이디</th>
												<th className="today pl_30">오늘 수집 수</th>
												<th className="today_upload pl_30">오늘 업로드 수</th>
												<th className="week pl_30">이번 주 수집 수</th>
												<th className="week_upload pl_30">이번 주 업로드 수</th>
												<th className="del pl_30"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="name pl_16">홍길동</td>
												<td className="id pl_30">abc1234</td>
												<td className="today pl_30">0</td>
												<td className="today_upload pl_30">10</td>
												<td className="week pl_30">30</td>
												<td className="week_upload pl_30">60</td>
												<td className="del pl_30">
													<div className="btn_group round_small">
														<button className="fill_gray"><img src="/images/icon-16-close.svg" />직원 삭제</button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="name pl_16">김철수</td>
												<td className="id pl_30">kim4312</td>
												<td className="today pl_30">50</td>
												<td className="today_upload pl_30">50</td>
												<td className="week pl_30">320</td>
												<td className="week_upload pl_30">360</td>
												<td className="del pl_30">
													<div className="btn_group round_small">
														<button className="fill_gray"><img src="/images/icon-16-close.svg" />직원 삭제</button>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="part">
						<div className="tit">
							<p>기타</p>
						</div>
						<div className="box">
							<div className="etc_set_group">
								<div className="mb_16 flex">
									<div className="input_group">
										<div className="text_group">
											<label>제조사</label>
											<input type="text" placeholder="입력" value="" />
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>브랜드</label>
											<input type="text" placeholder="입력" value="" />
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>인당 최대 구매 가능 수량</label>
											<p className="right_group price_monetary">개</p>
											<input type="text" placeholder="0" />
										</div>
									</div>
									<div className="input_group">
										<div className="selectbox_group">
											<label>미성년자 구매</label>
											 <select>
												<option value="0">가능</option>
												<option value="1">불가능</option>
											</select>
										</div>
									</div>
								</div>
								<div className="flex">
									<div className="input_group">
										<div className="text_group">
											<label>AS 설명</label>
											<input type="text" placeholder="ex) 문자로 문의주시면 최대한 빠르게 답변 드리겠습니다." value="" />
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>AS 연락처</label>
											<input type="text" placeholder="입력" value="" />
										</div>
									</div>
									<div className="input_group">
										<div className="selectbox_group">
											<label>원산지 코드</label>
											<select required>
												<option value="" disabled selected>선택</option>
												<option value="">선택</option>
												<option value="">불가능</option>
											</select>
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>수입사</label>
											<input type="text" placeholder="0" value="수입산" />
										</div>
									</div>
								</div>
							</div>
							<div className="btn_group width_fixed">
								<button className="fill_black">변경사항 저장</button>
							</div>
						</div>
					</div>
				</section>
				<section id="Naver" className="tabpage box_width">
					<div className="part">
						<div className="tit">
							<p>스마트스토어 설정</p>
						</div>
						<div className="box">
							<div className="mb_30">
								<div className="box_section_tit">
									<p>옵션 이미지 설정</p>
								</div>
								<div className="input_group">
									<div className="selectbox_group w_368px">
										<label>옵션1 이미지 설정</label>
										<select>
											<option  selected>사용하기</option>
											<option  selected>사용하지 않기</option>
										</select>
									</div>
								</div>
							</div>
							<div>
								<div className="box_section_tit">
									<p>리뷰 포인트</p>
								</div>
								<div className="point_group">
									<div className="input_group">
										<div className="text_group">
											<label>텍스트</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>포토/동영상</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>한당사용 텍스트</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>한달사용 포토/동영상</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									<div className="input_group">
										<div className="text_group">
											<label>한달사용 포토/동영상</label>
											<p className="right_group price_monetary">원</p>
											<input type="text" placeholder="0" value="0" />
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="Coupang" className="tabpage box_width">
					<div className="part">
						<div className="tit">
							<p>쿠팡 연동</p>
						</div>
						<div className="box">
							<div className="input_group mb_16">
								<div className="selectbox_group w_368px mb_16">
									<label>검색필터 자동완성</label>
									<select >
										<option  selected>사용하기</option>
										<option  selected>사용하지 않기</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="ESM" className="tabpage box_width">
					<div className="part">
						<div className="tit">
							<p>ESM 2.0 설정</p>
						</div>
						<div className="box">
							<div className="input_group mb_16">
								<div className="selectbox_group w_368px mb_16">
									<label>사이트부담 지원할인</label>
									<select >
										<option  selected>허용하기</option>
										<option  selected>허용하지 않기</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</article>
  )
}
