import "./app-filter.css";

export default function AppFilter() {
    const buttonsData = [
        { name: "all", label: "Все сотрудники" },
        { name: "rise", label: "На повышение" },
        { name: "moreThen1000", label: "З/П больше 1000$" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        return (
            <button type="button" className="btn btn-light" key={name}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
           <button type="button" className="btn btn-light">
                Все сотрудники
            </button>
            <button type="button" className="btn btn-outline-light">
                На повышение
            </button>
            <button type="button" className="btn btn-outline-light">
                З/П больше 1000$
            </button> 
        </div>
    );
}
