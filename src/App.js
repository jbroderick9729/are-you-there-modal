import React, { Component } from 'react';
import './App.css';
import InactivityModal from './InactivityModal';
import View2 from './View2';

class App extends Component {
  state = {
    showTimeoutModal: false,
    view: 'view 1'
  }

  handleShowView2 = () => {
    this.setState({
      view: 'view 2',
      showTimeoutModal: !this.state.showTimeoutModal
    })
    clearInterval(this.interval);
  }

  handleShowView1 = () => {
    this.setState({
      view: 'view 1'
    })
    setTimeout(this.toggleDisplayModal, 10000)
  }

  initiateCountdown = () => {
    this.interval = setInterval(this.handleShowView2, 5000)
  }

  resetCount = () => {
    clearInterval(this.interval);
    this.setState({
      showTimeoutModal: !this.state.showTimeoutModal
    })
    setTimeout(this.toggleDisplayModal, 10000)
  }

  toggleDisplayModal = () => {
    this.setState({
      showTimeoutModal: !this.state.showTimeoutModal
    })
    this.initiateCountdown();
  }

  componentDidMount() {
    setTimeout(this.toggleDisplayModal, 10000)
  }

  render() {
    return (
      <main>
        {this.state.view === 'view 2' ? <View2 changeView={this.handleShowView1} /> :
          <div className={this.state.showTimeoutModal && "modal-open"}><h1>This is view 1</h1></div>}
        {this.state.showTimeoutModal && <InactivityModal resetCount={this.resetCount} />}
      </main>
    );
  }
}

export default App;
