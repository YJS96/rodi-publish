import React from 'react'

export default function Notice() {
  return (
    <article className="content_group">
			<div className="sub_wrap sub_notice box_width_1200 pb_60">
				<div className="top_header">
					<h3 className="tit">RODI 공지사항</h3>
				</div>
				<section className="sc_list">
					<div className="notice_list_area">
						<ul>
							<li className="thead">
								<p className="no">no</p>
								<p className="tit">제목</p>
								<p className="writer">작성자</p>
								<p className="date">게시일</p>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">010</p>
									<p className="tit">테스트 공지사항입니다.</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">009</p>
									<p className="tit">무료체험 관련 공지사항입니다.</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">008</p>
									<p className="tit">사진 편집기 오류 관련 에러 해결되었습니다.</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">007</p>
									<p className="tit">공지사항 타이틀은 말줄임표 없이 전체 노출을 하도록 제작을 진행하였습니다. 타이틀의 경우 특성상 문장의 길이가 대부분 2줄 이상으로는 안떨어지도록 작성하기 때문입니다.</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">006</p>
									<p className="tit">사진 편집기 오류 관련 에러 해결되었습니다.</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">005</p>
									<p className="tit">사진 편집기 오류 관련 에러 해결되었습니다.</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">004</p>
									<p className="tit">무료체험 관련 공지사항입니다.</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">003</p>
									<p className="tit">로디에 처음 오셨나요?</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">002</p>
									<p className="tit">로디에도 직원 계정 기능이 새로 생겼습니다!</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
							<li className="item">
								<a href="#">
									<p className="no">001</p>
									<p className="tit">사진 편집기 오류 관련 에러 해결되었습니다.</p>
									<p className="writer">관리자</p>
									<p className="date">2022-09-30</p>
								</a>
							</li>
						</ul>
					</div>
					<div className="pagination clear">
						<a href="#" className="prev">prev</a>
						<a href="#">1</a>
						<a href="#" className="active">2</a>
						<a href="#">3</a>
						<a href="#">4</a>
						<a href="#">5</a>
						<a href="#" className="next">next</a>
					</div>
				</section>
				
			</div>
		</article>
  )
}
