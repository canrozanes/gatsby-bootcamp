import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'

const IndexPage = () => {
	return (
		<div>
			<Layout title="Home">
				<h1>Hello.</h1>
				<h2>I'm Can, a front-end developer</h2>
				<p>Need a developer? <Link to="/contact">Contact me.</Link></p>
			</Layout>
		</div>
	)
}

export default IndexPage;