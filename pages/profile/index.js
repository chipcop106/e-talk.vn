import React, { useReducer, useState } from 'react'
import { getLayout } from '~/components/Layout'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import {
	Business,
	Email,
	PermContactCalendar,
	Phone,
	Save,
	VpnKey,
} from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { a11yProps } from '~/page-components/CourseDetail/WhiteTabs'
import ChangeInformationForm from '~/page-components/Profile/ChangeInformationForm'
import ChangePasswordForm from '~/page-components/Profile/ChangePasswordForm'

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

const initialState = {
	isLoading: true,
	userData: null,
	activeTab: 0,
}

const reducer = (prevState, { type, payload }) => {
	switch (type) {
		case 'ACTIVE_TAB':
			return {
				...prevState,
				activeTab: payload,
			}
		default:
			return prevState
	}
}

const TabPanel = (props) => {
	const { children, value, index, ...other } = props
	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box style={{ overflow: 'auto' }} p={2} flexGrow={1}>
					<Paper elevation={0}>
						<Box p={2}>{children}</Box>
					</Paper>
				</Box>
			)}
		</Box>
	)
}

const Profile = () => {
	const classes = useStyles()
	const [state, dispatch] = useReducer(reducer, initialState)
	const setActiveTab = (event, value) => {
		dispatch({ type: 'ACTIVE_TAB', payload: value })
	}
	return (
		<Container maxWidth={`lg`}>
			<h1 className={`title-page`}>Profile</h1>
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={4} className={classes.sidebar}>
						<Paper>
							<Box p={4}>
								<Box mb={4} align={`center`}>
									<Box mb={2}>
										<Avatar
											src={'/static/img/avatar.jpg'}
											variant={`rounded`}
											className={classes.avatar}
										/>
									</Box>

									<Typography variant={`h6`} component={`div`}>
										Huỳnh thị Phương Anh
									</Typography>
									<Typography variant={`body2`}>
										Nhân viên kinh doanh
									</Typography>
								</Box>
								<Box>
									<Box
										display={`flex`}
										alignItems={`center`}
										justifyContent={`space-between`}
										mb={2}
									>
										<Box display={`flex`}>
											<Phone style={{ marginRight: '0.5rem' }} />
											<Typography className={classes.label} variant={`body1`}>
												Điện thoại
											</Typography>
										</Box>

										<Typography className={classes.value} variant={`body1`}>
											0123456789
										</Typography>
									</Box>
									<Box
										display={`flex`}
										alignItems={`center`}
										justifyContent={`space-between`}
										mb={2}
									>
										<Box display={`flex`}>
											<Email style={{ marginRight: '0.5rem' }} />
											<Typography className={classes.label} variant={`body1`}>
												Email
											</Typography>
										</Box>

										<Typography className={classes.value} variant={`body1`}>
											vietdat106@gmail.com
										</Typography>
									</Box>
									<Box
										display={`flex`}
										alignItems={`center`}
										justifyContent={`space-between`}
									>
										<Box display={`flex`}>
											<Business style={{ marginRight: '0.5rem' }} />
											<Typography className={classes.label} variant={`body1`}>
												Chi nhánh
											</Typography>
										</Box>

										<Typography className={classes.value} variant={`body1`}>
											Nguyễn Văn Cừ
										</Typography>
									</Box>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={12} md={8} flexGrow={1}>
						<Paper>
							<Box>
								<Paper
									square
									elevation={0}
									style={{ borderBottom: '1px solid #e1e1e1' }}
								>
									<Tabs
										value={state.activeTab}
										indicatorColor="primary"
										textColor="primary"
										onChange={setActiveTab}
										aria-label="tab"
									>
										<Tab
											label="Thông tin tài khoản"
											icon={<PermContactCalendar />}
											className={classes.tab}
											{...a11yProps(0)}
										/>
										<Tab
											label="Thay đổi mật khẩu"
											icon={<VpnKey />}
											className={classes.tab}
											{...a11yProps(1)}
										/>
									</Tabs>
								</Paper>
								<TabPanel value={state.activeTab} index={0}>
									<ChangeInformationForm />
								</TabPanel>
								<TabPanel value={state.activeTab} index={1}>
									<ChangePasswordForm />
								</TabPanel>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}
Profile.getLayout = getLayout
export default Profile
