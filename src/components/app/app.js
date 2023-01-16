import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: false, rice: false, id: 1 },
                { name: "Alex M.", salary: 3000, increase: false, rice: false, id: 2 },
                { name: "Carl W.", salary: 5000, increase: false, rice: false, id: 3 },
            ],
            term: "",
            filter: "",
        };
        this.maxId = 4;
    }

    onToggleProp = (e, id) => {
        let prop = e.currentTarget.getAttribute("data-toggle");
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    onDelete = (id) => {
        this.setState(({ data }) => ({
            data: data.filter((item) => item.id !== id),
        }));
    };

    onAddItem = (e, name, salary) => {
        e.preventDefault();
        if (name.trim() !== "" || salary.trim() !== "" ? true : false) {
            this.maxId++;
            this.setState(({ data }) => ({
                data: [...data, { name: name, salary: salary, increase: false, rice: false, id: this.maxId }],
            }));
        }
    };

    searchEmp = (items, term) => {
        if (term.trim() === "") {
            return items;
        }

        return items.filter((item) => {
            let arr = item.name.split(" ");
            if (arr.filter((arrItem) => arrItem.toLowerCase().startsWith(term.toLowerCase())).length > 0) {
                return item;
            }
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter((item) => item.increase).length;
        const visibleData = this.searchEmp(data, term);
        return (
            <>
                <div className="app">
                    <AppInfo employees={employees} increased={increased} />
                </div>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>
                <EmployeesList data={visibleData} onDelete={this.onDelete} onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAddItem={this.onAddItem} />
            </>
        );
    }
}
