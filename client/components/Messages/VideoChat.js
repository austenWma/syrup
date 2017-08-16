import React from 'react';
import {render} from 'react-dom';
import io from 'socket.io-client';
import Peer from 'simple-peer';

class VideoChat extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let peer = new Peer({
        initiator: location.hash === '#init',
        trickle: false,
        stream:stream
    })
    this.socket = io('/');
    // '/' will trigger the .on('connection') event on the server side, connects everytime the component mounts
    this.socket.emit('promptVideoChat', this.props.location.query.firstname, localStorage.firstname)
    this.socket.on('agreeVideoChat', () => {
      alert('VIDEO CHAT AGREEMENT RECEIVED')
    });
  }


  render() {
    console.log('NAAAME', this.props)
    return (
      <div className='videoChatBox'>
        <h1>HELLOOOOO</h1>
      </div>
    );
  }
};
export default VideoChat;