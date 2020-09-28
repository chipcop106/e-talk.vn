import React from 'react';
import { getLayout } from '~/components/Layout';
import Home from '~/pages/home';
const Index = () => (
	<React.Fragment>
		<Home />
	</React.Fragment>
);

Index.getLayout = getLayout;

export default Index;
