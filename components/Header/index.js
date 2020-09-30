import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
	useEffect(() => {
		feather && feather.replace();
	}, []);
	return (
		<>
			<aside className="aside aside-fixed">
				<div className="aside-header">
					<Link href="/home">
						<a href={true} className="aside-logo">
							Etalk<span style={{ fontWeight: 200 }}> VN</span>
						</a>
					</Link>{' '}
					<a href={true} className="aside-menu-link">
						<FontAwesomeIcon icon="bars" className="fas fa-bars" />{' '}
						<FontAwesomeIcon icon="times" className="fas fa-times" />
					</a>
				</div>
				<div className="aside-body tx-14">
					<div className="aside-loggedin">
						<div className="aside-loggedin-user tx-center">
							<div className="d-flex align-items-center justify-content-center">
								<a href={`#loggedinMenu`} data-toggle="collapse" className="">
									<img
										src="/static/img/avatar.jpg"
										className="rounded-circle avatar-xl object-fit"
										alt=""
									/>
								</a>
							</div>
							<a
								href={`#loggedinMenu`}
								className="d-flex align-items-center justify-content-center mg-b-0 mg-t-10"
								data-toggle="collapse"
							>
								<h6 className="tx-semibold tx-16 mg-b-0 tx-white">
									Huỳnh Thi Phương Loan
								</h6>
								<FontAwesomeIcon
									icon="angle-down"
									className="fas fa-angle-down mg-l-10 tx-white"
								/>
							</a>
							<p className="tx-white tx-12 mg-b-0 mg-t-5">Teacher</p>
						</div>
						<div className="collapse" id="loggedinMenu">
							<ul className="nav nav-aside mg-b-0 ">
								<li className="nav-label mg-t-25">Account</li>
								<li className="nav-item">
									<Link href="/profile">
										<a href className="nav-link">
											<FontAwesomeIcon
												icon="user-edit"
												className="fas fa-user-edit"
											/>{' '}
											<span>Edit Profile</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/profile/password">
										<a href className="nav-link">
											<FontAwesomeIcon icon="key" className="fas fa-key" />{' '}
											<span>Change password</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/profile/payment">
										<a href className="nav-link">
											<FontAwesomeIcon
												icon="credit-card"
												className="fas fa-key"
											/>{' '}
											<span>Payment</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<a href className="nav-link">
										<FontAwesomeIcon
											icon="sign-out-alt"
											className="fas fa-sign-out-alt"
										/>{' '}
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
									<FontAwesomeIcon
										icon="tachometer-alt"
										className="fas fa-tachometer-alt"
									/>
									<span>Dashboard</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/monthly-statistics">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="project-diagram"
										className="fas fa-project-diagram"
									/>
									<span>Monthly Statistics</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/salary">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="money-bill-alt"
										className="fas fa-money-bill-alt"
									/>
									<span>Salary Report</span>
								</a>
							</Link>
						</li>

						<li className="nav-label mg-t-25">Booking schedule</li>

						<li className="nav-item">
							<Link href="/schedule/manage-slot">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="calendar"
										className="far fa-calendar"
									/>
									<span>Booking schedule</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/schedule/schedule-log">
								<a href={true} className="nav-link">
									<FontAwesomeIcon icon="history" className="fas fa-history" />{' '}
									<span>Schedule log</span>
								</a>
							</Link>
						</li>

						<li className="nav-label mg-t-25">Classrooms</li>
						<li className="nav-item">
							<Link href="/classes/all-class">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="user-friends"
										className="fas fa-user-friends"
									/>{' '}
									<span>All classes</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/classes/upcoming-class">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="user-clock"
										className="fas fa-user-clock"
									/>{' '}
									<span>Upcoming classes</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/classes/missing-evaluation">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="comment-dots"
										className="fas fa-comment-dots"
									/>{' '}
									<span>Wait for evaluate</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/classes/evaluated-class">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="file-signature"
										className="fas fa-file-signature"
									/>{' '}
									<span>Evaluated</span>
								</a>
							</Link>
						</li>

						<li className="nav-label mg-t-25">Students</li>
						<li className="nav-item">
							<Link href="/feedback">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="comments"
										className="fas fa-comments"
									/>{' '}
									<span>Feedback</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/student-package">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="user-graduate"
										className="fas fa-user-graduate"
									/>{' '}
									<span>End date of student's package</span>
								</a>
							</Link>
						</li>

						<li className="nav-label mg-t-25">Help center</li>
						<li className="nav-item">
							<Link href="/library">
								<a href={true} className="nav-link">
									<FontAwesomeIcon icon="book" className="fas fa-book" />
									<span>Libraries</span>
								</a>
							</Link>
						</li>

						<li className="nav-item">
							<Link href="/notification">
								<a href={true} className="nav-link">
									<FontAwesomeIcon icon="bell" className="fas fa-bell" />{' '}
									<span>Notification</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/support">
								<a href={true} className="nav-link">
									<FontAwesomeIcon
										icon="envelope-open-text"
										className="fas fa-envelope-open-text"
									/>
									<span>Ticket support</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Header;
