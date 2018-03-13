import * as React from "react";
import {headers} from "../../Helpers/Data";

import {Filter} from "./Filter";
import {Table} from "./Table";

export class App extends React.Component {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            //games: tableInfo
        };
    }





    render(): JSX.Element {
        return(
            <div className="app-wrap">
                <Filter
                    title="Фильтр"
                />
                <Table  />
            </div>
        )
    }
}