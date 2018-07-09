import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import * as actions from './redux/actions';
import { Redirect } from 'react-router-dom';
import { FormGroup, FormControl, Button, Form, Col, ControlLabel } from 'react-bootstrap';

export class CreateNewPoll extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  // add new question
  newQuestion = (e) => {
    this.props.actions.addNewQuestion(e.target.value);
  }
  // add new answer with onChange input
  newAnswer = (e) => {
    const answerData = {
      text: e.target.value,
    }
    this.props.actions.addNewAnswer(answerData, e.target.name);
  }
  // click to add more answer
  addMoreAnswer = () => {
    const id = v4();
    this.props.actions.addMoreAnswers(id);
  }
  // delete given answer option
  deleteAnswer = (e,answer) => {
    this.props.actions.deleteAnswer(answer);
  }
  // submit question and answer template: get roomId for created vote 
  onSubmit = () => {
    const question = this.props.home.question;
    const answer = this.props.home.answers.map(answer => {
      return answer.answer
    });
    this.props.actions.getRoomId(question, answer);
  }

  render() {
    const { question, answers, toVoteRoom, roomId } = this.props.home;
    const checkAnswer = (answers) => {
      return answers.every(answer =>  answer.answer.length > 0);
    }
    // boolean for check if all inputs are given
    const isEnabled = question.length > 0 && checkAnswer(answers);
    if (toVoteRoom) {
      return <Redirect to={`/polling/${roomId}`} />
    }
    // render input for answer
    const renderAnswerInput = (answers) => {
      return answers.map((answer, index) => {
        return <FormGroup key={answer.id}>
          <Col sm={2}>
            <ControlLabel>Answer {index + 1}</ControlLabel>
          </Col>
          <Col sm={8}>
            <FormControl
              type="text"
              placeholder={`Answer${index + 1}`}
              name={answer.id}
              onChange={e => this.newAnswer(e)}
            />
          </Col>
          <Col sm={2}><Button onClick={e => this.deleteAnswer(e,answer)}>Delete</Button></Col>
        </FormGroup>
      })
    }
    return (
      <div className="home-create-new-poll">
        <Form horizontal className="form-container">
          <FormGroup>
            <Col sm={2}>
              <ControlLabel>Question</ControlLabel>
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Question.."
                onChange={e => this.newQuestion(e)}
              />
            </Col>
          </FormGroup>
          {renderAnswerInput(answers)}
          <Col sm={12} className="submit-wrapper">
            <Button disabled={!isEnabled} onClick={this.onSubmit}>Submit</Button>
            <Button onClick={this.addMoreAnswer}>Add more answer</Button>
          </Col>
        </Form>
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
)(CreateNewPoll);
