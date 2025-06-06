import AddTaskIcon from './../assets/Add_round_duotone.svg';

export default function NewTask({onNewTaskClick, setIsNewTask}) {
    function handleNewTaskClick(){
        setIsNewTask(true);
        onNewTaskClick(true);
    }
    return (
        <li onClick={handleNewTaskClick} className="tasks__el tasks__el--new-task new-task">
            <div className="tasks__status-container--new-task">
                <img src={AddTaskIcon} alt=""/>
            </div>
            <h4 className="new-task__title">Add new task</h4>
        </li>
    )
}