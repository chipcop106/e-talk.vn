import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
	return (
		<>
			<a id="scroll-to-top">
				<FontAwesomeIcon icon="chevron-up" className="fas fa-chevron-up" />
			</a>
		</>
	);
};

export default Footer;
