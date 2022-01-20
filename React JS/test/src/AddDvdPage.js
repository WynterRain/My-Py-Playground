import React, { useState, useReducer, useCallback } from 'react'
import { PropTypes } from 'prop-types'
import {
	Dialog,
	DialogContent,
	FormControlLabel,
	DialogActions,
	DialogTitle,
	Button,
	TextField,
	Checkbox,
	Select,
	MenuItem,
	InputLabel,
	ListItem,
	FormGroup
} from '@material-ui/core'

import axios from 'axios'
import { CategoryList } from './Utils'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textField: {
		paddingBottom: '10px',
		marginBottom: '15px'
	},
	categoryControl: {
		paddingBottom: '5px',
		marginBottom: '15px'
	},
	formControl: {
		margin: theme.spacing(2),
		minWidth: 520
	}
}))

const dvdForm = {
	name: '',
	category: CategoryList[0],
	image: '',
	featured: false
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'setName':
			return { ...state, name: action.value }
		case 'setCategory':
			return { ...state, category: action.value }
		case 'setImage':
			return { ...state, image: action.value }
		case 'setFeatured':
			return { ...state, featured: action.value }
		default:
			break
	}
}

const AddDvdPage = (props) => {
	const { root, textField, categoryControl, formControl } = useStyles()
	const { onClose, open } = props

	const [errors, setErrors] = useState({})
	const [state, dispatch] = useReducer(reducer, dvdForm)

	const validate = () => {
		let test = {}
		test.name = state.name ? '' : 'This field is required'
		test.image = state.image ? '' : 'This field is required'
		setErrors({ ...test })
		return Object.values(test).every((x) => x === '')
	}

	const handleClose = () => {
		onClose(false)
	}

	const handleSave = async (e) => {
		e.preventDefault()

		if (!validate()) return

		try {
			const res = await axios.post('http://localhost:3002/items', { ...state })
			onClose(true)
			return res.data
		} catch (error) {
			console.log(error.response)
			return error.response
		}
	}

	return (
		<Dialog onClose={handleClose} open={open} className={root}>
			<form method='post' onSubmit={handleSave} autoComplete='off'>
				<DialogTitle>Add a DVD </DialogTitle>
				<ListItem button divider></ListItem>
				<DialogContent>
					<FormGroup className={formControl}>
						<TextField
							label='DVD Name'
							required
							value={state.name}
							onChange={useCallback((e) => {
								dispatch({ type: 'setName', value: e.target.value })
							}, [])}
							fullWidth
							className={textField}
							error={!!errors.name}
							helperText={!!errors.name && errors.name}
						/>

						<InputLabel id='category-select-label'>Category</InputLabel>
						<Select
							className={categoryControl}
							labelId='category-select-label'
							label='Category'
							value={state.category}
							fullWidth
							onChange={useCallback((e) => {
								dispatch({ type: 'setCategory', value: e.target.value })
							}, [])}
						>
							{CategoryList.map((option) => {
								const displayText =
									option.slice(0, 1).toUpperCase() +
									option.slice(1, option.length)
								return (
									<MenuItem key={option + '-menuItem'} value={option}>
										{displayText}
									</MenuItem>
								)
							})}
						</Select>
						<TextField
							label='Image URL'
							required
							value={state.Image}
							onChange={useCallback((e) => {
								dispatch({ type: 'setImage', value: e.target.value })
							}, [])}
							fullWidth
							className={textField}
							error={!!errors.image}
							helperText={errors.image}
						/>
						<FormControlLabel
							control={
								<Checkbox
									name='featured'
									value={state.featured}
									color='primary'
								/>
							}
							label='Featured'
							onChange={useCallback((e, value) => {
								dispatch({ type: 'setFeatured', value })
							}, [])}
						/>
					</FormGroup>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						type='submit'
						onClick={handleSave}
						color='primary'
						variant='contained'
					>
						Save
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	)
}

AddDvdPage.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired
}

export default AddDvdPage
