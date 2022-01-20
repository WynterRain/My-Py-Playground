import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { PropTypes } from 'prop-types'
import DvdItem from './DvdItem'
import _ from 'lodash'
import {
	Container,
	Toolbar,
	RadioGroup,
	FormControlLabel,
	Radio,
	Grid,
	FormLabel,
	MenuItem,
	Select,
	Button,
	FormGroup
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import { useLocation } from 'react-router-dom'
import axios from 'axios'
import AddDvdPage from './AddDvdPage'
import { CategoryList } from './Utils'

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
		},
		paddingBottom: theme.spacing(2)
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
		}
	},
	formControl: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			alignItems: 'flex-end'
			// justifyContent: 'space-between'
		}
	},
	select: {
		marginRight: theme.spacing(2)
	},
	formLabel: {
		marginRight: theme.spacing(2)
	},
	radio: {
		'&$checked': {
			color: 'yellow'
		}
	},
	container: {
		paddingLeft: theme.spacing(5)
	}
}))

const useURLQuery = () => {
	const { search } = useLocation()
	return useMemo(() => new URLSearchParams(search), [search])
}

const SortByBar = ({
	handleFilterBy,
	handleAddNewDvd,
	handleAscChange,
	handleSortByChange,
	isAsc,
	sortBy,
	filterBy
}) => {
	const { toolbar, formControl, select, formLabel, container } = useStyles()
	const urlQuery = useURLQuery()
	
	const isAdmin = !!urlQuery.get('Admin')
	const [open, setOpen] = useState(false)

	const handleAddDvdOpen = () => {
		setOpen(true)
	}

	const handleDvdClose = (value) => {
		setOpen(false)
		handleAddNewDvd(value)
	}

	return (
		<Container className={container}>
			<Toolbar className={toolbar}>
				<FormGroup className={formControl}>
					<FormLabel className={formLabel}>Show</FormLabel>
					<Select onChange={handleFilterBy} className={select} value={filterBy}>
						<MenuItem value='all'>All</MenuItem>
						{CategoryList.map((option, i) => {
							const displayText =
								option.slice(0, 1).toUpperCase() +
								option.slice(1, option.length)
							return (
								<MenuItem key={option} value={option}>
									{displayText}
								</MenuItem>
							)
						})}
					</Select>
					<FormLabel className={formLabel}>Sort By</FormLabel>
					<Select
						onChange={handleSortByChange}
						className={select}
						value={sortBy}
					>
						<MenuItem key='name999' value='name'>
							Title
						</MenuItem>
						<MenuItem key='category999' value='category'>
							Category
						</MenuItem>
					</Select>
					<RadioGroup
						row
						aria-label='Sort Ascending Descending'
						name='radio-buttons-group'
						value={isAsc || 'ascending'}
						onChange={handleAscChange}
					>
						<FormControlLabel
							value='ascending'
							control={<Radio color='primary' />}
							label='Ascending'
						/>
						<FormControlLabel
							value='descending'
							control={<Radio color='primary' />}
							label='Descending'
						/>
					</RadioGroup>
					{isAdmin && (
						<div>
							<Button variant='contained' onClick={handleAddDvdOpen}>
								Add An DVD
							</Button>

							{open && <AddDvdPage open={open} onClose={handleDvdClose} />}
						</div>
					)}
				</FormGroup>
			</Toolbar>
		</Container>
	)
}

SortByBar.propTypes = {
	handleAddNewDvd: PropTypes.func,
	handleAscChange: PropTypes.func,
	handleSortByChange: PropTypes.func,
	isAsc: PropTypes.string,
	sortBy: PropTypes.string,
	filterBy: PropTypes.string
}

const doFilterSortData = (itemList, isAscending, sortBy, filterBy) => {
	const isAsc = isAscending === 'ascending'
	let filterList = itemList
	if (filterBy !== 'all') {
		filterList = _.filter(itemList, ['category', filterBy])
	}

	const newList = _.sortBy(filterList, sortBy)
	if (!isAsc) {
		newList.reverse()
	}

	return newList
}

const DvdListPage = () => {
	const [data, setData] = useState([])
	const { container } = useStyles()

	const [filterBy, setFilterBy] = useState('all')
	const [isAsc, setIsAsc] = useState('ascending')
	const [sortBy, setSortBy] = useState('category')

	const handleSortByChange = useCallback((e) => {
		setSortBy(e.target.value)
	}, [])

	const handleAscBy = useCallback((e) => {
		setIsAsc(e.target.value)
	}, [])

	const handleFilterBy = useCallback((e) => {
		setFilterBy(e.target.value)
	}, [])

	const handleAddNewDvd = async (value) => {
		if (value) {
			await axios
				.get('http://localhost:3002/items')
				.then((res) => {
					// console.log(res.data)
					setData(res.data)
				})
				.catch((err) => console.log(err))
		}
	}

	useEffect(() => {
		axios
			.get('http://localhost:3002/items')
			.then((res) => {
				// console.log(res.data)
				setData(res.data)
			})
			.catch((err) => console.log(err))
	}, [])

	const sortData = useMemo(
		() => doFilterSortData(data, isAsc, sortBy, filterBy),
		[data, isAsc, sortBy, filterBy]
	)

	return (
		<div>
			<SortByBar
				handleFilterBy={handleFilterBy}
				handleAscChange={handleAscBy}
				handleSortByChange={handleSortByChange}
				handleAddNewDvd={handleAddNewDvd}
				sortBy={sortBy}
				isAsc={isAsc}
				filterBy={filterBy}
			/>
			<Grid container spacing={3} className={container}>
				{sortData.map((data) => {
					return (
						<Grid item key={'grid' + data.id}>
							<DvdItem key={data.id} data={data}></DvdItem>
						</Grid>
					)
				})}
			</Grid>
		</div>
	)
}

export default DvdListPage
