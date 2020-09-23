import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Save } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const ChangeInformationForm = ({ formData }) => {
	const classes = useStyles();
	const [state, setState] = useState(formData);
	return (
		<form>
			<Box align={`center`} mb={4}>
				<input
					accept="image/*"
					className={classes.input}
					id="contained-button-file"
					type="file"
				/>
				<label htmlFor="contained-button-file">
					<IconButton
						disableFocusRipple
						disableRipple
						style={{ backgroundColor: 'transparent', padding: 0 }}
					>
						<Avatar
							src="/static/img/avatar.jpg"
							className={classes.avatar}
							variant={`rounded`}
						/>
					</IconButton>
				</label>
			</Box>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						label="Họ và tên"
						defaultValue="Huỳnh Thị Phương Anh"
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						label="Chức vụ"
						defaultValue="Nhân viên kinh doanh"
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						label="Bộ phận"
						defaultValue="Kinh doanh"
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						label="Chi nhánh"
						defaultValue="231 Nguyễn Văn Cừ"
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						label="Số điện thoại"
						defaultValue="0123456789"
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						label="Email"
						defaultValue="vietdat106@gmail.com"
						className={classes.textField}
						fullWidth
						margin="normal"
						variant="outlined"
						size="small"
					/>
				</Grid>
			</Grid>
			<Box align={`center`} mt={4}>
				<Button variant={`contained`} startIcon={<Save />} color={`primary`}>
					Cập nhật thông tin
				</Button>
			</Box>
		</form>
	);
};

export default ChangeInformationForm;
