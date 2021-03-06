import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskDetail from 'routes/task';
import ProjectMenu from 'components/projectMenu';
import styles from './board.css';
import Scrum from './Scrum';
import Stage from './Stage';
import Task from './Task';

export default class Board extends Component {

  static propTypes = {
    isOpenMenu: PropTypes.bool,
    
  }

  state = {
    isOpenTaskDetail: false,
  }

  openTaskDetail = () => {
    this.setState({
      isOpenTaskDetail: true
    });
  }

  closeTaskDetail = () => {
    this.setState({
      isOpenTaskDetail: false
    });
  }

  render() {
    const { isOpenMenu, closeMenu, stages } = this.props;
    const { isOpenTaskDetail } = this.state;

    return (
      <div className={styles.board}>
        <Scrum>
          {stages.map((item, idx) => (
            <Stage data={item} key={idx}/>
          ))}
          <Stage stageName="待处理">
            <Task
              data={{ content: '北控清洁能源项目对接' }}
              openTaskDetail={this.openTaskDetail}
            />
          </Stage>
          {/* <Stage stageName="进行中" />
          <Stage stageName="测试中" />
          <Stage stageName="已测试" />
          <Stage stageName="已通过" />
          <Stage stageName="已完成" />
          <Stage create /> */}
        </Scrum>
        <ProjectMenu
          isOpenMenu={isOpenMenu}
          closeMenu={closeMenu}
        />
        {isOpenTaskDetail && (
          <TaskDetail
            visible={true}
            closeTaskDetail={this.closeTaskDetail}
          />)}
      </div>
    );
  }
}