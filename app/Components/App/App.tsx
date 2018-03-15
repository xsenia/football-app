import * as React from "react";
import {tableInfo} from "../../Helpers/getData";
import {Filter} from "./Filter";
import {TableRow} from "./TableRow";
import {TableHeader} from "./TableHeader";

export class App extends React.Component<{}, {table:any}> {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            table: tableInfo
        };
        //console.log(this.state);
    }


    private sortBy = (key:any) => {
        alert(key);
        /*const keySort = key;
        let tableSort:any = tableInfo.sort((objA: any, objB: any) => {
            return objA[keySort] > objB[keySort];
        });
        this.setState({table: tableSort}, () => console.log(this.state));*/
    }




    render(): JSX.Element {
        return(
            <div className="app-wrap">
                <Filter
                    title="Фильтр"
                    table={this.state.table}
                />
                <table className="table">
                    <TableHeader
                        sortBy={this.sortBy}
                    />
                    <TableRow
                        tableInfo={tableInfo}
                    />
                </table>
            </div>
        )
    }
}