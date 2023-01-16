import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

export default function EmployeesList({ data, onDelete, onToggleProp }) {
    return (
        <ul className="app-list list-group">
            {data.map((item) => (
                <EmployeesListItem
                    key={item.id}
                    data={item}
                    onDelete={onDelete}
                    onToggleProp={onToggleProp}
                />
            ))}
        </ul>
    );
}
