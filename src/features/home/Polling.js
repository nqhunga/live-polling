import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { FormGroup, Form, Radio, Button, Alert } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export class Polling extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  chooseVote = (e) => {
    this.props.actions.chooseVote(e.target.value);
  }

  onVote = (e) => {
    this.props.actions.addAlert();
    setTimeout(() => this.props.actions.removeAlert(), 500);
    this.props.actions.submitVote(this.props.home.voteTo);
  }

  showAlertSubmit = (voteTo) => {
    const temp = this.props.home.answers.filter(answer => {
      return answer.id === voteTo ?
        answer : ''
    })
    return temp[0].text
  }

  render() {
    const { question, answers, voteTo, showAlert } = this.props.home;

    const data = answers => {
      return answers.map(answer => {
        return {
          name: answer.text,
          point: answer.point
        }
      })
    }

    const radioOption = (answers) => {
      return answers.map((answer) => {
        return <Radio name="answer group" 
                  value={answer.id}   
                  key={answer.id} 
                  onChange={e => this.chooseVote(e)}
                >
          {answer.text}
        </Radio>
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
          <h3>{question.text}</h3>
          <Form>
            <FormGroup>
              {radioOption(answers)}
            </FormGroup>
            <Button onClick={this.onVote}>Vote!</Button>
          </Form>
        </div>
        <div className="show-graph">
          <h2>Current Results</h2>
          <BarChart width={600} height={300} data={data(answers)}
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
