import React from 'react'

export default function OrderList() {
  return (
    <>
    <article className="content_group">
			<div className="sub_wrap sub_orderlist product_edit_wrap pb_60">
				<div className="top_header box_width">
					<h3 className="tit">주문관리</h3>		
				</div>
				<div className="linke_state_area box_width">
					<div>
						<div className="linke_group">
							<h4>주문관리 연동 상태</h4>
							<div className="list">
								<span>스마트스토어<i></i></span>
								<span>쿠팡<i></i></span>
								<span>ESM 2.0 (G마켓/옥션)<i></i></span>
								<span>11번가 글로벌<i></i></span>
								<span className="error">11번가 국내<i></i></span>
								<span className="error">롯데온<i></i></span>
								<span className="error">인터파크<i></i></span>
							</div>
						</div>
						<div className="unused_group">
							<h4>미사용 마켓</h4>
							<div className="list">
								<span>롯데온<i></i></span>
								<span>쿠팡<i></i></span>
							</div>
						</div>
					</div>
				</div>
				<div className="tab_group fullunder_tab">
					<button className="tablinks">결제완료</button>
					<button className="tablinks" id="defaultOpen">상품 준비중<i className="item_num">3</i></button>
					<button className="tablinks">배송중</button>
					<button className="tablinks">배송완료<i className="item_num">5</i></button>
					<button className="tablinks">취소요청</button>
					<button className="tablinks">반품요청</button>
					<button className="tablinks">교환요청</button>
				</div>
				<section id="payment" className="tabpage box_width">
					<div className="btn_group mt_20">
						<button className="fill_gray">기본 텍스트팝업 오픈</button>
					</div>
				</section>
				<section id="ready" className="tabpage box_width">
					<div className="top_sc_area">
						<div className="total_group">
							<div className="tt_sales">
								<p className="main tit">8월 매출</p>
								<div className="value_group">
									<p className="value">2,605,000원</p>
									<span className="prev_value">지난 달 1,000,000원</span>
								</div>
								<div className="hover_pop">
									<div className="box">
										<div>
											<img src="/images/naver.svg" />
											<div className="txt_group">
												<span>스마트스토어</span>
												<p>1,932,000원</p>
											</div>
										</div>
										<div>
											<img src="/images/coupang.svg" />
											<div className="txt_group">
												<span>쿠팡</span>
												<p>18,031,040원</p>
											</div>
										</div>
										<div>
											<img src="/images/_gmarket.svg" />
											<div className="txt_group">
												<span>G마켓</span>
												<p>0원</p>
											</div>
										</div>
										<div>
											<img src="/images/auction.svg" />
											<div className="txt_group">
												<span>옥션</span>
												<p>90,700원</p>
											</div>
										</div>
										<div>
											<img src="/images/11st.svg" />
											<div className="txt_group">
												<span>11번가 글로벌</span>
												<p>4,952,090원</p>
											</div>
										</div>
										<div>
											<img src="/images/11st.svg" />
											<div className="txt_group">
												<span>11번가 국내</span>
												<p>92,500원</p>
											</div>
										</div>
										<div>
											<img src="/images/INTERPARK.svg" />
											<div className="txt_group">
												<span>인터파크</span>
												<p>42,000원</p>
											</div>
										</div>
										<div>
											<img src="/images/lotteon.svg" />
											<div className="txt_group">
												<span>롯데온</span>
												<p>0원</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tt_buy">
								<p className="main tit">8월 매입</p>
								<div className="value_group">
									<p className="value">2,605,000원</p>
									<span className="prev_value">지난 달 1,000,000원</span>
								</div>
								<div className="hover_pop">
									<div>
										<span>배송대행지 비용</span>
										<p>3,453,000원</p>
									</div>
									<div>
										<span>오픈마켓 수수료</span>
										<p>144,000원</p>
									</div>
									<div>
										<span>광고비</span>
										<p>240,000원</p>
									</div>
									<div>
										<span>기타</span>
										<p>0원</p>
									</div>
								</div>
							</div>
							<div>
								<p className="blue tit">순이익</p>
								<div className="value_group">
									<p className="value">2,605,000원</p>
									<span className="prev_value">지난 달 1,000,000원</span>
								</div>
							</div>
						</div>
						<div className="btn_group small">
							<button className="fill_main"><i><img src="/images/icon-16-plus-white.svg" /></i>매입 내역 추가</button>
							<button className="fill_main" ><i><img src="/images/icon-20-download-white.svg" /></i>소명 자료 다운</button>
						</div>
					</div>
					<div className="list_area">
						<div className="fillter_group">
							<div>
								<div className="linke_group">
									<h4>기간</h4>
									<div className="tab_group round">
										<button className="active">오늘</button>
										<button>어제</button>
										<button>이번주</button>
										<button>이번달</button>
									</div>
								</div>
								<div className="unused_group">
									<h4>마켓</h4>
									<div className="tab_group round">
										<button className="active">전체</button>
										<button>스마트스토어</button>
										<button>쿠팡</button>
										<button>G마켓</button>
										<button>옥션</button>
										<button>11번가 글로벌</button>
										<button>11번가 국내</button>
										<button>인터파크</button>
										<button>롯데온</button>
									</div>
								</div>
							</div>
						</div>
						<div className="btn_group round_small">
							<div className="left">
								<button><img src="/images/icon-16-truck-black.svg" />배송중 처리</button>
								<button><img src="/images/icon-16-excel-black.svg" />주문상세 엑셀다운</button>
							</div>
							<div className="right">
								<span className="time">업데이트 시간 : 23/08/08 15:27 </span>
								<button><img src="/images/icon-16-replay-black.svg" />새로고침</button>
							</div>
						</div>
						<div className="table_list_group">
							<table>
								<caption>상품 리스트 테이블</caption>
								<thead>
									<tr>
										<th className="check"></th>
										<th className="market">마켓</th>
										<th className="num">주문번호/시간</th>
										<th className="tit">상품명</th>
										<th className="option">옵션명</th>
										<th className="amount">수량</th>
										<th className="price">가격 (원가)</th>
										<th className="margin">예상마진</th>
										<th className="orderer">주문자 정보</th>
										<th className="abroad">해외발주여부<p>(기록용)</p></th>
										<th className="abroad_num">해외구매<br />주문번호</th>
										<th className="abroad_addr">배대지접수<p>(기록용)</p></th>
										<th className="abroad_addr_num">배대지<br />주문번호</th>
										<th className="abroad_addr_price">배대지 비용</th>
										<th className="delivery">배송정보</th>
										<th className="original_link">원본 상품</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="check">
											<div className="checkbox_group only_check gray">
												<input type="checkbox" />
											</div>
										</td>
										<td className="market">
											<i className="naver"></i>
										</td>
										<td className="num">
											<div className="order_num">15000179728147</div>
											<div className="time">23/08/15 22:22</div>
										</td>
										<td className="tit">아치형 이동식 미니 우드칸막이 중간 파티션 1200</td>
										<td className="option">그린/M</td>
										<td className="amount">1개</td>
										<td className="price">3,467,000원<p>(18,000원)</p></td>
										<td className="margin blue">+123,000</td>
										<td className="orderer">
											<div className="btn_group round_small">
												<button>주문상세</button>
											</div>
										</td>
										<td className="abroad">
											<div className="checkbox_group only_check blue">
												<input type="checkbox" />
											</div>
										</td>
										<td className="abroad_num">
											<div className="input_group">
												<div className="text_group small_type2">
													<input type="text" placeholder="입력" />
												</div>
											</div>
										</td>
										<td className="abroad_addr">
											<div className="checkbox_group only_check blue">
												<input type="checkbox" />
											</div>
										</td>
										<td className="abroad_addr_num">
											<div className="input_group">
												<div className="text_group small_type2">
													<input type="text" placeholder="입력" />
												</div>
											</div>
										</td>
										<td className="abroad_addr_price">
											<div className="input_group">
												<div className="text_group small_type2">
													<input type="text" placeholder="입력" />
												</div>
											</div>
										</td>
										<td className="delivery">
											<div className="input_group mb_6">
												<div className="selectbox_group small_type2">
													<select>
														<option value="">택배사</option>
														<option value="">CJ대한통운</option>
														<option value="">우체국택배</option>
													</select>
												</div>
											</div>
											<div className="input_group">
												<div className="text_group small_type2">
													<input type="text" placeholder="운송장번호" />
												</div>
											</div>
										</td>
										<td className="original_link">
											<a href="#">원본상품</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					
				</section>
			</div>
		</article>
    </>
  )
}
