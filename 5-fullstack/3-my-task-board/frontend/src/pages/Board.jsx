import {useParams} from "react-router-dom";
import Title from "../components/Title.jsx";
import Tasks from "../components/Tasks.jsx";
import Modal from "../components/Modal.jsx";

export default function Board() {
    const params = useParams();

    return (
        <>
            <Title/>
            <Tasks/>
            {/*<Modal />*/}
        </>
    )
}