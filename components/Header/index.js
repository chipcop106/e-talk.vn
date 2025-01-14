import React, { useEffect, useContext, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i18n, withTranslation } from '~/i18n';
import { I18nContext } from 'next-i18next';
import Select, { components } from 'react-select';
import { appSettings } from '~/config';

const LangOptions = [
	{
		label: 'Vietnamese',
		value: 'vi',
		flag: 'vn',
	},
	{
		label: 'English',
		value: 'en',
		flag: 'us',
	},
];

const FlatOption = (props) => {
	const { data } = props;
	return (
		<components.Option {...props}>
			<div className="d-flex align-items-center">
				<span className={`flag-icon flag-icon-${data.flag}`}></span>
				<span className="mg-l-10">{data.label}</span>
			</div>
		</components.Option>
	);
};

const Header = ({ t, isStudent }) => {
	const { i18n } = useContext(I18nContext);
	const [lang, setLang] = useState(LangOptions[0]);

	const _handleChangeSelect = (selected) => {
		setLang(selected);
		i18n.changeLanguage(selected.value === 'en' ? 'en' : 'vi');
		window.localStorage.setItem('language', JSON.stringify(selected.value));
	};

	const setSelectLanguage = (key) => {
		setLang(LangOptions.find((item) => item.value === key));
	};

	const checkDefaultLanguage = () => {
		if (typeof window === 'undefined') return;
		try {
			const language = window.localStorage.getItem('language');
			console.log({ language });
			language !== null && setSelectLanguage(JSON.parse(language));
			language === null &&
				window.localStorage.setItem(
					'language',
					JSON.stringify(i18n?.language ?? 'en'),
				);
		} catch (error) {}
	};
	useEffect(() => {
		isStudent ? (appSettings.UID = 1071) : (appSettings.UID = 20);
	}, [isStudent]);
	useEffect(() => {
		checkDefaultLanguage();
	}, []);
	return (
		<>
			<div className="content-header">
				<div className="navbar-left"></div>
				<div className="navbar-right">
					<Select
						isSearchable={false}
						options={LangOptions}
						formatOptionLabel={(context) => (
							<div className="d-flex align-items-center">
								<span className={`flag-icon flag-icon-${context.flag}`}></span>
								<span className="mg-l-10">{context.label}</span>
							</div>
						)}
						components={{
							Option: FlatOption,
							IndicatorSeparator: () => null,
						}}
						value={lang}
						onChange={_handleChangeSelect}
						className="wd-150 mg-r-15"
						styles={{
							control: (oldStyle, state) => {
								return {
									...oldStyle,
									border: 0,
									outline: 0,
									boxShadow: 'none',
									borderRadius: 0,
									backgroundColor: '#efefef',
								};
							},
						}}
					/>
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
											src="/static/img/avatar.jpg"
											className="rounded-circle"
											alt=""
										/>
									</div>
									<div className="media-body mg-l-15">
										<p>
											Nguyễn Hoàng đã nhập 30{' '}
											<strong>Máy khoan Muraz siêu việt GS-2000</strong>vào Kho
											Hà Nội
										</p>
										<span>Mar 15 12:32pm</span>
									</div>
								</div>
							</a>
							<a href className="dropdown-item">
								<div className="media">
									<div className="avatar avatar-sm avatar-online">
										<img
											src="/static/img/avatar.jpg"
											className="rounded-circle"
											alt=""
										/>
									</div>
									<div className="media-body mg-l-15">
										<p>
											Nguyễn Hoàng đã nhập{' '}
											<strong>30 Máy khoan Muraz siêu việt GS-2000</strong> vào{' '}
											<strong>Kho Hà Nội</strong>
										</p>
										<span>Mar 15 12:32pm</span>
									</div>
								</div>
							</a>
							<a href className="dropdown-item">
								<div className="media">
									<div className="avatar avatar-sm avatar-online">
										<img
											src="/static/img/avatar.jpg"
											className="rounded-circle"
											alt=""
										/>
									</div>
									<div className="media-body mg-l-15">
										<p>
											Trương Thức đã xuất kho 30 sản phẩm{' '}
											<strong>Máy khoan Muraz siêu việt GS-2000</strong> từ kho
											HCM
										</p>
										<span>Mar 13 02:56am</span>
									</div>
								</div>
							</a>
							<a href className="dropdown-item">
								<div className="media">
									<div className="avatar avatar-sm avatar-online">
										<img
											src="/static/img/avatar.jpg"
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
								<span className="name">Huỳnh Thị Phương Loan</span>{' '}
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
							<Link href={isStudent ? '/student/profile' : '/teacher/profile'}>
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
		</>
	);
};

Header.getInitialProps = async () => ({
	namespacesRequired: ['menu'],
});

export default withTranslation('menu')(Header);
