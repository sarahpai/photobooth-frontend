import React, { Component } from 'react';
import Sound from 'react-sound';

export default class CountDown extends Component {
 
  state = {
      seconds: 0,
      hide: true,
      active_clock:false,
    }

  
  componentWillMount () {
    this.setState({
      seconds: this.props.seconds,
    });
  }

  componentDidMount () {
    this.countDown();
  }

  reset () {
    this.active_clock = true
    this.countDown();
  }

  setactive(){
    this.active_clock = true
    this.countDown()
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log(this)
    console.log("Nextprops",nextProps)
    console.log("Nextstate",nextState)
    return true
  }

  countDown () {
    this.setState({
      hide: false,
    });
    if(!this.active_clock)
    {
      this.setState({
        hide: true,
      });
      return;      
    }

    const countDown = setInterval(() => {
      if (this.state.seconds === 0) {
        if (this.props.onCountDownFinish) {
          this.props.onCountDownFinish();
        }

        this.setState({
          seconds: this.props.seconds,
          hide: true,
        });

        clearInterval(countDown);

        return;
      }

      if (this.props.onCountDownTickTack) {
        this.props.onCountDownTickTack(this.state.seconds);
      }

      this.setState({
        seconds: this.state.seconds - 1,
      });
    }, 1000);
  }

  render () {
    if(this.state.hide)
    {
      return(
        <div className="countdown" style={{position:"absolute",top:"50%",color:"red",width:"100%",textAlign:"center"}}>
          { !this.state.hide && this.state.seconds }
        </div>      
        )
    }
    return (
      <div className="countdown" style={{position:"absolute",top:"50%",color:"red",width:"100%",textAlign:"center"}}>
        { !this.state.hide && this.state.seconds }
        <Sound          
          url="../sound/beep.wav"
          playStatus={Sound.status.PLAYING}
        />
      </div>
    );
  }
}

