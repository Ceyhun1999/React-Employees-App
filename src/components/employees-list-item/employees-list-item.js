import "./employees-list-item.css";

export default function EmployeesListItem(props) {
    let { name, salary, increase, rice, id } = props.data;
    let { onToggleProp, onDelete } = props;
    let className = "list-group-item d-flex justify-content-between";
    if (increase) {
        className += " increase";
    }
    if (rice) {
        className += " like";
    }
    return (
        <li className={className}>
            <span data-toggle="rice" onClick={(e) => onToggleProp(e, id)} className="list-group-item-label">
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + " " + "$"} />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    data-toggle="increase"
                    onClick={(e) => onToggleProp(e, id)}
                    type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>
                <button onClick={() => onDelete(id)} type="button" className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}
