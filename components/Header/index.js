import React, { useState } from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	Avatar,
	Typography,
	Menu,
	Fade,
} from '@material-ui/core';
import styles from './header.module.scss';
import {
	Notifications,
	ArrowDropDown,
	Menu as MenuIcon,
	AccountCircle,
	ExitToApp,
} from '@material-ui/icons';
//import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import { colors } from '~/config';
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';
import { useRouter } from 'next/router';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	activeMenu: {
		'& > a ': {
			position: 'relative',
		},
		'&:after': {
			content: '',
			position: 'absolute',
			width: '100%',
			height: 1,
			backgroundColor: colors.secondary,
			bottom: '-10px',
			left: 0,
		},
	},
	dropdown: {
		boxShadow: '0px 4px 10px 0px rgba(0,0,0,.15)',
		zIndex: 9999,
	},
	headerContainer: {
		backgroundColor: '#fff',
		boxShadow: '0px 4px 8px 0px rgba(0,0,0,.15)',
		zIndex: 9,
	},
	divider: {
		marginRight: '1.25rem !important',
	},
}));

const DropDownMenu = (props) => {
	return (
		<Menu
			elevation={3}
			getContentAnchorEl={null}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			{...props}
		/>
	);
};

const Header = () => {
	const [notiEl, setNotiEl] = useState(null);
	const [userMenuEl, setUserMenuEl] = useState(null);
	const [menuMobileShow, setMenuMobileShow] = useState(false);
	const router = useRouter();
	console.log(router);
	const showNotification = (event) => {
		setNotiEl(event.currentTarget);
	};
	const closeNotification = (event) => {
		setNotiEl(null);
	};
	const showUserMenu = (event) => {
		setUserMenuEl(event.currentTarget);
	};
	const closeUserMenu = (event) => {
		setUserMenuEl(null);
	};
	const toggleMenuMobile = () => {
		setMenuMobileShow(!menuMobileShow);
	};

	const classes = useStyles();
	return (
		<Box
			className={classes.headerContainer}
			py={2}
			display={`flex`}
			alignItems={`center`}
			height={80}
			flexShrink={0}
		>
			<Container maxWidth="xl">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Box display="flex" alignItems="center">
						<Hidden mdUp>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={toggleMenuMobile}
							>
								<MenuIcon />
							</IconButton>
						</Hidden>

						<Link href="/">
							<Box
								component="a"
								display="inline-flex"
								alignItems="center"
								className={styles.logoWrap}
							>
								<img
									src="/static/img/logo.png"
									className={`logo ${styles.logo}`}
									alt="logo"
								/>
							</Box>
						</Link>
						<Hidden mdDown>
							<Divider
								orientation="vertical"
								className={styles.divider + ' ' + classes.divider}
							/>
						</Hidden>
						<Box
							display="flex"
							alignItems="center"
							id={`main-menu`}
							className={`${menuMobileShow ? 'mobile-open' : ''}`}
						>
							<Hidden mdUp>
								<Box
									display={`flex`}
									justifyContent={`space-between`}
									alignItems={`center`}
									style={{
										padding: '0.75rem',
										borderBottom: '1px solid #e1e1e1',
									}}
								>
									<Link href="/home">
										<Box
											onClick={() => setMenuMobileShow(false)}
											component="a"
											display="inline-flex"
											alignItems="center"
											className={styles.logoWrap}
										>
											<img
												src="/static/img/logo.png"
												className={`logo ${styles.logo}`}
												alt="logo"
											/>
										</Box>
									</Link>
									<IconButton
										color="inherit"
										aria-label="menu"
										onClick={toggleMenuMobile}
									>
										<CloseIcon />
									</IconButton>
								</Box>
							</Hidden>
							<Link href="/home">
								<Box
									onClick={() => setMenuMobileShow(false)}
									component="a"
									display="inline-block"
									className={`${styles.linkMenu} ${
										router.pathname.includes('/home') || router.pathname === '/'
											? 'active-menu'
											: ''
									}`}
								>
									<span className={styles.link}>Trang chủ</span>
								</Box>
							</Link>
							<Link href="/my-course">
								<Box
									onClick={() => setMenuMobileShow(false)}
									component="a"
									display="inline-block"
									className={`${styles.linkMenu} ${
										router.pathname.includes('/my-course') ? 'active-menu' : ''
									}`}
								>
									<span className={styles.link}>Khóa học của tôi</span>
								</Box>
							</Link>
							<Link href="/result">
								<Box
									onClick={() => setMenuMobileShow(false)}
									component="a"
									display="inline-block"
									className={`${styles.linkMenu} ${
										router.pathname.includes('/result') ? 'active-menu' : ''
									}`}
								>
									<span className={styles.link}>Kết quả học tập</span>
								</Box>
							</Link>
							<Link href="/blog">
								<Box
									component="a"
									display="inline-block"
									className={`${styles.linkMenu} ${
										router.pathname.includes('/blog') ? 'active-menu' : ''
									}`}
									onClick={() => setMenuMobileShow(false)}
								>
									<span className={styles.link}>Tin tức</span>
								</Box>
							</Link>
						</Box>
						<div
							className={`overlay-menu`}
							onClick={() => setMenuMobileShow(false)}
						/>
					</Box>
					<Box className="header-right" display="flex" alignItems="center">
						<Box>
							<Badge
								badgeContent={100}
								max={99}
								color="primary"
								onClick={showNotification}
								overlap="circle"
							>
								<Notifications
									aria-controls="notification"
									aria-haspopup="true"
									className={styles.iconColor}
									fontSize="large"
								/>
							</Badge>

							<DropDownMenu
								id="notification"
								anchorEl={notiEl}
								keepMounted
								open={Boolean(notiEl)}
								onClose={closeNotification}
								className={`dropdown-angle`}
							>
								<Box p={2}>Nội dung notification</Box>
							</DropDownMenu>
						</Box>
						<Divider
							orientation="vertical"
							flexItem
							className={styles.divider}
						/>

						<Box display="flex" onClick={showUserMenu} className={styles.link}>
							<Avatar alt="Remy Sharp" src="/static/img/avatar.jpg" />
							<Box display="flex" alignItems="center" ml={1}>
								<Hidden xsDown>
									<Typography>Huỳnh Thị Phương Anh</Typography>
								</Hidden>
								<ArrowDropDown />
							</Box>
						</Box>
						<DropDownMenu
							id="user-information"
							anchorEl={userMenuEl}
							keepMounted
							open={Boolean(userMenuEl)}
							onClose={closeUserMenu}
							TransitionComponent={Fade}
							className={`${classes.dropdown} dropdown-angle`}
						>
							<Box px={2}>
								<List component="nav" aria-label="account profile">
									<Link href={`/profile`} as={`/profile`}>
										<ListItem button onClick={() => setUserMenuEl(false)}>
											<ListItemIcon>
												<AccountCircle />
											</ListItemIcon>

											<ListItemText primary="Thông tin tài khoản" />
										</ListItem>
									</Link>
									<ListItem button>
										<ListItemIcon>
											<ExitToApp />
										</ListItemIcon>
										<ListItemText primary="Đăng xuất" />
									</ListItem>
								</List>
							</Box>
						</DropDownMenu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Header;
