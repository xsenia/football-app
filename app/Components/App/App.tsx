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

    }


    private sortBy = (key:any) => {
        alert(key);
        /*const keySort = key;
        let tableSort:any = tableInfo.sort((objA: any, objB: any) => {
            return objA[keySort] > objB[keySort];
        });
        this.setState({table: tableSort}, () => console.log(this.state));*/
    }

    private updateState = (ft:any) => {
        this.setState({table: ft});
    }


    render(): JSX.Element {
        console.log('this.state.table ',this.state.table);
        return(
            <div className="app-wrap">
                <Filter
                    title="Фильтр"
                    table={this.state.table}
                    update={this.updateState}
                />
                <table className="table">
                    <TableHeader
                        sortBy={this.sortBy}
                    />
                    <TableRow
                        tableInfo={this.state.table}
                    />
                </table>
            </div>
        )
    }
}