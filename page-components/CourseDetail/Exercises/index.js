import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CourseContext } from '~/pages/my-course/[courseid]'
import Choice from '~/components/common/TestQuestion/Choice'
import { randomId } from '~/utils'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles((theme) => ({}))
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
]

const RenderQuestion = ({ data, multiple }) => {
	return data.map((item, index) => (
		<Choice
			key={`${item.id}`}
			id={`${item.id}`}
			multiple={item.questionType === 1 ? false : true}
			title={`Câu ${index + 1}: ${item.title}`}
			subTitle={item.subTitle}
			answers={item.answers}
		/>
	))
}
const Excercises = () => {
	const classes = useStyles()
	const _handleSubmitExercise = (event) => {
		event.preventDefault()
		alert('Submit exercise')
	}
	return (
		<CourseContext.Consumer>
			{(context) => (
				<>
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
						>
							<Box mr={2}>
								<Typography variant={`body1`}>
									Số lượng: <strong>15 câu</strong>
								</Typography>
							</Box>
							<Box>
								<Typography variant={`body1`}>
									Thời gian làm: <strong>30 phút</strong>
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box my={2}>
						<Divider />
					</Box>

					<form>
						<Box>
							<RenderQuestion data={questionDemo} />
						</Box>
						<Box my={2}>
							<Divider />
						</Box>
						<Box display={`flex`}>
							<Box mr={2}>
								<Button
									type="submit"
									color={`primary`}
									variant="contained"
									onClick={_handleSubmitExercise}
								>
									Nộp bài tập
								</Button>
							</Box>

							<Box>
								<Button
									type="submit"
									color={`inherit`}
									variant="contained"
									onClick={_handleSubmitExercise}
									mr={2}
								>
									Hủy bỏ
								</Button>
							</Box>
						</Box>
					</form>
				</>
			)}
		</CourseContext.Consumer>
	)
}
export default Excercises
