import * as React from "react";
import {leaguesList} from "../../Helpers/getData";
import {FiltersHandler} from "../../Helpers/FiltersHandler";
import {tableInfo} from "../../Helpers/getData";

interface AppProps {
    title?: string;
    table: any,
    update: any
}

    export class Filter extends React.Component<AppProps, {valueSelect:string, valueTeamsName:string}> {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            valueSelect: undefined,
            valueTeamsName: undefined
        };
    }

    private handleSubmit = (event:any) => {
        event.preventDefault();
        let valueSelect : string = this.state.valueSelect;
        let valueTeamsName : string = this.state.valueTeamsName;
        let setValue = {tableInfo, valueSelect, valueTeamsName};
        let filterTable = FiltersHandler.filterIt(setValue);
        this.getFilterTable(filterTable);
    }

    private getFilterTable = (ft:any) => {
        this.props.update(ft);
    }

    private handleChangeSelect = (event:any) => {
        this.setState({valueSelect: event.target.value});
    }

    private handleChangeTeamsName = (event:any) => {
        this.setState({valueTeamsName: event.target.value});
    }



    render(): JSX.Element {
        return (
            <div className="filter-wrap">
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label>Название команды</label>
                        <input
                            id="teamName"
                            placeholder="Название команды"
                            type="text"
                            value={this.state.valueTeamsName}
                            onChange={this.handleChangeTeamsName}
                        />
                    </div>
                    <div className="row">
                        <label>Название лиги</label>
                        <select id="leaguesName" defaultValue={this.state.valueSelect} onChange={this.handleChangeSelect}>
                            {leaguesList.map((name:string, i:number) => {
                                return (
                                    <option key={i} value={name}>{name}</option>
                                );
                            })}
                        </select>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}