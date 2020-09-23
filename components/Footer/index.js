import React from 'react';
import { Box, Typography } from '@material-ui/core';

const year = new Date().getFullYear();

const Footer = () => {
	return (
		<>
			<Box
				px={2}
				py={1.5}
				borderTop={1}
				borderColor={`grey.300`}
				style={{ backgroundColor: '#fff' }}
			>
				<Box
					display="flex"
					alignItems="center"
					justifyContent={`space-between`}
				>
					<Typography variant={`caption`} style={{ color: '#b4b4b4' }}>
						Dolphin Elearning - Copyright © {year}
					</Typography>
					<Typography variant={`caption`} style={{ color: '#b4b4b4' }}>
						Design and developer by Mona Media
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
