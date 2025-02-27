import Task from "./Task.jsx";
import NewTask from "./NewTask.jsx";

export default function Tasks() {
    return (
        <main className="tasks">
            <ul className="tasks__list">
                <Task icon='⏰' name='Task in Progress' status='in-progress' />
                <Task icon='🏋️' name='Task Completed' status='completed' />
                <Task icon='☕' name="Task Won't Do" status='wont-do' />
                <Task icon='📚' name='Task To Do' status='to-do' description='Work on a Challenge on devChallenges.io, learn TypeScrpt' />
                <NewTask />
            </ul>
        </main>
    )
}