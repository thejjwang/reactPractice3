
const ToDoList2 = ({array}) => {

    return (
        <>
            {array.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
                ))}
        </>
    )
}

export default ToDoList2;