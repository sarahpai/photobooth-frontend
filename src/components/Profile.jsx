import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'


const Profile = ({ username }) => {

		<h1>Welcome { username }</h1>
}

const mapStateToProps = ({ usersReducer: { user: { username } } }) => ({
	username
})

export default withAuth(connect(mapStateToProps)(Profile));