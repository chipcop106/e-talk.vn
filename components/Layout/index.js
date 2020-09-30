import React, { useRef, useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Layout = ({ children }) => {
	useEffect(() => {
		feather && feather.replace();
	}, []);
	return (
		<>
			<Header />
			<div className="content ht-100vh pd-0-f">
				<div className="content-header">
					<div className="navbar-left"></div>
					<div className="navbar-right">
						<div className="dropdown dropdown-notification">
							<a
								href
								className="dropdown-link new-indicator"
								data-toggle="dropdown"
							>
								<i data-feather="bell" /> <span>2</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<div className="dropdown-header">Thông báo</div>
								<a href className="dropdown-item">
									<div className="media">
										<div className="avatar avatar-sm avatar-online">
											<img
												src="https://via.placeholder.com/350"
												className="rounded-circle"
												alt=""
											/>
										</div>
										<div className="media-body mg-l-15">
											<p>
												Nguyễn Hoàng đã nhập 30{' '}
												<strong>Máy khoan Muraz siêu việt GS-2000</strong>vào
												Kho Hà Nội
											</p>
											<span>Mar 15 12:32pm</span>
										</div>
									</div>
								</a>
								<a href className="dropdown-item">
									<div className="media">
										<div className="avatar avatar-sm avatar-online">
											<img
												src="https://via.placeholder.com/500"
												className="rounded-circle"
												alt=""
											/>
										</div>
										<div className="media-body mg-l-15">
											<p>
												Nguyễn Hoàng đã nhập{' '}
												<strong>30 Máy khoan Muraz siêu việt GS-2000</strong>{' '}
												vào <strong>Kho Hà Nội</strong>
											</p>
											<span>Mar 15 12:32pm</span>
										</div>
									</div>
								</a>
								<a href className="dropdown-item">
									<div className="media">
										<div className="avatar avatar-sm avatar-online">
											<img
												src="https://via.placeholder.com/600"
												className="rounded-circle"
												alt=""
											/>
										</div>
										<div className="media-body mg-l-15">
											<p>
												Trương Thức đã xuất kho 30 sản phẩm{' '}
												<strong>Máy khoan Muraz siêu việt GS-2000</strong> từ
												kho HCM
											</p>
											<span>Mar 13 02:56am</span>
										</div>
									</div>
								</a>
								<a href className="dropdown-item">
									<div className="media">
										<div className="avatar avatar-sm avatar-online">
											<img
												src="https://via.placeholder.com/500"
												className="rounded-circle"
												alt=""
											/>
										</div>
										<div className="media-body mg-l-15">
											<p>
												Nguyễn Thảo Ly vừa xuất hoá đơn bán lẻ{' '}
												<strong>#HD332212</strong> số tiền 3.000.000 tại kho HCM
											</p>
											<span>Mar 12 10:40pm</span>
										</div>
									</div>
								</a>
								<div className="dropdown-footer">
									<a href>Xem tất cả thông báo</a>
								</div>
							</div>
						</div>
						<div className="dropdown dropdown-profile">
							<a
								href
								className="dropdown-link d-flex align-items-center tx-black"
								data-toggle="dropdown"
								data-display="static"
							>
								<div className="avatar avatar-sm mg-r-5">
									<img
										src="/static/img/avatar.jpg"
										className="rounded-circle"
										alt=""
									/>
								</div>
								<div className="d-flex align-items-center">
									<span className="nam">Huỳnh Thị Phương Loan</span>{' '}
									<FontAwesomeIcon
										icon="angle-down"
										className="fa fa-angle-down mg-l-5"
									/>
								</div>
							</a>
							<div className="dropdown-menu dropdown-menu-right tx-13">
								<div className="avatar avatar-lg mg-b-15">
									<img
										src="/static/img/avatar.jpg"
										className="rounded-circle"
										alt=""
									/>
								</div>
								<h6 className="tx-semibold mg-b-5">Mona Media</h6>
								<p className="mg-b-25 tx-12 tx-color-03">Administrator</p>
								<Link href="/profile">
									<a href={true} className="dropdown-item">
										<i data-feather="user" /> View Profile
									</a>
								</Link>
								<div className="dropdown-divider" />
								<a href={true} className="dropdown-item">
									<i data-feather="log-out" />
									Sign Out
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="content-body" id="body-content">
					{children}
				</div>
			</div>

			<Footer />
		</>
	);
};

const NoSSRLayout = dynamic(() => Promise.resolve(Layout), { ssr: false });

export const getLayout = (page) => <Layout>{page}</Layout>;

export default Layout;
