import { useState } from 'react';


interface Task {
    text: string;
}

function TaskPage() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskText, setNewTaskText] = useState<string>('');
    const [editingText, setEditingText] = useState<string[]>([]);

    const handleAddTask = () => {
        if (newTaskText.trim() === '') return;
        const newTask = { text: newTaskText };
        setTasks([...tasks, newTask]);
        setEditingText([...editingText, newTaskText]);
        setNewTaskText('');
    };

    const handleEditInput = (id: number, _text: string) => {
        const newList = [...editingText]
        newList[id] = _text
        setEditingText(newList);
    };

    const handleEditSave = (id: number) => {
        const newList = [...tasks]
        newList[id] = {...newList[id], text: editingText[id]}
        setTasks(newList);
    };

    const handleDelete = (id:number) => {
        setTasks(tasks.filter((task, index) => index !== id));
        setEditingText(editingText.filter((task, index) => index !== id));
    };

    return (
        <div className="web-border-space">
            <h1>Task Manager</h1>
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>
                    <>
                        Idx : { index }
                        | Edit <input type="text" value={editingText[index]} onChange={(e) => handleEditInput(index, e.target.value)}/>
                        <button onClick={() => handleEditSave(index)}>Edit</button>
                        |Current: {task.text}
                        | <button onClick={() => handleDelete(index)}>Delete</button>
                    </>
                </li>
                ))}
            </ul>
            <div>
                <input type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} placeholder="Enter new task"/>
                <button onClick={handleAddTask}>Add</button>
            </div>
        </div>
    );
}

export default TaskPage;