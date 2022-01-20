import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
	Card,
	CardContent,
	CardActionArea,
	Typography,
	CardMedia
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	listCard: { width: 300, margin: 'auto' },
	listCardMedia: { height: 300 },
	homePageCard: { width: '70%', margin: 'auto' },
	homePageCardMedia: { height: '600px' }
}))

const DvdItem = (props) => {
	const { listCardMedia, listCard, homePageCard, homePageCardMedia } =
		useStyles()
	const { homePage = false } = props
	const { id, name, image } = props.data

	const { history } = props

	const goToDetail = () => {
		const detailPath = id ? '/Details/' + id : '/'
		history.push({
			pathname: detailPath,
			state: { detail: { ...props.data } }
		})
	}

	const cardMedia = homePage ? homePageCardMedia : listCardMedia
	const card = homePage ? homePageCard : listCard

	return (
		<Card className={card} onClick={goToDetail}>
			<CardActionArea>
				<CardMedia
					className={cardMedia}
					component='img'
					alt={name}
					image={image}
					title={name}
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

DvdItem.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		image: PropTypes.string
	}),
	homePage: PropTypes.bool
}
export default withRouter(DvdItem)
