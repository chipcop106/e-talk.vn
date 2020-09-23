import { useRouter } from 'next/router';
import { getLayout } from '~/components/Layout';
import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Avatar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ArrowDownward } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { scrollToSmoothly } from '~/utils';
import Divider from '@material-ui/core/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { blogDemo } from '~/pages/blog';
import { BlogCard } from '~/components/common/BlogCard';

SwiperCore.use([Navigation, Pagination, A11y]);
const useStyles = makeStyles((theme) => ({
	featuredContainer: {
		zIndex: 2,
		position: 'relative',
		height: 'calc(var(--app-height) - 124px)',
	},
	featuredBlog: {
		backgroundImage: `url('/static/img/blog-banner.jpg')`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		position: 'relative',
	},
	featureOverlay: {
		content: '',
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: 'rgba(0,0,0,.6)',
		zIndex: 1,
	},
	textBox: {
		position: 'absolute',
		zIndex: 2,
		top: 'calc(50% - 2rem)',
		left: 0,
		padding: '0 1.5rem',
		transform: `translateY(-50%)`,
		color: '#fff',
		marginBottom: '2rem',
		textAlign: 'center',
	},
	categoryFeatured: {
		fontWeight: 'bold',
		color: theme.palette.error.light,
		marginBottom: '0.5rem',
		textTransform: 'uppercase',
	},
	containerBlog: {
		marginTop: '-4rem',
		marginBottom: '4rem',
		position: 'relative',
		zIndex: 2,
		padding: '0 -4rem',
	},
	titleSec: {
		fontSize: '2.25rem',
		fontWeight: 200,
		fontFamily: 'Roboto',
	},
	meta: {
		fontWeight: 400,
		fontFamily: 'Roboto',
		fontSize: 14,
		color: '#ccc',
	},
	elipsis: {
		width: '100%',
		overflow: 'hidden',
		display: '-webkit-box',
		'-webkit-line-clamp': 3,
		'-webkit-box-orient': 'vertical',
	},
	categoryList: {
		margin: '0 -0.5rem',
	},
	buttonScroll: {
		'&.MuiButton-textPrimary': {
			color: '#fff',
		},
		'&.MuiButton-outlinedPrimary': {
			borderColor: '#fff',
			color: '#fff',
			'&:hover': {
				boxShadow: 'inset 0px 0px 50px 50px #fff',
				color: theme.palette.secondary.main,
			},
		},
	},
	author: {
		color: theme.palette.error.main,
		fontWeight: 600,
	},
	avatar: {
		width: 50,
		height: 50,
		marginRight: '1rem',
	},
}));
let bodyEl;

const RenderSlider = ({ data, isLoading }) => {
	return (
		<Swiper
			spaceBetween={16}
			slidesPerView={4}
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				960: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 32,
				},
			}}
			navigation
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			{data.map((item) => (
				<SwiperSlide key={`${item.id}`}>
					<BlogCard data={item} isLoading={isLoading} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

const Post = () => {
	const classes = useStyles();
	const router = useRouter();
	const [relatedBlogs, setRelatedBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const scrollDownSection = (e) => {
		e.preventDefault();
		bodyEl = document.querySelector('#__next > div > div:nth-child(2)');
		if (!bodyEl) return;
		const scrollPost = bodyEl.offsetHeight - 124;
		scrollToSmoothly(bodyEl, scrollPost, 800);
	};

	const cleanComponent = () => {
		bodyEl = null;
	};

	useEffect(() => {
		const t = setTimeout(() => {
			setRelatedBlogs(
				blogDemo.map((item) => ({
					...item,
					noDescription: true,
				})),
			);
			setIsLoading(false);
		}, 1500);
		return () => {
			cleanComponent();
			clearTimeout(t);
		};
	}, []);

	return (
		<>
			<section>
				<Box className={classes.featuredBlog}>
					<Container maxWidth={`lg`} className={classes.featuredContainer}>
						<Box className={classes.textBox}>
							<Typography
								variant={`h2`}
								component={`h1`}
								className={classes.categoryTitle}
							>
								Build full nextjs app with react-hook 2020
							</Typography>
							<Box mt={{ xs: 4, sm: 4, md: 6, lg: 8 }}>
								<Button
									variant={`contained`}
									color={`primary`}
									endIcon={<ArrowDownward />}
									size={`large`}
									onClick={scrollDownSection}
									className={classes.buttonScroll}
								>
									Đọc bài viết
								</Button>
							</Box>
						</Box>
					</Container>
					<Box className={classes.featureOverlay} />
				</Box>
			</section>
			<Container maxWidth={`xl`} className={classes.containerBlog}>
				<Paper>
					<Container maxWidth={`lg`} style={{ minHeight: 400 }}>
						<Box py={4}>
							<Box
								display={`flex`}
								alignItems={`center`}
								mb={4}
								className={classes.blogAuthor}
							>
								<Avatar
									src={`/static/img/avatar.png`}
									size={`large`}
									className={classes.avatar}
								/>
								<Box>
									<Typography
										variant={`body2`}
										className={classes.author}
										component={`p`}
									>
										Administrator
									</Typography>
									<Typography variant={`caption`} className={classes.meta}>
										20/10/2020
									</Typography>
								</Box>
							</Box>
							<Box className={classes.blogContent}>
								<div className="MuiGrid-root jss361  ">
									<h3 className="jss2584">
										The Castle Looks Different at Night...
									</h3>
									<p>
										This is the paragraph where you can write more details about
										your product. Keep you user engaged by providing meaningful
										information. Remember that by this time, the user is
										curious, otherwise he wouldn't scroll to get here. Add a
										button if you want the user to see more. We are here to make
										life better.
										<br />
										<br />
										And now I look and look around and there’s so many Kanyes
										I've been trying to figure out the bed design for the master
										bedroom at our Hidden Hills compound... and thank you for
										turning my personal jean jacket into a couture piece.
									</p>
									<blockquote className="jss2596 jss2598">
										<p className="jss2599 jss2586">
											“And thank you for turning my personal jean jacket into a
											couture piece.”
										</p>
										<small className="jss2600">Kanye West, Producer.</small>
									</blockquote>
								</div>
								<div className="MuiGrid-root jss361 ">
									<h3 className="jss2584">Challenge everry day:</h3>
									<p>
										We are here to make life better. And now I look and look
										around and there’s so many Kanyes I've been trying to figure
										out the bed design for the master bedroom at our Hidden
										Hills compound... and thank you for turning my personal jean
										jacket into a couture piece.
										<br />I speak yell scream directly at the old guard on
										behalf of the future. daytime All respect prayers and love
										to Phife’s family Thank you for so much inspiration.
									</p>
									<p>
										Thank you Anna for the invite thank you to the whole Vogue
										team And I love you like Kanye loves Kanye Pand Pand Panda
										I've been trying to figure out the bed design for the master
										bedroom at our Hidden Hills compound...The Pablo pop up was
										almost a pop up of influence. All respect prayers and love
										to Phife’s family Thank you for so much inspiration daytime
										I love this new Ferg album! The Life of Pablo is now
										available for purchase I have a dream. Thank you to
										everybody who made The Life of Pablo the number 1 album in
										the world! I'm so proud of the nr #1 song in the country.
										Panda! Good music 2016!
									</p>
									<p>
										I love this new Ferg album! The Life of Pablo is now
										available for purchase I have a dream. Thank you to
										everybody who made The Life of Pablo the number 1 album in
										the world! I'm so proud of the nr #1 song in the country.
										Panda! Good music 2016!
									</p>
								</div>
								<div className="MuiGrid-root jss361 ">
									<h3 className="jss2584">Rest of the Story:</h3>
									<p>
										We are here to make life better. And now I look and look
										around and there’s so many Kanyes I've been trying to figure
										out the bed design for the master bedroom at our Hidden
										Hills compound... and thank you for turning my personal jean
										jacket into a couture piece.
										<br />I speak yell scream directly at the old guard on
										behalf of the future. daytime All respect prayers and love
										to Phife’s family Thank you for so much inspiration.
									</p>
									<p>
										Thank you Anna for the invite thank you to the whole Vogue
										team And I love you like Kanye loves Kanye Pand Pand Panda
										I've been trying to figure out the bed design for the master
										bedroom at our Hidden Hills compound...The Pablo pop up was
										almost a pop up of influence. All respect prayers and love
										to Phife’s family Thank you for so much inspiration daytime
										I love this new Ferg album! The Life of Pablo is now
										available for purchase I have a dream. Thank you to
										everybody who made The Life of Pablo the number 1 album in
										the world! I'm so proud of the nr #1 song in the country.
										Panda! Good music 2016!
									</p>
									<p>
										I love this new Ferg album! The Life of Pablo is now
										available for purchase I have a dream. Thank you to
										everybody who made The Life of Pablo the number 1 album in
										the world! I'm so proud of the nr #1 song in the country.
										Panda! Good music 2016!
									</p>
								</div>
								<div className="MuiGrid-root jss361 ">
									<h3 className="jss2584">Make something really cool:</h3>
									<p>
										We will focus on providing all the low-level tools needed to
										build a rich user-interface with React. Once we implement
										the Material design specification (which is a bar set quite
										high), you should be able to take advantage of it for your
										own business with any style customization needed. We want to
										see companies succeeding using Material-UI in a way that
										matches their brand, close to the material philosophy or
										not. We don't want them to feel that their UI simply looks
										like another Google product.
									</p>
									<p>
										The Material Design guidelines are an incredible starting
										point, but they do not provide guidance on all aspects or
										needs of an application. In addition to the
										guidelines-specific implementation, we want Material-UI to
										become whatever is generally useful for application
										development, all in the spirit of the Material Design
										guidelines.
									</p>
									<p>
										Therefore, Material-UI will be not only be an implementation
										of the Material Design guidelines, but a general use UI
										library of components that are needed by many. This
										generalized use doesn't imply any other design methodology.
										It also means we will have components or combinations that
										are simply not addressed in the design guidelines.
									</p>
								</div>
							</Box>
							<Box my={4}>
								<Divider />
							</Box>
							<Box>
								<Typography variant={`h6`} className={classes.titleSec}>
									Bài viết khác
								</Typography>
								<Box mt={4}>
									<RenderSlider data={relatedBlogs} isLoading={isLoading} />
								</Box>
							</Box>
						</Box>
					</Container>
				</Paper>
			</Container>
		</>
	);
};
Post.getLayout = getLayout;

export default Post;
