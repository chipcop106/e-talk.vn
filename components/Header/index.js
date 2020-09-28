import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<>
			<aside className="aside aside-fixed">
				<div className="aside-header">
					<a href="/home" className="aside-logo">
						Etalk<span style={{ fontWeight: 200 }}> VN</span>
					</a>{' '}
					<a href={true} className="aside-menu-link">
						<i className="fas fa-bars"></i> <i className="fas fa-times"></i>
					</a>
				</div>
				<div className="aside-body tx-14">
					<div className="aside-loggedin">
						<div className="aside-loggedin-user tx-center">
							<div className="d-flex align-items-center justify-content-center">
								<a href="#loggedinMenu" data-toggle="collapse" className="">
									<img
										src="/static/img/avatar.jpg"
										className="rounded-circle avatar-xl object-fit"
										alt=""
									/>
								</a>
							</div>
							<a
								href="#loggedinMenu"
								className="d-flex align-items-center justify-content-center mg-b-0 mg-t-10"
								data-toggle="collapse"
							>
								<h6 className="tx-semibold tx-16 mg-b-0 tx-white">
									Huỳnh Thi Phương Loan
								</h6>
								<i className="fas fa-angle-down mg-l-10 tx-white"></i>
							</a>
							<p className="tx-white tx-12 mg-b-0 mg-t-5">Teacher</p>
						</div>
						<div className="collapse" id="loggedinMenu">
							<ul className="nav nav-aside mg-b-0 ">
								<li className="nav-label mg-t-25">Account</li>
								<li className="nav-item">
									<a href className="nav-link">
										<i className="fas fa-user-edit"></i>{' '}
										<span>Edit Profile</span>
									</a>
								</li>
								<li className="nav-item">
									<a href className="nav-link">
										<i className="fas fa-key"></i> <span>Change password</span>
									</a>
								</li>
								<li className="nav-item">
									<a href className="nav-link">
										<i className="fas fa-sign-out-alt"></i>{' '}
										<span>Sign Out</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<ul className="nav nav-aside">
						<li className="nav-label mg-t-25">Statistics</li>
						<li className="nav-item active">
							<Link href="/home">
								<a href={true} className="nav-link">
									<i className="fas fa-tachometer-alt"></i>
									<span>Dashboard</span>
								</a>
							</Link>
						</li>

						<li className="nav-label mg-t-25">Booking schedule</li>

						<li className="nav-item">
							<Link href="/schedule/manage-slot">
								<a href={true} className="nav-link">
									<i className="far fa-calendar"></i>
									<span>Booking schedule</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/schedule/booked-slot">
								<a href={true} className="nav-link">
									<i className="far fa-calendar-alt"></i>{' '}
									<span>Booked schedule</span>
								</a>
							</Link>
						</li>

						<li className="nav-label mg-t-25">Classrooms</li>
						<li className="nav-item">
							<a href="kho-sanpham.html" className="nav-link">
								<i className="fas fa-user-friends" /> <span>All classes</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="kho-danhsach.html" className="nav-link">
								<i className="fas fa-user-clock" />{' '}
								<span>Upcoming classes</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="kho-nhapkho.html" className="nav-link">
								<i className="fas fa-user-check" />{' '}
								<span>Finished classes</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="kho-nhapkho.html" className="nav-link">
								<i className="fas fa-comment-dots" />{' '}
								<span>Missing evaluation classes</span>
							</a>
						</li>

						<li className="nav-label mg-t-25">Notification</li>
						<li className="nav-item">
							<a href="sanpham-danhsach.html" className="nav-link">
								<i className="fas fa-procedures" /> <span>Holidays</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="sanpham-danhmuc.html" className="nav-link">
								<i className="fas fa-user-graduate" />{' '}
								<span>End date of student's package</span>
							</a>
						</li>

						<li className="nav-label mg-t-25">Message</li>
						<li className="nav-item">
							<a href="../../components" className="nav-link">
								<i className="fas fa-envelope-open-text"></i>
								<span>Message manager</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Header;
