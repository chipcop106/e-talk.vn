import React, { useState } from 'react';
import './index.module.scss';
import { getTeacherDashboard } from '~/api/teacherAPI';
import Skeleton from 'react-loading-skeleton';
import UpComingList from '~/page-components/teacher/home/UpComingList';
import { ToastContainer } from 'react-toastify';
import LessonCard from '~/components/common/LessonCard';
import { appSettings } from '~/config';
import Select from 'react-select';
import './index.module.scss';
import { getLayout } from '~/components/Layout';
import { i18n, Link, withTranslation } from '~/i18n';
const itemShowOptions = [
	{
		value: 999999,
		label: 'All lessons',
	},
	{
		value: 5,
		label: '5 lessons',
	},
	{
		value: 10,
		label: '10 lessons',
	},
];

const SituationBlock = ({
	title,
	value,
	unit,
	imageUrl,
	link,
	linkTitle,
	isLoading,
}) => {
	return (
		<div className="card rounded-10 shadow-base bd-0">
			<div className="card-body d-flex align-items-center justify-content-between bd-0-f pd-20">
				<div className="flex-shrink-0 d-flex flex-column justify-content-between ">
					{imageUrl ? (
						<img
							src={imageUrl}
							className="wd-75 ht-50 object-fit mg-b-10"
							alt="hinhne"
						/>
					) : (
						<Skeleton circle={true} />
					)}
					<p className="tx-14 text-center mg-b-0 tx-medium">
						{!isLoading ? title : <Skeleton />}
					</p>
					<a className="tx-12" href={link ? link : ''}>
						{!isLoading ? linkTitle : <Skeleton />}
					</a>
				</div>
				<div className={`tx-center circle-value flex-shrink-0`}>
					<p className="mg-b-0 tx-20 tx-bold tx-gray-600">
						{!isLoading ? value : <Skeleton />}
					</p>
					<p className="text-center mg-b-0 tx-gray-400">
						{!isLoading ? unit : <Skeleton />}
					</p>
				</div>
			</div>
		</div>
	);
};

const NoteForStudentModal = () => {
	const [note, setNote] = React.useState('');
	return (
		<>
			<div
				className="modal effect-scale"
				tabIndex={-1}
				role="dialog"
				id="js-md-note"
			>
				<div
					className="modal-dialog modal-dialog-centered modal-lg"
					role="document"
				>
					<div className="modal-content">
						<form>
							<div className="modal-body">
								<LessonCard
									courseName="IELST Professional 8.0"
									studentName="Truong Van Lam"
									lessonDate="Monday, 30/04/2020"
									lessonStart="10:30AM"
									lessonEnd="11:00AM"
									lessonStatus="Lesson 2"
									studentNote="Good job, you have excellent coding skills !!"
									cancellable={true}
									documents={[
										{
											id: 1,
											name: 'doc 1',
											extension: 'docx',
											link: 'http://mona.media',
										},
										{
											id: 2,
											name: 'doc 2',
											extension: 'exce',
											link: 'http://mona.media',
										},
									]}
									actionDisplay={false}
								/>
								<div className="required-list mg-t-15 bd-t pd-t-15">
									<div className="required-text-box mg-t-15">
										<label className="tx-medium" htmlFor={`note-student`}>
											Note for student:
										</label>
										<div className="form-group">
											<textarea
												rows={4}
												className="form-control"
												defaultValue={note}
												onChange={setNote}
												plcaeholder="Note..."
												id={`note-student`}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-light"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Add note
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

const Home = ({ t }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [dashboardInfo, setDashboardInfo] = useState(null);
	const [selectShow, setSelectShow] = useState(itemShowOptions[0]);
	const [fromDate, setFromDate] = useState('');
	const [toDate, setToDate] = useState('');

	const _onFilterDate = (e) => {
		e.preventDefault();
		if (fromDate.value === '' || toDate.value === '') {
			alert('Vui lòng nhập đầy đủ ngày bắt đầu và ngày kết thúc');
			return;
		}
		console.log('Filtered, chua co API');
	};

	const getData = async () => {
		setIsLoading(true);
		try {
			const res = await getTeacherDashboard();
			if (res?.Code && res.Code === 1) {
				setDashboardInfo(res.Data);
				setIsLoading(false);
				return;
			} else {
				console.log(res);
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<h1 className="main-title-page">{t('title')}</h1>

			<div className="sec-container">
				<div className="gv-situation mg-b-15">
					<div className="row">
						<div className="col-12 col-md-4 mg-b-15">
							<SituationBlock
								isLoading={isLoading}
								link={dashboardInfo?.OpenSlotURL}
								linkTitle="Manage slot"
								title="Slots Opened"
								value={dashboardInfo?.OpenSlot}
								unit="slots"
								imageUrl={'/static/img/booking-slot.svg'}
							/>
						</div>
						<div className="col-12 col-md-4  mg-b-15">
							<SituationBlock
								isLoading={isLoading}
								link={dashboardInfo?.BookedSlotURl}
								linkTitle="Manage slot"
								title="Slots Booked"
								value={dashboardInfo?.BookedSlot}
								unit="slots"
								imageUrl={'/static/img/slot-booked.svg'}
							/>
						</div>
						<div className="col-12 col-md-4  mg-b-15">
							<SituationBlock
								isLoading={isLoading}
								link={dashboardInfo?.FeedbackURL}
								linkTitle="Submit Feedback"
								title="Missing Feedbacks"
								value={dashboardInfo?.Feedback}
								unit="Feedback"
								imageUrl={'/static/img/missing-feedback.svg'}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="card">
							<div className="card-body">
								<div className="align-items-center d-flex justify-content-between pd-b-15">
									<div className="d-flex align-items-center">
										<div className="">
											<h5 className="mg-b-0">Upcoming lessons</h5>
										</div>
									</div>
									<div className="wd-150">
										<Select
											options={itemShowOptions}
											// styles={appSettings.selectStyle}
											onChange={setSelectShow}
											defaultValue={selectShow}
										/>
									</div>
								</div>
								<div className="gv-notice">
									<UpComingList itemShow={selectShow} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<NoteForStudentModal />
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

Home.getLayout = getLayout;
Home.getInitialProps = async () => ({
	namespacesRequired: ['common'],
});

export default withTranslation('common')(Home);
