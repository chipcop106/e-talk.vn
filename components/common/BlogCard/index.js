import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import { useRouter } from 'next/router'
import { ArrowRightAlt } from '@material-ui/icons'
import Link from 'next/link'
import { Skeleton } from '@material-ui/lab'

const blogCardStyles = makeStyles((theme) => ({
	media: {
		height: 150,
	},
	truncateText: {
		fontSize: '0.875rem',
		color: '#999',
		width: '100%',
		overflow: 'hidden',
		display: '-webkit-box',
		'-webkit-line-clamp': 3,
		'-webkit-box-orient': 'vertical',
	},
	title: {
		transition: 'color .3s ease',
		cursor: 'pointer',
		fontSize: '1rem',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	meta: {
		marginBottom: '0.5rem',
		color: '#ccc',
	},
}))

export const BlogCard = ({
	data: {
		id = 0,
		title = '',
		time = '',
		image = '',
		imageThumbnail = '',
		description = '',
		noDescription = false,
	},
	isLoading = false,
}) => {
	const classes = blogCardStyles()
	const router = useRouter()
	return (
		<Card className={classes.cardContainer}>
			{isLoading ? (
				<Skeleton className={classes.media} />
			) : (
				<CardActionArea
					onClick={(e) => {
						e.preventDefault()
						router.push(`/blog/post/[[...slug]]`, `/blog/post/${id}`)
					}}
				>
					<CardMedia
						className={classes.media}
						image={image ? image : `/static/img/blog-banner.jpg`}
						title={title}
					/>
				</CardActionArea>
			)}

			<CardContent>
				{isLoading ? (
					<Skeleton />
				) : (
					<Link href={`/blog/post/[[...slug]]`} as={`/blog/post/${id}`}>
						<Typography
							gutterBottom
							variant="h6"
							component="h2"
							className={classes.title}
						>
							{title || ''}
						</Typography>
					</Link>
				)}
				{isLoading ? (
					<Skeleton width={120} />
				) : (
					<Typography
						variant="caption"
						className={classes.meta}
						component={`p`}
					>
						{time}
					</Typography>
				)}
				{isLoading ? (
					<>
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</>
				) : (
					noDescription === false && (
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							className={classes.truncateText}
						>
							{description || ''}
						</Typography>
					)
				)}
			</CardContent>
			{noDescription === false && (
				<CardActions disableSpacing style={{ padding: '0 1rem 1rem' }}>
					{isLoading ? (
						<Skeleton height={36} width={100} />
					) : (
						<Button
							variant={`text`}
							color={`primary`}
							endIcon={<ArrowRightAlt />}
							onClick={(e) => {
								e.preventDefault()
								router.push(`/blog/post/[[...slug]]`, `/blog/post/${id}`)
							}}
						>
							Đọc tiếp
						</Button>
					)}
				</CardActions>
			)}
		</Card>
	)
}
