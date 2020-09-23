import React, { useRef, useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Box, IconButton } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	btnPrimary: {
		color: '#fff',
		backgroundColor: theme.palette.primary.main,
		'&:hover': {
			color: '#fff',
			backgroundColor: theme.palette.primary.light,
		},
	},
	showBtn: {
		opacity: '1 !important',
		pointerEvents: 'auto !important',
	},
}));

const Layout = ({ children }) => {
	const classes = useStyles();
	const contentRef = useRef(null);
	const [visibleSTT, setVisibleSTT] = useState(false);

	const scrollToTop = () => {
		if (!contentRef.current) return;
		const target = contentRef.current;
		const c = target.scrollTop;
		if (c > 0) {
			window.requestAnimationFrame(scrollToTop);
			target.scrollTo(0, c - c / 10);
		}
	};

	const showScrollTopBtn = () => {
		if (contentRef.current.scrollTop > 0) {
			setVisibleSTT(true);
		} else {
			setVisibleSTT(false);
		}
	};

	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.addEventListener('scroll', showScrollTopBtn);
		}

		return () => {
			contentRef.current = false;
			contentRef.current.removeEventListener('scroll', showScrollTopBtn);
		};
	}, []);

	return (
		<Box
			display="flex"
			flexDirection="column"
			style={{ height: 'var(--app-height)' }}
		>
			<Header />
			<Box ref={contentRef} flexGrow={1} style={{ overflow: 'auto' }}>
				{children}
			</Box>
			<Footer />
			<Box
				style={{
					position: 'fixed',
					bottom: '4.5rem',
					right: '2rem',
					opacity: 0,
					zIndex: 12,
					pointerEvents: 'none',
					transition: 'opacity .3s ease',
				}}
				className={visibleSTT && classes.showBtn}
			>
				<IconButton
					onClick={scrollToTop}
					color="primary"
					className={classes.btnPrimary}
				>
					<KeyboardArrowUp size="large" />
				</IconButton>
			</Box>
		</Box>
	);
};

export const getLayout = (page) => <Layout>{page}</Layout>;

export default Layout;
