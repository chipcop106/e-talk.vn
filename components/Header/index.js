import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from '~/i18n';

const TeacherMenu = ({ t }) => {
	return (
		<ul className="nav nav-aside">
			<li className="nav-label mg-t-25">{t('statistics')}</li>
			<li className="nav-item active">
				<Link href="/teacher/home" as={`/teacher/home`}>
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="tachometer-alt"
							className="fas fa-tachometer-alt"
						/>
						<span>{t('dashboard')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					href="/teacher/monthly-statistics"
					as={`/teacher/monthly-statistics`}
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="project-diagram"
							className="fas fa-project-diagram"
						/>
						<span>{t('monthly-statistics')}</span>
					</a>
				</Link>
			</li>
			{/* <li className="nav-item">
		<Link href="/teacher/salary">
			<a href={true} className="nav-link">
				<FontAwesomeIcon
					icon="money-bill-alt"
					className="fas fa-money-bill-alt"
				/>
				<span>Salary Report</span>
			</a>
		</Link>
	</li> */}

			<li className="nav-label mg-t-25">{t('label-booking-schedule')}</li>

			<li className="nav-item">
				<Link
					href="/teacher/schedule/manage-slot"
					as="/teacher/schedule/manage-slot"
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="calendar" className="far fa-calendar" />
						<span>{t('booking-schedule')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					href="/teacher/schedule/schedule-log"
					as="/teacher/schedule/schedule-log"
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="history" className="fas fa-history" />{' '}
						<span>{t('schedule-log')}</span>
					</a>
				</Link>
			</li>

			<li className="nav-label mg-t-25">{t('label-classrooms')}</li>
			<li className="nav-item">
				<Link href="/teacher/classes/all-class" as="/teacher/classes/all-class">
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="user-friends"
							className="fas fa-user-friends"
						/>{' '}
						<span>{t('all-classes')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					href="/teacher/classes/upcoming-class"
					as="/teacher/classes/upcoming-class"
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="user-clock" className="fas fa-user-clock" />{' '}
						<span>{t('upcoming-classes')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					href="/teacher/classes/missing-evaluation"
					as="/teacher/classes/missing-evaluation"
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="comment-dots"
							className="fas fa-comment-dots"
						/>{' '}
						<span>{t('wait-for-evaluate')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					href="/teacher/classes/evaluated-class"
					as="/teacher/classes/evaluated-class"
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="file-signature"
							className="fas fa-file-signature"
						/>{' '}
						<span>{t('evaluated')}</span>
					</a>
				</Link>
			</li>

			<li className="nav-label mg-t-25">{t('label-students')}</li>
			<li className="nav-item">
				<Link href="/teacher/attendance-record" as="/teacher/attendance-record">
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="user-check" className="fas fa-user-check" />{' '}
						<span>{t('attendance-record')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/teacher/feedback" as="/teacher/feedback">
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="comments" className="fas fa-comments" />{' '}
						<span>{t('feedback')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/teacher/student-package" as="/teacher/student-package">
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="user-graduate"
							className="fas fa-user-graduate"
						/>{' '}
						<span>{t('end-date-student')}</span>
					</a>
				</Link>
			</li>

			<li className="nav-label mg-t-25">{t('label-help-center')}</li>
			{/* <li className="nav-item">
		<Link href="/teacher/library">
			<a href={true} className="nav-link">
				<FontAwesomeIcon icon="book" className="fas fa-book" />
				<span>Libraries</span>
			</a>
		</Link>
	</li> */}

			<li className="nav-item">
				<Link href="/teacher/notification" as="/teacher/notification">
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="bell" className="fas fa-bell" />{' '}
						<span>{t('notification')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/teacher/support" as="/teacher/support">
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="envelope-open-text"
							className="fas fa-envelope-open-text"
						/>
						<span>{t('ticket-support')}</span>
					</a>
				</Link>
			</li>
		</ul>
	);
};

const StudentMenu = ({ t }) => {
	return (
		<ul className="nav nav-aside">
			<li className="nav-item active">
				<Link href="/student/home" as="/student/home">
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="tachometer-alt"
							className="fas fa-tachometer-alt"
						/>
						<span>{t('dashboard')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/student/package" as="/student/package">
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="cubes" className="fas fa-tachometer-alt" />
						<span>Gói đã đăng ký</span>
					</a>
				</Link>
			</li>
			<li className="nav-label mg-t-25">Lịch học</li>
			<li className="nav-item">
				<Link href="/student/booking-schedule" as="/student/booking-schedule">
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="calendar" className="far fa-calendar" />
						<span>{t('booking-schedule')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item with-sub">
				<a href={true} className="nav-link">
					<FontAwesomeIcon
						icon="calendar-check"
						className="fas fa-calendar-check"
					/>
					<span>Xem lịch đã đặt</span>
				</a>
				<ul>
					<li>
						<Link
							href="/student/booked-schedule/calendar"
							as="/student/booked-schedule/calendar"
						>
							<a href={true}>
								<span>Lịch calendar</span>
							</a>
						</Link>
					</li>
					<li>
						<Link
							href="/student/booked-schedule/table"
							as="/student/booked-schedule/table"
						>
							<a href={true}>
								<span>Lịch table</span>
							</a>
						</Link>
					</li>
				</ul>
			</li>
			<li className="nav-label mg-t-25">Lớp học</li>
			<li className="nav-item">
				<Link
					href="/student/classes/attendance-record"
					as="/student/classes/attendance-record"
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="user-check" className="fas fa-user-check" />{' '}
						<span>{t('attendance-record')}</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					href="/student/classes/evaluation"
					as="/student/classes/evaluation"
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="file-signature"
							className="fas fa-file-signature"
						/>{' '}
						<span>Nhận xét buổi học</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/student/classes/history" as="/student/classes/history">
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="history" className="fas fa-history" />{' '}
						<span>Lịch sử đã học</span>
					</a>
				</Link>
			</li>

			<li className="nav-label mg-t-25">Thông báo</li>
			<li className="nav-item">
				<Link
					href="/student/notification/discount"
					as="/student/notification/discount"
				>
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="tags" className="fas fa-tags" />{' '}
						<span>Ưu đãi học phí</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/student/notification/day-off">
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="calendar-times"
							className="fas fa-calendar-times"
						/>{' '}
						<span>Ngày nghỉ lễ</span>
					</a>
				</Link>
			</li>
			<li className="nav-label mg-t-25">Mục khác</li>

			<li className="nav-item">
				<Link href="/student/referral" as="/student/referral">
					<a href={true} className="nav-link">
						<FontAwesomeIcon icon="handshake" className="fas fa-file-alt" />{' '}
						<span>Referral / Invite</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/student/question" as="/student/question">
					<a href={true} className="nav-link">
						<FontAwesomeIcon
							icon="question-circle"
							className="fas fa-file-alt"
						/>{' '}
						<span>Câu hỏi thường gặp</span>
					</a>
				</Link>
			</li>
		</ul>
	);
};

const Header = ({ t, isStudent }) => {
	// useEffect(() => {
	// 	feather && feather.replace();
	// }, []);
	return (
		<>
			<aside className="aside aside-fixed">
				<div className="aside-header">
					<Link
						href={isStudent ? 'student/home' : '/teacher/home'}
						as={isStudent ? 'student/home' : '/teacher/home'}
					>
						<a href={true} className="aside-logo">
							<FontAwesomeIcon icon="leaf" className="mg-r-10" />
							E-talk
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
							<p className="tx-white tx-12 mg-b-0 mg-t-5">
								{isStudent ? 'Học viên' : t('role')}
							</p>
						</div>
						<div className="collapse" id="loggedinMenu">
							<ul className="nav nav-aside mg-b-0 ">
								<li className="nav-label mg-t-25">{t('label-account')}</li>
								<li className="nav-item">
									<Link
										href={isStudent ? '/student/profile' : '/teacher/profile'}
										as={isStudent ? '/student/profile' : '/teacher/profile'}
									>
										<a href className="nav-link">
											<FontAwesomeIcon
												icon="user-edit"
												className="fas fa-user-edit"
											/>{' '}
											<span>{t('edit-profile')}</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										href={
											isStudent
												? '/student/profile/password'
												: '/teacher/profile/passưord'
										}
										as={
											isStudent
												? '/student/profile/password'
												: '/teacher/profile/passưord'
										}
									>
										<a href={true} className="nav-link">
											<FontAwesomeIcon icon="key" className="fas fa-key" />{' '}
											<span>{t('change-password')}</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										href={
											isStudent
												? '/student/profile/payment'
												: '/teacher/profile/payment'
										}
										as={
											isStudent
												? '/student/profile/payment'
												: '/teacher/profile/payment'
										}
									>
										<a href={true} className="nav-link">
											<FontAwesomeIcon
												icon="credit-card"
												className="fas fa-key"
											/>{' '}
											<span>
												{isStudent ? 'Lịch sử thanh toán' : t('payment')}
											</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<a href={true} className="nav-link">
										<FontAwesomeIcon
											icon="sign-out-alt"
											className="fas fa-sign-out-alt"
										/>{' '}
										<span>{t('sign-out')}</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					{isStudent ? <StudentMenu t={t} /> : <TeacherMenu t={t} />}
				</div>
			</aside>
		</>
	);
};

Header.getInitialProps = async () => ({
	namespacesRequired: ['menu'],
});

export default withTranslation('menu')(Header);
