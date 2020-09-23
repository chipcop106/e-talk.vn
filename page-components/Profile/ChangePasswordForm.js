import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Save } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(16),
		height: theme.spacing(16),
	},
	value: {
		color: '#b4b4b4',
	},
	input: {
		display: 'none',
	},
	textField: {
		marginTop: 0,
	},
	tab: {
		minHeight: theme.spacing(8),
		'& .MuiTab-wrapper': {
			flexDirection: 'row',
			'& svg': {
				marginRight: '1rem',
				marginBottom: 0,
			},
		},
	},
}))

const ChangePasswordForm = ({ formData }) => {
	const classes = useStyles()
	const [state, setState] = useState(formData)
	return (
		<form>
			<Grid container spacing={2} style={{ maxWidth: 350, margin: '0 auto' }}>
				<Grid item xs={12}>
					<TextField
						label="Mật khẩu hiện tại"
						defaultValue=""
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
						inputProps={{
							type: 'password',
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Mật khẩu mới"
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
						inputProps={{
							type: 'password',
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Nhập lại mật khẩu mới"
						defaultValue=""
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
						inputProps={{
							type: 'password',
						}}
					/>
				</Grid>
			</Grid>
			<Box align={`center`} mt={2}>
				<Button variant={`contained`} startIcon={<Save />} color={`primary`}>
					Cập nhật mật khẩu
				</Button>
			</Box>
		</form>
	)
}

export default ChangePasswordForm
