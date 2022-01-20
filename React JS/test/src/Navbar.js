import React from 'react'
import { Container, Toolbar, Typography, Box, Link } from '@material-ui/core'
import { Link as RouterLink, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: 'bold',
		letterSpacing: '1.5px'
	},
	toolbar: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			alignItems: 'flex-end',
			justifyContent: 'space-between'
		}
	},
	menuBox: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row'
		}
	},
	menuItem: {
		padding: theme.spacing(1),
		[theme.breakpoints.up('sm')]: {
			paddingLeft: theme.spacing(3)
		},
		underline: 'none'
	}
}))

const NavBar = () => {
	const classes = useStyles()

	return (
		<Container>
			<Toolbar className={classes.toolbar}>
				<Typography component='h1' variant='h4' className={classes.title}>
					Alex DVD store
				</Typography>
				<Box className={classes.menuBox}>
					<Link
						component={RouterLink}
						underline='none'
						variant='body1'
						className={classes.menuItem}
						to='/'
					>
						Home
					</Link>
					<Link
						component={RouterLink}
						to='/list'
						variant='body1'
						className={classes.menuItem}
					>
						Details
					</Link>
				</Box>
			</Toolbar>
		</Container>
	)
}

export default withRouter(NavBar)
