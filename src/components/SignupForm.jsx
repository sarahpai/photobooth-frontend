import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { loginUser } from '../actions/users';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import '../css/signupForm.css'
class SignupForm extends Component {
	
	//use this local state since we do not want to broadcast this info as a global state to redux
	state = {
		username: "",
		password: "",
		full_name: "",
		email: ""
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSignupSubmit = (event) => {
		//this.props.loginUser is coming from action creator & used in connect
		this.props.signUser(this.state.username, this.state.password, this.state.full_name, this.state.email);
		this.setState({ username: "", password: "", full_name: "", email: "" })
	}

	render() {
		return this.props.loggedIn ? (
			<Redirect to="/homepage" />
		) : (
				<Grid textAlign='center' style={{ height: '100%', margin: '15%' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header id="header" as='h2' textAlign='center'>
						<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQa_zYEX4rbL-q4QxOiAqrRF2dI4jW8Fu9B4D0AJHFE8gfC2V' /> Log-in to your account
					</Header>
						<Form onSubmit={this.handleSignupSubmit}
							size='large'
							loading={this.props.authenticatingUser}
							error={this.props.failedLogin}
						>
						<Message error header={this.props.failedLogin ? this.props.error : null} />
						<Segment stacked>
							<Form.Input
								fluid icon='user'
								iconPosition='left'
								placeholder='full_name'
								name="full_name"
								onChange={this.handleChange}
								value={this.state.full_name}
							/>
							<Form.Input
								fluid icon='user'
								iconPosition='left'
								placeholder='username'
								name="username"
								onChange={this.handleChange}
								value={this.state.username}
							/>
							<Form.Input
								fluid icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
								name="password"
								onChange={this.handleChange}
								value={this.state.password}
							/>
							<Form.Input
								fluid icon='lock'
								iconPosition='left'
								placeholder='email'
								type='email'
								name="email"
								onChange={this.handleChange}
								value={this.state.email}
							/>
							<Button id='button' fluid size='large'>
								Login
							</Button>
						</Segment>
						</Form>
						{/* <Message>
							New to us? <a href='/signup'>Sign Up</a>
						</Message> */}
					</Grid.Column>
				</Grid>
			)
	}
} 

const mapStateToProps = ({ userReducer: { authenticatingUser, failedLogin, loggedIn, error } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})


export default withRouter(connect(mapStateToProps, { loginUser })(SignupForm))
//loginUser is the function that we are taking from action creator
// capture = () => {
    
  //   // this is HTML2CANVAS capture
  //   // let capture = document.querySelector("#image").src
  //   // let div = document.querySelector("#image-container")
  //   setInterval(() => {
  //     new Promise((res, rej) => {
  //       let imageSrc = this.webcam.getScreenshot()
  //       this.props.photoCaptured(imageSrc)
  //       res();
  //     },1000);

  //   })

 

 
    
  // console.log("these are the cpatures", capture, "and ", imageSrc)
  // debugger
  // var combined = []
  // combined.push(capture, imageSrc)
  // let test = document.createElement('div')
  // test.style.backgroundImage = `url(${imageSrc})`
  // console.log(test)
  // document.body.appendChild(test)
  // console.log(html2canvas(div))
  // debugger
  // html2canvas(div).then(canvas => {
  //   document.body.appendChild(canvas)
     
  // })
  // combined.map((p) => {
  //   return html2canvas(p).then(canvas => {
  //     document.body.appendChild(canvas)
  //   })
  // })
    
  // console.log(capture);
  //  html2canvas(capture).then(canvas => {
  //       document.body.appendChild(canvas)
  //     })
    
  // let frameImage = html2canvas(capture).then(canvas => {
  //   console.log(frameImage)
  // })
  
    
  
  // const imageSrc = this.webcam.getScreenshot()
  // console.log("%c PhotoTake props from redux are:", 'color: pink', this.props.photoCaptured);
  // this.props.photoCaptured ? imageSrc : null

  // this.props.photoCaptured(imageSrc)
  // { test() }
// }


{/* <img
                id="image"
                alt="images"
                name="image-frame"
              src={this.props.frame}
              style={{position: 'absolute'}}
              /> */}