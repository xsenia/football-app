import * as React from "react";
import {tableInfo} from "../../Helpers/getData";
import {Filter} from "./Filter";
import {TableRow} from "./TableRow";
import {TableHeader} from "./TableHeader";

export class App extends React.Component {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            games: tableInfo
        };

    }





    render(): JSX.Element {
        return(
            <div className="app-wrap">
                <Filter
                    title="Фильтр"
                />
                <table className="table">
                    <TableHeader />
                    <TableRow
                        tableInfo={tableInfo}
                    />
                </table>
            </div>
        )
    }
}