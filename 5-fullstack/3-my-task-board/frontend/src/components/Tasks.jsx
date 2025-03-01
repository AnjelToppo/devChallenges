import Task from "./Task.jsx";
import NewTask from "./NewTask.jsx";

export default function Tasks({board, isTaskSelected, onTaskClick, setIsNewTask, setIsTaskSelected}) {
    // console.log(tasks)
    return (
        <main className="tasks">
            <ul className="tasks__list">
                {board && board.tasks.map(task => <Task key={task._id} icon={task.icon} name={task.name} description={task.description} status={task.status} id={task._id} isTaskSelected={isTaskSelected} onTaskClick={onTaskClick} setIsTaskSelected={setIsTaskSelected}/>)}
                {/*<Task icon='⏰' name='Task in Progress' status='in-progress' />*/}
                {/*<Task icon='🏋️' name='Task Completed' status='completed' />*/}
                {/*<Task icon='☕' name="Task Won't Do" status='wont-do' />*/}
                {/*<Task icon='📚' name='Task To Do' status='to-do' description='Work on a Challenge on devChallenges.io, learn TypeScrpt' />*/}
                <NewTask onNewTaskClick={onTaskClick} setIsNewTask={setIsNewTask} />
            </ul>
        </main>
    )
}