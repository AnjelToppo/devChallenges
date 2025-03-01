import AppLogo from './../assets/Logo.svg';
import EditPen from './../assets/Edit_duotone.svg';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Title({name, description, setBoard}) {
    const [isShowToast, setIsShowToast] = useState(false);
    const [isBoardEdit, setIsBoardEdit] = useState(false);
    const [boardTitle, setBoardTitle] = useState({
        name,
        description
    })
    const params = useParams();

    function handleBoardChange(property, value) {
        setBoardTitle(bt => ({...bt, [property]: value}))
    }

    function handleEditClick() {
        setIsBoardEdit(true);
    }

    async function handleSaveClick() {
        if (boardTitle.name.trim() === "" || boardTitle.description.trim() === "") {
            setIsShowToast(true);
            return;
        }
        await fetch(`/api/v1/boards/${params.boardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(boardTitle)
        });
        const board = await fetch(`/api/v1/boards/${params.boardId}`);
        const data = await board.json();
        setBoard(data.data.board);
        setIsBoardEdit(false);
        setIsShowToast(false);
    }

    useEffect(() => {
        setBoardTitle({
            name,
            description
        })
    }, [name, description])

    return (
        <header className="board">
            <a href="/"><img className="icon" src={AppLogo} alt=""/></a>
            {isBoardEdit && <div className="board-form__details">
                <form className="board-form">
                    {isShowToast && <p style={{color: "red", fontSize: "1.6rem"}}>Please fill all fields.</p>}
                    <div className="board-form-pair board-form__name">
                        <label className="board-form__label" htmlFor="board-name">Board name</label>
                        <input value={boardTitle.name} onChange={(e) => handleBoardChange('name', e.target.value)}
                               className="board-form__input board-form__input--name" type="text" id="board-name"/>
                    </div>
                    <div className="board-form-pair board-form__description">
                        <label className="board-form__label" htmlFor="board-description">Board description</label>
                        <input value={boardTitle.description} onChange={(e) => handleBoardChange('description', e.target.value)}
                               className="board-form__input" type="text" id="board-description"/>
                    </div>
                    <button className="btn board-form__save-btn" type="button" onClick={handleSaveClick}>Save</button>
                </form>
            </div>}
            {!isBoardEdit && <div className="board__details">
                <h1 className="board__details--title">{name}</h1>
                <p className="board__details--description">{description}</p>
            </div>}
            {!isBoardEdit &&
                <button onClick={handleEditClick} className="btn edit-btn"><img src={EditPen} alt=""/></button>}
        </header>
    )
}