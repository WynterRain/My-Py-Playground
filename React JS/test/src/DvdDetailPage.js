import React from 'react'
import { PropTypes } from 'prop-types'
import { useLocation, withRouter } from 'react-router-dom'

import {
	Card,
	CardContent,
	CardActionArea,
	Typography,
	CardMedia
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	card: { width: '90%', margin: 'auto', height: '80%' },
	cardMedia: { height: '70%' },
	padding: theme.spacing(10)
}))

const DvdDetailPage = () => {
	const { state } = useLocation()
	const data = state.detail || {}
	const { cardMedia, card } = useStyles()
	const { name, image } = data || {}
	return (
		<Card className={card}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt={name}
					image={image}
					title={name}
					className={cardMedia}
				/>
				<CardContent>
					<Typography gutterBottom variant='h6' component='h2'>
						{name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

DvdDetailPage.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	image: PropTypes.string,
	category: PropTypes.string,
	featured: PropTypes.bool
}
export default withRouter(DvdDetailPage)
