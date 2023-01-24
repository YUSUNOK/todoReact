import { useEffect, useState } from "react";
import './Content.scss';

function Content() {

    const [hiddenChoose, setHiddenChoose] = useState(false);
    const [inputContent, setInputContent] = useState("");
    const [todoList, setTodoList] = useState<string[]>([]);

    const handleAddTodo = () => {
        if (hiddenChoose === false) setHiddenChoose((current) => !(current));
    }
    const handleSubmitControl = (evt: React.SyntheticEvent) => {
        evt.preventDefault();
        setTodoList((current) => [...current, inputContent]);

        setInputContent("");

    }
    const handleInputContentChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputContent(evt.target.value);
    }

    const handleTodoItemEmoji = () => {

    }

    return (
        <div className="todo-item-content">
            <div className="item">{todoList[1]}</div>
            <div className="item">{todoList[2]}</div>
            <div className="item">{todoList[3]}</div>
            <div className="item">{todoList[4]}</div>
            <div className="item">{todoList[5]}</div>
            <div className="item">{todoList[6]}</div>
            <div className="item">{todoList[7]}</div>
            <div className="item">{todoList[8]}</div>
            <div className="item">{todoList[9]}</div>
            <div className="item">{todoList[10]}</div>
            <div className="item">{todoList[11]}</div>
            <div className="to-do-input" onClick={handleAddTodo}>
                <span className="to-do-input-text-emoji" hidden={hiddenChoose}> &nbsp;➕&nbsp;</span>
                <span className="to-do-input-text" hidden={hiddenChoose}> 작업 추가</span>

                <form className="to-do-input-form" onSubmit={handleSubmitControl}>
                    <span className="to-do-input-input-emoji" hidden={!hiddenChoose}> &nbsp;⚪&nbsp;</span>
                    <input className="to-do-input-input" size={50} type="text" hidden={!hiddenChoose} value={inputContent} onChange={handleInputContentChange} />
                </form>
            </div>
        </div>
    )
}

export default Content as React.FunctionComponent;