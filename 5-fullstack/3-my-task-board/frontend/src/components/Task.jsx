import ProgressIcon from './../assets/Time_atack_duotone.svg';
import CompletedIcon from './../assets/Done_round.svg';
import WontDoIcon from './../assets/close_ring_duotone.svg';


export default function Task({icon, name, status, description}) {
    let statusIcon;
    let liClassName = 'tasks__el';
    let taskStatusClassName = 'tasks__status-container margin-left-auto'

    if (status === 'in-progress') {
        liClassName = liClassName + ' tasks__el--in-progress';
        taskStatusClassName = taskStatusClassName + ' tasks__status-container--in-progress';
        statusIcon = ProgressIcon;
    } else if (status === 'completed') {
        liClassName = liClassName + ' tasks__el--completed';
        taskStatusClassName = taskStatusClassName + ' tasks__status-container--completed';
        statusIcon = CompletedIcon;
    } else if (status === 'wont-do') {
        liClassName = liClassName + ' tasks__el--wont-do';
        taskStatusClassName = taskStatusClassName + ' tasks__status-container--wont-do';
        statusIcon = WontDoIcon;
    } else if (status === 'to-do') {
        liClassName = liClassName + ' tasks__el--to-do';
    }

    return (
        <li className={liClassName}>
            <div className="tasks__header">
                <div className="tasks__icon-container">{icon}</div>
                <h3 className="tasks__header--name">{name}</h3>
                <div className={taskStatusClassName}>
                    <img src={statusIcon} alt=""/>
                </div>
            </div>
            <div className="tasks__main">
                <p className="tasks__main--description">{description}</p>
            </div>
        </li>
    )
}