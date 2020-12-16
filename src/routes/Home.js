import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }){
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    )
}

// mapStateToProps?: (state, ownProps?) => Object
function mapStateToProps(state) {
    return { toDos: state };
}

// mapDispatchToProps
function mapDispatchToProps(dispatch, ownProps){
    // return { dispatch };
    // 새로운 props 속성을 전달하도록 한다.
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);