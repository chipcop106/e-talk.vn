import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: '1rem 0',
	},
	button: {
		margin: theme.spacing(1, 1, 0, 0),
	},
	title: {
		fontWeight: '600',
		fontSize: '1rem',
	},
	subTitle: {
		color: '#707070',
	},
	container: {
		borderBottom: `1px solid #e1e1e1`,
		'&:last-child': {
			borderBottom: 0,
		},
	},
}))

const RenderAnswer = ({ answers, multiple, disabled = false }) => {
	const [checkData, setCheckData] = useState([])
	const _handleCheckboxChange = (event) => {
		const indexed = checkData.findIndex(
			(item) => item.value === event.target.value
		)
		const newState = [...checkData].map((item, index) => {
			return index === indexed
				? {
						...item,
						isChecked: !!!item.isChecked,
				  }
				: item
		})
		setCheckData(newState)
	}

	useEffect(() => {
		if (multiple !== true) return
		setCheckData(
			[...answers].map((answer) => ({
				...answer,
				isChecked: false,
			}))
		)
	}, [])

	return (
		<>
			{multiple &&
				[...checkData].map((answer, index) => (
					<FormControlLabel
						key={`${index}`}
						value={answer?.value}
						control={
							<Checkbox
								checked={answer.isChecked}
								onChange={_handleCheckboxChange}
								name={`checkBoxGroup`}
								color="primary"
								disabled={disabled}
							/>
						}
						label={answer?.label}
					/>
				))}
			{!multiple &&
				[...answers].map((answer, index) => (
					<FormControlLabel
						key={`${index}`}
						value={answer?.value}
						control={<Radio color="primary" disabled={disabled} />}
						label={answer?.label}
					/>
				))}
		</>
	)
}

const Choice = (props) => {
	const classes = useStyles()
	const {
		multiple = false,
		title = '',
		subTitle = '',
		answers = [],
		helperText = '',
		disabled = false,
	} = props
	const [value, setValue] = useState('')
	const _handleRadioChange = (event) => {
		setValue(event.target.value)
	}

	return (
		<Box mb={2} className={classes.container}>
			<Box className={classes.header}>
				<Box className={classes.title}>{title}</Box>
				<Box className={classes.subTitle}>{subTitle}</Box>
			</Box>
			<Box className={classes.body}>
				<FormControl component="fieldset" className={classes.formControl}>
					{!!!multiple ? (
						<RadioGroup
							aria-label="quiz"
							name="quiz"
							value={value}
							onChange={_handleRadioChange}
						>
							<RenderAnswer
								disabled={disabled}
								answers={answers}
								multiple={multiple}
							/>
						</RadioGroup>
					) : (
						<RenderAnswer
							disabled={disabled}
							answers={answers}
							multiple={multiple}
						/>
					)}
					<FormHelperText>{helperText}</FormHelperText>
				</FormControl>
			</Box>
		</Box>
	)
}

export default Choice
