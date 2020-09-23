import React, { useEffect, useState, useRef } from 'react';
import { getLayout } from '~/components/Layout';
import Link from 'next/link';
import {
	Container,
	Grid,
	Link as LinkMU,
	List,
	ListItem,
	ListItemIcon,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import HorizontalCardCourse from '~/page-components/MyCourse/HorizontalCardCourse';
import { Pagination } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import { colors } from '~/config';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LibraryBooksRounded } from '@material-ui/icons';
import { randomId } from '~/utils';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { MyFilledInput } from '~/components/common/Input';
export const courseDemo = [
	{
		courseId: randomId(),
		src: null,
		courseName: 'Bộ phận hàng nhập trong công ty',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 15,
		totalVideo: 45,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
		categoryName: 'Đào tạo nhân viên mới',
		categoryId: 1,
	},
	{
		courseId: randomId(),
		src: null,
		courseName: 'Ứng dụng của Microsoft Office',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 35,
		totalVideo: 38,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
		categoryName: 'Đào tạo kỹ năng cơ bản',
		categoryId: 2,
	},
	{
		courseId: randomId(),
		src: null,
		courseName: 'Kỹ năng làm MS PowerPoint',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 35,
		totalVideo: 38,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
		categoryName: 'Đào tạo kỹ năng cơ bản',
		categoryId: 2,
	},
	{
		courseId: randomId(),
		src: null,
		courseName: 'Ứng dụng của Microsoft Office',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 35,
		totalVideo: 38,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
		categoryName: 'Đào tạo kỹ năng cơ bản',
		categoryId: 2,
	},
	{
		courseId: randomId(),
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 25,
		totalVideo: 50,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
		categoryName: 'Đào tạo nghiệp vụ nâng cao',
		categoryId: 3,
	},
	{
		courseId: randomId(),
		src: null,
		courseName: 'Kỹ năng cần có của trường nhóm (TEAM LEARDER)',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 33,
		totalVideo: 78,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
		categoryName: 'Đào tạo quản lý cấp trung',
		categoryId: 4,
	},

	{
		courseId: randomId(),
		src: null,
		courseName: 'Kỹ năng đánh giá và quy hoạch nhân sự',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 37,
		totalVideo: 37,
		totalExercise: 45,
		finishedExercise: 45,
		finished: true,
		categoryName: 'Đào tạo quản lý cấp cao',
		categoryId: 5,
	},
];

const RowItem = ({ item }) => {
	const classes = makeStyles({
		rowStyle: {
			borderBottom: '1px solid #e1e1e1',
		},
		leftIcon: {
			width: 30,
			height: 30,
			color: colors.primaryLighten,
		},
		rightIcon: {
			fontSize: 48,
		},
		link: {
			color: '#000',
			'&:hover': {
				color: colors.primary,
			},
		},
		deadline: {
			fontWeight: 600,
			letterSpacing: 1,
			fontFamily: 'Roboto',
		},
	})();
	return (
		<ListItem className={classes.rowStyle}>
			<ListItemIcon>
				<LibraryBooksRounded className={classes.leftIcon} />
			</ListItemIcon>
			<Box>
				<Link href={`/my-course/[courseid]`} as={`/my-course/3`}>
					<LinkMU className={classes.link}>
						<Typography variant={`subtitle2`}>{item.courseName}</Typography>
					</LinkMU>
				</Link>

				<Box component={`div`} display={`flex`}>
					<Typography
						variant={`caption`}
						component={`span`}
						color="textSecondary"
						style={{ marginRight: 5 }}
					>
						Hạn nộp:
					</Typography>
					<Typography
						variant={`caption`}
						component={`span`}
						color="textSecondary"
						className={classes.deadline}
					>
						{item.deadline}
					</Typography>
				</Box>
			</Box>
			{/*<ListItemText*/}
			{/*	primary={item.courseName}*/}
			{/*	secondary={`Deadline: ${item.deadline}`}*/}
			{/*/>*/}
		</ListItem>
	);
};

const RenderRow = ({ lists }) => {
	return [...lists].map((item, index) => (
		<RowItem key={`${index}`} item={item} />
	));
};

const CircularProgressWithLabel = (props) => {
	return (
		<Box position="relative" display="inline-flex">
			<Box top={0} left={0} bottom={0} right={0} position="absolute">
				<CircularProgress
					variant="static"
					{...props}
					style={{ color: 'rgba(255,255,255,.35)' }}
					value={100}
				/>
			</Box>
			<CircularProgress variant="static" {...props} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				{!!props.number && !!props.totalnumber && (
					<Box align={`center`}>
						<Typography
							variant="h5"
							component="div"
							fontSize="large"
							style={{ fontWeight: 600 }}
						>
							{`${Math.round(props?.number ?? 0)} / ${Math.round(
								props?.totalnumber ?? 0,
							)}`}
						</Typography>
						{!!props.label && (
							<Typography variant={'subtitle1'} style={{ color: '#fff' }}>
								{props.label}
							</Typography>
						)}
					</Box>
				)}
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	tabWrap: {
		backgroundColor: 'transparent',
		boxShadow: '0px 1px 0px 0px #e1e1e1',
	},
	tabPanel: {
		'& > .MuiBox-root': {
			padding: '1.5rem 0',
		},
	},
	goalWrap: {
		background: `radial-gradient(${colors.primaryLighten}, ${colors.primary})`,
		color: '#fff',
		paddingBottom: '2rem',
		zIndex: '-1',
		position: 'relative',
	},
	label: {
		color: '#fff',
		fontWeight: 400,
	},
	value: {
		color: '#fff',
		fontWeight: 600,
	},
	iconCourse: {
		width: 35,
		height: 35,
		color: colors.primaryLighten,
	},
	formControl: {
		minWidth: 200,
		marginRight: '1rem',
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			marginBottom: '1rem',
			marginRight: 0,
		},
		'& .MuiSelect-select:focus': {
			backgroundColor: '#fff',
		},
	},
	select: {
		backgroundColor: '#fff',
		borderRadius: 4,
		'&:hover': {
			backgroundColor: '#fff',
		},
		'&:before, &:after': {
			display: 'none',
		},
	},
}));

const ListCourse = ({ data }) => {
	return (
		<>
			{[...data].map((item) => (
				<Box key={`${item.courseId}`} mb={2} component={'div'}>
					<HorizontalCardCourse
						courseName={item.courseName}
						time={item.time}
						finishedVideo={item.finishedVideo}
						totalVideo={item.totalVideo}
						finished={item.finished}
						courseId={item.courseId}
						finishedExercise={item.finishedExercise}
						totalExercise={item.totalExercise}
						src={item.src}
						category={item.categoryName}
					/>
				</Box>
			))}
		</>
	);
};

const RenderSelectOption = ({ data }) => {
	return (
		<>
			{data.map((item) => (
				<option key={`${item.value}`} value={item.value}>
					{item.label}
				</option>
			))}
		</>
	);
};

const MyCourse = () => {
	const classes = useStyles();
	const [filterOptions, setFilterOptions] = useState([]);
	const [filterValue, setFilterValue] = useState('');
	const [courseLists, setCourseLists] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const searchRef = useRef(true);
	const handleFilterChange = (event) => {
		const categoryID = event.target.value;
		setFilterValue(categoryID);
	};

	const getListsCourse = async () => {
		setIsLoading(true);
		setTimeout(() => {
			setCourseLists(courseDemo);
			if (filterOptions.length === 0) {
				let categories = courseDemo.map((item) => ({
					label: item.categoryName,
					value: item.categoryId,
				}));
				setFilterOptions([
					{
						label: 'Tất cả khóa học',
						value: '0',
					},
					...Object.values(
						categories.reduce(
							(acc, cur) => Object.assign(acc, { [cur.value]: cur }),
							{},
						),
					),
				]);
			}
			setIsLoading(false);
		}, 1000);
	};

	const handleSearchCourse = async (e) => {
		e.preventDefault();
		console.log(searchRef.current.value);
	};

	useEffect(() => {
		getListsCourse();
	}, [filterValue]);

	return (
		<>
			<Box my={4}>
				<Container maxWidth={`xl`}>
					<h1 className="title-page">Khóa học của tôi</h1>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={12} md={12} lg={8}>
							<Box
								mb={2}
								pb={2}
								display={`flex`}
								alignItems={`center`}
								flexWrap={`wrap`}
								style={{ borderBottom: '1px solid #e1e1e1' }}
							>
								<FormControl variant="filled" className={classes.formControl}>
									<InputLabel shrink htmlFor="filter-category">
										Danh mục khóa học
									</InputLabel>
									<Select
										disabled={isLoading}
										native
										value={filterValue}
										onChange={handleFilterChange}
										className={classes.select}
										inputProps={{
											name: 'category',
											id: 'filter-category',
										}}
									>
										{<RenderSelectOption data={filterOptions} />}
									</Select>
								</FormControl>
								<FormControl variant="filled" className={classes.formControl}>
									<InputLabel shrink htmlFor="search-course">
										Tìm kiếm khóa học
									</InputLabel>
									<MyFilledInput
										inputRef={searchRef}
										id="search-course"
										type={'text'}
										text={`Search`}
										value={''}
										className={classes.select}
										placeholder={`Nhập tên khóa học`}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="Tìm kiếm"
													onClick={handleSearchCourse}
													edge="end"
												>
													<Search />
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
							</Box>
							<Divider style={{ backgroundColor: '#e1e1e1' }} />
							{isLoading ? (
								<>
									<Box mb={2} component={'div'}>
										<HorizontalCardCourse loading={isLoading} />
									</Box>
									<Box mb={2} component={'div'}>
										<HorizontalCardCourse loading={isLoading} />
									</Box>
									<Box mb={2} component={'div'}>
										<HorizontalCardCourse loading={isLoading} />
									</Box>
								</>
							) : (
								<>
									<ListCourse data={courseLists} />
									<Box display={`flex`} justifyContent={`center`} mt={4}>
										<Pagination count={10} color="primary" />
									</Box>
								</>
							)}
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={4}>
							<Box>
								<Paper className={classes.goalWrap}>
									<Box p={{ md: 4, xs: 2, sm: 2 }}>
										<Typography variant={`h6`} align={`center`}>
											Thành tích của bạn
										</Typography>
										<Box align={`center`} mt={2}>
											<CircularProgressWithLabel
												number={15}
												totalnumber={50}
												value={Math.round((15 * 100) / 50)}
												size={250}
												color={`secondary`}
												thickness={4}
												label={`Bài tập hoàn thành`}
												style={{ color: '#fff' }}
											/>
										</Box>
										<Box mt={2}>
											<Grid container spacing={4}>
												<Grid item md={6}>
													<Box display={`flex`} alignItems={`center`}>
														<CircularProgressWithLabel
															size={35}
															value={35}
															style={{
																marginRight: '1rem',
																color: 'rgb(79, 255, 86)',
															}}
														/>
														<Box>
															<Typography
																variant={`subtitle1`}
																className={classes.label}
															>
																Nộp đúng hạn
															</Typography>
															<Typography
																variant={`subtitle2`}
																className={classes.value}
															>
																32 bài tập
															</Typography>
														</Box>
													</Box>
												</Grid>
												<Grid item md={6}>
													<Box display={`flex`} alignItems={`center`}>
														<CircularProgressWithLabel
															size={35}
															value={35}
															style={{
																marginRight: '1rem',
																color: 'rgb(255, 182, 194)',
															}}
														/>
														<Box>
															<Typography
																variant={`subtitle1`}
																className={classes.label}
															>
																Nộp trễ hạn
															</Typography>
															<Typography
																variant={`subtitle2`}
																className={classes.value}
															>
																32 bài tập
															</Typography>
														</Box>
													</Box>
												</Grid>
											</Grid>
										</Box>
									</Box>
								</Paper>
								<Paper
									style={{
										marginTop: '-1rem',
										borderRadius: '16px 16px 4px 4px',
										boxShadow: '0px -10px 16px 0px rgba(255,255,255,.25)',
									}}
								>
									<Box p={{ md: 4, xs: 2, sm: 2 }}>
										<Typography variant={`h6`}>Bài tập sắp tới hạn</Typography>
										<Box
											style={{
												paddingTop: 0,
												flexGrow: 1,
												maxHeight: '18.5rem',
												overflow: 'auto',
												marginTop: '0.5rem',
											}}
										>
											<List>
												<RenderRow
													lists={[...courseDemo].map((item) => ({
														id: item.courseId,
														courseName: item.courseName,
														deadline: item.time,
													}))}
												/>
											</List>
										</Box>
									</Box>
								</Paper>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

MyCourse.getLayout = getLayout;

export default MyCourse;
