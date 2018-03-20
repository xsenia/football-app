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




    private sortByDecreasing = (sortKey:any) => {
        let tableSort:any = tableInfo.sort((objA: any, objB: any) => {
            if (objA[sortKey] < objB[sortKey]) return 1;
            if (objA[sortKey] > objB[sortKey]) return -1;
            return 0;
        });
        this.setState({table: tableSort}, () => console.log(this.state));
    }
    private sortByIncreasing = (sortKey:any) => {
        let tableSort:any = tableInfo.sort((objA: any, objB: any) => {
            return (objA[sortKey] < objB[sortKey]) ? -1 : (objA[sortKey] > objB[sortKey]) ? 1 : 0;
        });
        this.setState({table: tableSort}, () => console.log(this.state));
    }

    private updateState = (ft:any) => {
        this.setState({table: ft});
    }


    render(): JSX.Element {
        //console.log('this.state.table ',this.state.table);
        return(
            <div className="app-wrap">
                <Filter
                    title="Фильтр"
                    table={this.state.table}
                    update={this.updateState}
                />
                <table className="table">
                    <TableHeader
                        sortByDecreasing={this.sortByDecreasing}
                        sortByIncreasing={this.sortByIncreasing}
                    />
                    <TableRow
                        tableInfo={this.state.table}
                    />
                </table>
            </div>
        )
    }
}