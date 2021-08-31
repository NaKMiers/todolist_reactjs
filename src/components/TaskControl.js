import React, { Component } from 'react'
import TaskSearchControl from './TaskSearchControl'
import TaskSortControl from './TaskSortControl'

class TaskControl extends Component {
    render() {
        return (
            <div className="row task-control">
                <TaskSearchControl />
                <TaskSortControl />
            </div>
        )
    }
}

export default TaskControl
