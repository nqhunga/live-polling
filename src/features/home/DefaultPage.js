import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormGroup, FormControl, Button, Form, Col } from 'react-bootstrap';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  // receive roomid from input
  getRoomId = (e) => {
    this.props.actions.enterRoomId(e.target.value);
  }
  // load polling component
  goTo = () => {
    this.props.actions.joinVote(this.props.home.joinRoom);
  }
  // load create-new component to create new poll
  letCreateNew = () => {
    this.props.actions.toCreateNew();
  }

  render() {
    const { toVoteRoom, toCreateNew, roomId } = this.props.home;
    if (toVoteRoom) {
      return <Redirect to={`/polling/${roomId}`} />
    }
    if (toCreateNew) {
      return <Redirect to='/create-new' />
    }
    return (
      <div className="home-default-page">
        <Form className="roomId">
          <FormGroup>
            <Col sm={8}>
              <FormControl
                type="text"
                placeholder={`Vote ID`}
                onChange={e => this.getRoomId(e)}
              />
            </Col>
            <Col sm={2}><Button onClick={this.goTo}>Join Vote!</Button></Col>
          </FormGroup>
        </Form>
        <div className="create-new">
          <Button onClick={this.letCreateNew}>Create new Vote!</Button>
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
