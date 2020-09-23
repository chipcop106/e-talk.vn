import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CourseContext } from '~/pages/my-course/[courseid]';
import Choice from '~/components/common/TestQuestion/Choice';
import { randomId } from '~/utils';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import { colors } from '~/config';
import Link from 'next/link';
import { green } from '@material-ui/core/colors';
import { Refresh } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
	score: {
		backgroundColor: `#FFE05D`,
		backgroundImage: `linear-gradient(62deg, #FBAB7E 0%, #FFE05D 25%)`,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: 80,
		height: 80,
		borderRadius: 80 / 2,
		flexShrink: 0,
	},
	btnSuccess: {
		backgroundColor: green['500'],
		color: '#fff',
		'&:hover': {
			backgroundColor: green['700'],
		},
	},
}));
const questionDemo = [
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 1, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 2, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 1, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 2, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 1, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 2, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 1, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 2, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 1, // 1 Single, 2 Multiple
	},
	{
		id: randomId(),
		title:
			'Checkbox can be provided with a label thanks to the FormControlLabel component.',
		subTitle: `All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the  element (FormControlLabel).`,
		answers: [
			{
				label: 'Answer 1',
				value: 'opt1',
			},
			{
				label: 'Answer 2',
				value: 'opt2',
			},
			{
				label: 'Answer 3',
				value: 'opt3',
			},
			{
				label: 'Answer 4',
				value: 'opt4',
			},
		],
		questionType: 2, // 1 Single, 2 Multiple
	},
];

const RenderQuestion = ({ data, multiple }) => {
	return data.map((item, index) => (
		<Choice
			key={`${item.id}`}
			id={`${item.id}`}
			multiple={item.questionType === 1 ? false : true}
			title={`Câu ${index + 1}: ${item.title}`}
			subTitle={item.subTitle}
			answers={item.answers}
			disabled
		/>
	));
};
const ExerciseResult = () => {
	const classes = useStyles();
	const _handleSubmitExercise = (event) => {
		event.preventDefault();
		alert('Submit exercise');
	};
	return (
		<CourseContext.Consumer>
			{(context) => (
				<>
					<Box mb={2}>
						<Typography style={{ fontWeight: 600, fontSize: '1.25rem' }}>
							1. How to play e-learning web application Referring to window size
							in React Material-UI makeStyles
						</Typography>
					</Box>
					<Box
						display={`flex`}
						justifyContent={`space-between`}
						alignItems={`center`}
					>
						<Box>
							<Box display={`flex`} alignItems={`center`}>
								<Typography variant={`h6`} color={'error'}>
									Bài trắc nghiệm
								</Typography>
							</Box>

							<Box
								className={classes.meta}
								display={`flex`}
								alignItems={`center`}
								flexWrap={`wrap`}
							>
								<Box mr={2} mb={1}>
									<Typography variant={`body1`}>
										Số lượng: <strong>15 câu</strong>
									</Typography>
								</Box>
								<Box mb={1}>
									<Typography variant={`body1`}>
										Thời gian làm: <strong>30 phút</strong>
									</Typography>
								</Box>
							</Box>
							<Box>
								<Link href={`/my-course/[courseid]`} as={`/my-course/5`}>
									<Button
										variant={`contained`}
										color={`secondary`}
										className={classes.btnSuccess}
										startIcon={<Refresh />}
									>
										Làm lại bài này
									</Button>
								</Link>
							</Box>
						</Box>
						<Box display={`flex`} alignItems={`center`}>
							<Box className={classes.score} ml={2} color={`error.main`}>
								<Typography variant={`h4`} style={{ fontWeight: 'bold' }}>
									7.5
								</Typography>
								<Typography variant={`caption`}>Điểm</Typography>
							</Box>
						</Box>
					</Box>
					<Box my={2}>
						<Divider />
					</Box>

					<Box>
						<RenderQuestion data={questionDemo} />
					</Box>
				</>
			)}
		</CourseContext.Consumer>
	);
};
export default ExerciseResult;
