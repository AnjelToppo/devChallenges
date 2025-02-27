import CloseIcon from "./../assets/close_ring_duotone-1.svg";
import ProgressIcon from './../assets/Time_atack_duotone.svg';
import CompletedIcon from './../assets/Done_round.svg';
import WontDoIcon from './../assets/close_ring_duotone.svg';
import TrashIcon from './../assets/Trash.svg';
import CheckIcon from './../assets/Done_round.svg';

export default function Modal () {
    return (
        <div className="modal">
            <div className="modal__content">
                <form className="form" action="">
                    <div className="form__header">
                        <h5 className="form__heading-1">Task details</h5>
                        <button type="button" className="btn close-btn">
                            <img src={CloseIcon} alt=""/>
                        </button>
                    </div>
                    <div className="form__pair">
                        <label className="task__label" htmlFor="task-name">Task name</label>
                        <input type="text" id="task-name" className="task__input" placeholder="Enter task name"/>
                    </div>
                    <div className="form__pair">
                        <label className="task__label" htmlFor="task-description">Description</label>
                        <textarea type="text" id="task-description" className="task__input task__input--description" placeholder="Enter a short description"/>
                    </div>
                    <div className="form__pair">
                        <p className="task__label">Icon</p>
                        <div className="icon-container">
                            <button type="button" className="btn task-icon-container">
                                🧑🏻‍💻
                            </button>
                            <button type="button" className="btn task-icon-container">
                                💬
                            </button>
                            <button type="button" className="btn task-icon-container">
                                ☕
                            </button>
                            <button type="button" className="btn task-icon-container">
                                🏋️
                            </button>
                            <button type="button" className="btn task-icon-container">
                                📚
                            </button>
                            <button type="button" className="btn task-icon-container">
                                ⏰
                            </button>
                        </div>
                    </div>
                    <div className="form__pair">
                        <p className="task__label">Status</p>
                        <div className="status-container">
                            <button className="btn status__pair" type="button">
                                <div className="tasks__status-container tasks__status-container--in-progress">
                                    <img src={ProgressIcon} alt=""/>
                                </div>
                                <p className="status-text">In Progress</p>
                                <div className="selected-status">
                                    <img className="checked-icon" src={CheckIcon} alt=""/>
                                </div>

                            </button>
                            <button className="btn status__pair" type="button">
                                <div className="tasks__status-container tasks__status-container--completed">
                                    <img src={CompletedIcon} alt=""/>
                                </div>
                                <p className="status-text">Completed</p>
                            </button>
                            <button className="btn status__pair" type="button">
                                <div className="tasks__status-container tasks__status-container--wont-do">
                                    <img src={WontDoIcon} alt=""/>
                                </div>
                                <p className="status-text">Won&apos;t do</p>
                            </button>
                        </div>
                    </div>
                    <div className="cta">
                        <button className="btn cta-btn cta-btn__delete" type="button">Delete <img src={TrashIcon} alt=""/></button>
                        <button className="btn cta-btn" type="button">Save <img src={CheckIcon} alt=""/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}