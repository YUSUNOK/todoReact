import React, { useState } from "react";

function Title() {
    const [titleText, setTitleText] = useState("제목 없는 목록");
    const [hiddenChoose, setHiddenChoose] = useState(false);

    const handleTitleUpdate = (evt: React.MouseEvent<HTMLElement>) => {
        setHiddenChoose(true);
    }

    const handleInputValue = (evt: React.FormEvent<HTMLInputElement>) => {
        setTitleText(evt.currentTarget.value);
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setHiddenChoose((current) => !(current));
    }

    return (
        <div>
            <h1>
                <span style={{ color: "#92A2F0" }} onClick={handleTitleUpdate}
                    hidden={hiddenChoose}>{titleText}</span>
                <form onSubmit={handleSubmit}>
                    <input style={{ backgroundColor: "#1C1C1C", color: "#92A2F0", height: "33px", fontSize: "33px", fontWeight: "bold", border: "none" }} size={titleText.length + 1} maxLength={255} hidden={!hiddenChoose} type="text" value={titleText} onChange={handleInputValue} />
                </form>
            </h1>
        </div>
    );
}
export default Title;