import React from 'react';
import GridSalary from '~/page-components/payment/GridSalary';
import ClassesDetail from '~/page-components/payment/ClassesDetail';
import ParticipationDetail from '~/page-components/payment/ParticipationDetail';
import BonusAndRewards from '~/page-components/payment/BonusAndRewards';
import Adjustment from '~/page-components/payment/Adjustment';
import { getLayout } from '~/components/Layout';
const TeacherPayment = () => {
	return (
		<>
			{/*title trang*/}
			<GridSalary />

			<div className="payment__wrap mg-b-30 mg-t-30">
				<ClassesDetail />
				<ParticipationDetail />
				{/* <BonusAndRewards />
				<Adjustment /> */}
			</div>
		</>
	);
};

TeacherPayment.getLayout = getLayout;

export default TeacherPayment;
