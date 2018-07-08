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

  newQuestion = (e) => {
    this.props.actions.addNewQuestion(e.target.value);
  }

  newAnswer = (e) => {
    const answerData = {
      text: e.target.value,
    }
    this.props.actions.addNewAnswer(answerData, e.target.name);
  }

  addMoreAnswer = () => {
    const id = v4();
    this.props.actions.addMoreAnswers(id);
  }

  deleteAnswer = (e,answer) => {
    this.props.actions.deleteAnswer(answer);
  }

  onSubmit = () => {
    this.props.actions.changeToGraph();
  }

  render() {
    const { question, answers, toGraph } = this.props.home;
    const checkAnswer = (answers) => {
      return answers.every(answer =>  answer.text.length > 0);
    }
    const isEnabled = question.text.length > 0 && checkAnswer(answers);
    if (toGraph) {
      return <Redirect to='/polling' />
    }
    const renderAnswerInput = (answers) => {
      
      console.log(answers);
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
        <Form horizontal>
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
          <Col sm={12}>
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
