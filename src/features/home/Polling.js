import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { FormGroup, Form, Radio, Button, Alert } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import * as io from 'socket.io-client';

export class Polling extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.socket = io('http://localhost:3000');
    const id = this.props.home.roomId
    this.socket.on('ok', () => {
      console.log('connect');
      this.socket.emit('join', { id });
      this.socket.on('update', 
      () => this.props.actions.joinVote(this.props.home.roomId));
    })
  }

  chooseVote = (e) => {
    this.props.actions.chooseVote(e.target.value);
  }

  onVote = (e) => {
    this.updateSocket(this.props.home.roomId);
    this.props.actions.addAlert();
    setTimeout(() => this.props.actions.removeAlert(), 500);
  }

  updateSocket = (id) => {
    const socket = io('http://localhost:3000');
    const incAnswer= this.props.home.voteTo;
    const letVote = this.props.home.answersVote.map(a => {
      return a.answer === incAnswer ? 1 : 0
    })
    socket.on('ok', () => {
      console.log('connect');
      socket.emit('join', { id });
      socket.emit('update', {
        id,
        vote: letVote
      });
    });
  }

  showAlertSubmit = (voteTo) => {
    const temp = this.props.home.answersVote.filter(answer => {
      return answer.answer === voteTo ?
        answer : ''
    })
    return temp[0].text
  }

  render() {
    const { questionVote, answersVote, voteTo, showAlert, roomId } = this.props.home;
    const data = answers => {
      return answers.map(a => {
        return {
          name: a.answer,
          point: a.count
        }
      })
    }

    const radioOption = (answers) => {
      return answers.map((answer) => {
        return (<Radio name="answer group"
          value={answer.answer}
          key={answer.answer}
          onChange={e => this.chooseVote(e)}
        >
          {answer.answer}
        </Radio>)
      })
    }
    return (
      <div className="home-polling">
        {showAlert ?
          <Alert>
            You submit vote for {this.showAlertSubmit(voteTo)}
          </Alert> : ''
        }

        <div className="vote-here">
          <h2>Give your Vote here!</h2>
          <h3>{questionVote}</h3>
          <i>Id for this Vote <strong>{roomId}</strong></i>
          <Form>
            <FormGroup>
              {radioOption(answersVote)}
            </FormGroup>
            <Button onClick={e => this.onVote()}>Vote!</Button>
          </Form>
        </div>
        <div className="show-graph">
          <h2>Current Results</h2>
          <BarChart width={600} height={300} data={data(answersVote)}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="point" fill="#8884d8" />
          </BarChart>
        </div>

      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Polling);
