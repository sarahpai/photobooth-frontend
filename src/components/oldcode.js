{/* <Grid textAlign='center' style={{ height: '100%', margin: '15%' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header id="header" as='h2' textAlign='center'>
						<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQa_zYEX4rbL-q4QxOiAqrRF2dI4jW8Fu9B4D0AJHFE8gfC2V' /> Log-in to your account
					</Header>
						<Form onSubmit={this.handleLoginSubmit}
							size='large'
							loading={this.props.authenticatingUser}
							error={this.props.failedLogin}
						>
						<Message error header={this.props.failedLogin ? this.props.error : null} />
						<Segment stacked>
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
							<Button id='button' fluid size='large'>
								Login
							</Button>
						</Segment>
						</Form>
						<Message>
							New to us? <a href='/signup'>Sign Up</a>
						</Message>
					</Grid.Column>
				</Grid> */}