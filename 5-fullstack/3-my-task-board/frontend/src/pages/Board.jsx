import {useParams} from "react-router-dom";
import Title from "../components/Title.jsx";
import Tasks from "../components/Tasks.jsx";
import Modal from "../components/Modal.jsx";
import {useEffect, useState} from "react";
import Error from "./Error.jsx";

export default function Board() {
    const [isTaskSelected, setIsTaskSelected] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewTask, setIsNewTask] = useState(false);
    const [board, setBoard] = useState(null);
    const params = useParams();

    useEffect(() => {
        async function fetchBoardDetails() {
            const boardId = params.boardId;
            const response = await fetch(`/api/v1/boards/${boardId}`);
            const data = await response.json();
            if (data.status === 'fail') return;
            setBoard(data.data.board);
        }
        fetchBoardDetails();
    }, []);
    
    if (!board) {
        return <Error />
    }
    return (
        <>
            <Title name={board && board.name} description={board && board.description} setBoard={setBoard} />
            <Tasks board={board} onTaskClick={setIsModalOpen} isTaskSelected={isTaskSelected} setIsNewTask={setIsNewTask} setIsTaskSelected={setIsTaskSelected}/>
            {isModalOpen && <Modal onCloseModal={setIsModalOpen} setIsTaskSelected={setIsTaskSelected} setBoard={setBoard} isNewTask={isNewTask} setIsNewTask={setIsNewTask} task={board.tasks.find(task => task._id === isTaskSelected)}/>}
        </>
    )
}