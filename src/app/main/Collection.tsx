import React from 'react'

export default function Collection() {
  return (
    <div className="sub_wrap sub_collection box_width pb_60">
				<div className="top_header">
					<h3 className="tit">수집상품 <span className="total">총 24건</span></h3>
				</div>
				<section className="sc_list">
					<div className="list_top">
						<div className="search_group">
							<div className="search_box">
								<input type="text" placeholder="상품명 검색" />
								<button className="btn_search" type="submit">검색</button>
							</div>
						</div>
						<div className="btn_group">
							<button className="fill_main">
								<i><img src="/images/icon-20-link.svg" /></i>URL 수집
							</button>
							<button className="fill_main">
								<i><img src="/images/icon-20-excel.svg" /></i>엑셀 수집
							</button>
							<button className="line_black">
								<i><img src="/images/icon-20-download.svg" /></i>엑셀 샘플 다운로드
							</button>
						</div>
					</div>
					<div className="list_header_area">
						<div className="tab_group round">
							<button className="active">모두보기</button>
							<button>내가 수집한 상품</button>
							<button>직원1</button>
							<button>직원2</button>
						</div>
						<div className="list_selectgroup">
							<div className="check_total">
								<div className="checkbox_group">
								  <input type="checkbox" id="all" />
								  <label htmlFor="all"></label>
								</div>
								<span className="value">16개 선택</span>
							</div>
							<div className="btn_group small">
								<button className="fill_white"><i><img src="/images/icon-20-delete.svg" /></i>삭제</button>
								<button className="fill_black"><i><img src="/images/icon-20-upload-cloud.svg" /></i>업로드</button>
							</div>
						</div>
					</div>
					<div className="product_list">
						<ul className="list_area">
							<li>
								<a href="#">
									<div className="thumbnail_group">
										<img src="/images/eximg_01.png" className="img" />
										<div className="state_tag">
											{/* <!--<div className="upload"><img src="/images/icon-20-roundcheckgreen.svg" />업로드준비</div>-->
											<!--<div className="error"><img src="/images/icon-12-information.svg" />에러 수정 필요</div>--> */}
											<div className="ing"><img src="/images/icon-12-emergency.svg" />편집 대기 중</div>
										</div>
									</div>
									<div className="info_group">
										<span className="date">2023.08.01~02</span>
										<p className="name">탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A</p>
										<em className="category">스포츠/레저 {`>`} 수영 {`>`} 수영용품 {`>`} 튜브</em>
									</div>
									<div className="checkbox_group only_check">
										<input type="checkbox" />
									</div>
								</a>
							</li>
							<li>
								<a href="#">
									<div className="thumbnail_group">
                  <img src="/images/eximg_01.png" className="img" />
										<div className="state_tag">
											{/* <!--<div className="upload"><img src="/images/icon-20-roundcheckgreen.svg" />업로드준비</div>-->
											<!--<div className="error"><img src="/images/icon-12-information.svg" />에러 수정 필요</div>--> */}
											<div className="ing"><img src="/images/icon-12-emergency.svg" />편집 대기 중</div>
										</div>
									</div>
									<div className="info_group">
										<span className="date">2023.08.01~02</span>
										<p className="name">탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A</p>
										<em className="category">스포츠/레저 {`>`} 수영 {`>`} 수영용품 {`>`} 튜브</em>
									</div>
									<div className="checkbox_group only_check">
										<input type="checkbox" />
									</div>
								</a>
							</li>
							<li>
								<a href="#">
									<div className="thumbnail_group">
										<img src="/images/eximg_01.png" className="img" />
										<div className="state_tag">
											{/* <!--<div className="upload"><img src="/images/icon-20-roundcheckgreen.svg" />업로드준비</div>--> */}
											<div className="error"><img src="/images/icon-12-information.svg" />에러 수정 필요</div>
											{/* <!--<div className="ing"><img src="/images/icon-12-emergency.svg" />편집 대기 중</div>--> */}
										</div>
									</div>
									<div className="info_group">
										<span className="date">2023.08.01~02</span>
										<p className="name">탱크 튜브 물총 어린이 성인 장난감 성인 소년 부동 패들 서핑 마운트-A</p>
										<em className="category">스포츠/레저 {`>`} 수영 {`>`} 수영용품 {`>`} 튜브</em>
									</div>
									<div className="checkbox_group only_check">
										<input type="checkbox" />
									</div>
								</a>
							</li>
						</ul>
						<div className="pagination clear">
							<a href="#" className="prev">prev</a>
							<a href="#">1</a>
							<a href="#" className="active">2</a>
							<a href="#">3</a>
							<a href="#">4</a>
							<a href="#">5</a>
							<a href="#" className="next">next</a>
						</div>
					</div>
				</section>
			</div>
  )
}
