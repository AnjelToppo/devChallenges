import CloseIcon from "./../assets/close_ring_duotone-1.svg";
import ProgressIcon from './../assets/Time_atack_duotone.svg';
import CompletedIcon from './../assets/Done_round.svg';
import WontDoIcon from './../assets/close_ring_duotone.svg';
import TrashIcon from './../assets/Trash.svg';
import CheckIcon from './../assets/Done_round.svg';
import {useState} from "react";
import {useParams} from "react-router-dom";

const ICONS = ['👨‍💻', '💬', '☕', '🏋️', '📚', '⏰'];

export default function Modal({task= {
    name: "",
    description: "",
    icon: "",
    status: ""
}, setIsTaskSelected, setBoard, isNewTask, setIsNewTask, onCloseModal}) {
    const params = useParams();
    const [showToast, setShowToast] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task);

    function handleCloseModal() {
        setIsTaskSelected(null);
        onCloseModal(false);
        setIsNewTask(false);
    }

    function handleTaskChange(property, value) {
        setUpdatedTask(ut => ({...ut, [property]: value}));
    }

    async function handleDeleteClick() {
        await fetch(`/api/v1/tasks/${updatedTask._id}`, {
            method: "DELETE"
        })
        const board = await fetch(`/api/v1/boards/${updatedTask.board}`);
        const data = await board.json();
        setIsTaskSelected(null);
        setBoard(data.data.board);
        onCloseModal(false);
    }

    async function handleSaveClick() {
        if (updatedTask.name === "" || updatedTask.icon === "") {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            return;
        }
        await fetch(`/api/v1/tasks/${updatedTask._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });
        const board = await fetch(`/api/v1/boards/${updatedTask.board}`);
        const data = await board.json();
        setIsTaskSelected(null);
        setBoard(data.data.board);
        onCloseModal(false);
    }

    async function handleCreateClick() {
        // console.log(updatedTask, JSON.stringify(updatedTask))
        // return;
        if (updatedTask.name === "" || updatedTask.icon === "") {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            return;
        }
        updatedTask.board = params.boardId;
        await fetch(`/api/v1/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });
        const board = await fetch(`/api/v1/boards/${updatedTask.board}`);
        const data = await board.json();
        setIsNewTask(false);
        setBoard(data.data.board);
        onCloseModal(false);
        setIsTaskSelected(null);
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <form className="form" action="">
                    <div className="form__header">
                        {!isNewTask && <h5 className="form__heading-1">Task details</h5>}
                        {isNewTask && <h5 className="form__heading-1">Create Task</h5>}
                        <button type="button" className="btn close-btn" onClick={handleCloseModal}>
                            <img src={CloseIcon} alt=""/>
                        </button>
                    </div>
                    {showToast && <p style={{color: "red", fontSize: "1.6rem"}}>Please fill all fields</p>}
                    <div className="form__pair">
                        <label className="task__label" htmlFor="task-name">Task name</label>
                        <input value={updatedTask.name}
                               onChange={(e) => handleTaskChange('name', e.target.value)} type="text"
                               id="task-name" className="task__input" placeholder="Enter task name"/>
                    </div>
                    <div className="form__pair">
                        <label className="task__label" htmlFor="task-description">Description</label>
                        <textarea value={updatedTask.description}
                                  onChange={(e) => handleTaskChange('description', e.target.value)}
                                  id="task-description"
                                  className="task__input task__input--description"
                                  placeholder="Enter a short description"/>
                    </div>
                    <div className="form__pair">
                        <p className="task__label">Icon</p>
                        <div className="icon-container">
                            {ICONS.map(icon => <button key={icon}
                                                       onClick={(e) => handleTaskChange('icon', e.target.innerHTML)}
                                                       type="button"
                                                       className={icon === updatedTask.icon ? "btn task-icon-container selected-task-icon-container" : "btn task-icon-container"}>
                                {icon}
                            </button>)}
                        </div>
                    </div>
                    <div className="form__pair">
                        <p className="task__label">Status</p>
                        <div className="status-container">
                            <button
                                className={updatedTask.status === "In Progress" ? "btn status__pair selected-status__pair" : "btn status__pair"}
                                type="button" onClick={() => handleTaskChange('status', 'In Progress')}>
                                <div className="tasks__status-container tasks__status-container--in-progress">
                                    <img src={ProgressIcon} alt=""/>
                                </div>
                                <p className="status-text">In Progress</p>
                                {updatedTask.status === "In Progress" && <div className="selected-status">
                                    <img className="checked-icon" src={CheckIcon} alt=""/>
                                </div>}

                            </button>
                            <button
                                className={updatedTask.status === "Completed" ? "btn status__pair selected-status__pair" : "btn status__pair"}
                                type="button" onClick={() => handleTaskChange('status', 'Completed')}>
                                <div className="tasks__status-container tasks__status-container--completed">
                                    <img src={CompletedIcon} alt=""/>
                                </div>
                                <p className="status-text">Completed</p>
                                {updatedTask.status === "Completed" && <div className="selected-status">
                                    <img className="checked-icon" src={CheckIcon} alt=""/>
                                </div>}
                            </button>
                            <button
                                className={updatedTask.status === "Won't do" ? "btn status__pair selected-status__pair" : "btn status__pair"}
                                type="button" onClick={() => handleTaskChange('status', "Won't do")}>
                                <div className="tasks__status-container tasks__status-container--wont-do">
                                    <img src={WontDoIcon} alt=""/>
                                </div>
                                <p className="status-text">Won&apos;t do</p>
                                {updatedTask.status === "Won't do" && <div className="selected-status">
                                    <img className="checked-icon" src={CheckIcon} alt=""/>
                                </div>}
                            </button>
                        </div>
                    </div>
                    <div className="cta">
                        {!isNewTask && <button onClick={handleDeleteClick} className="btn cta-btn cta-btn__delete"
                                 type="button">Delete <img src={TrashIcon}
                                                           alt=""/></button>}
                        {!isNewTask && <button onClick={handleSaveClick} className="btn cta-btn" type="button">Save <img
                            src={CheckIcon} alt=""/></button>}
                        {isNewTask && <button onClick={handleCreateClick} className="btn cta-btn" type="button">Create <img
                            src={CheckIcon} alt=""/></button>}
                    </div>
                </form>
            </div>
        </div>
    )
}