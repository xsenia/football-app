import * as React from "react";
import {leaguesList} from "../../Helpers/getData";
import {FiltersHandler} from "../../Helpers/FiltersHandler";
import {tableInfo} from "../../Helpers/getData";

interface AppProps {
    title?: string;
    table: any,
    update: any
}

    export class Filter extends React.Component<AppProps, {valueSelect:string, valueTeamsName:string,radioGroup:{win: boolean,draw: boolean,lose: boolean}}> {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            valueSelect: undefined,
            valueTeamsName: undefined,
            radioGroup: {
                win: false,
                draw: false,
                lose: false
            }
        };
    }

    private handleSubmit = (event:any) => {
        event.preventDefault();
        let valueSelect : string = this.state.valueSelect;
        let valueTeamsName : string = this.state.valueTeamsName;
        let valueRadio : any = Object.keys(this.state.radioGroup);
        let setValue = {tableInfo, valueSelect, valueTeamsName, valueRadio};
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

    private handleRadio = (event:any) => {
        let stateGroup:any = {};
        stateGroup[event.target.value] = event.target.checked;
        console.log('stateGroup',stateGroup);
        this.setState({radioGroup: stateGroup},() => {console.log(this.state);});
    }



    render(): JSX.Element {
        return (
            <div className="filter-wrap">
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label>Название домашней команды</label>
                        <input
                            id="teamName"
                            placeholder="Название домашней команды"
                            type="text"
                            value={this.state.valueTeamsName}
                            onChange={this.handleChangeTeamsName}
                        />
                    </div>
                    <div className="row">
                        <label>Название лиги</label>
                        <select
                            id="leaguesName"
                            defaultValue={this.state.valueSelect}
                            onChange={this.handleChangeSelect}
                        >
                            {leaguesList.map((name:string, i:number) => {
                                return (
                                    <option
                                        key={i}
                                        value={name}>{name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="row">
                        <label>Победа
                        <input
                            type="radio"
                            value="win"
                            checked={this.state.radioGroup.win}
                            onChange={this.handleRadio}
                        /></label>
                        <label>Ничья
                        <input
                            type="radio"
                            value="draw"
                            checked={this.state.radioGroup.draw}
                            onChange={this.handleRadio}
                        /></label>
                        <label>Поражение
                        <input
                            type="radio"
                            value="lose"
                            checked={this.state.radioGroup.lose}
                            onChange={this.handleRadio}
                        /></label>
                    </div>
                    <input type="submit" value="Показать" />
                </form>
            </div>
        );
    }
}