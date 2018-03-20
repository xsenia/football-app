import * as React from "react";
import {leaguesList} from "../../Helpers/getData";
import {FiltersHandler} from "../../Helpers/FiltersHandler";
import {tableInfo} from "../../Helpers/getData";
import {Search} from "./Search";

interface AppProps {
    title?: string;
    table: any,
    update: any
}

    export class Filter extends React.Component<AppProps, {valueSelect:string, valueTeamsName:string,radioGroup:{win: boolean,draw: boolean,lose: boolean},checkboxGroup: {January: boolean,February: boolean}}> {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            valueSelect: undefined,
            valueTeamsName: undefined,
            radioGroup: {
                win: false,
                draw: false,
                lose: false
            },
            checkboxGroup: {
                January: false,
                February: false
            }
        };
    }

    //менять стейт по изменнению value в search
    private stateSearch = (arg:any) => {
        this.setState({valueTeamsName: arg});
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
        this.setState({radioGroup: stateGroup});
    }

    private handleCheckbox = (event:any) => {
        let stateGroup:any = Object.assign(this.state.checkboxGroup);
        stateGroup[event.target.value] = event.target.checked;
        console.log('stateGroup',stateGroup);
        this.setState({checkboxGroup: stateGroup},() => {console.log(this.state);});
    }



    render(): JSX.Element {
        return (
            <div className="filter-wrap">
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <label>Название домашней команды</label>
                        <Search
                            stateSearch={this.stateSearch}
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
                    <div className="b-radio">
                        <input
                            id="radio1"
                            className="radio"
                            type="radio"
                            value="win"
                            checked={this.state.radioGroup.win}
                            onChange={this.handleRadio}
                        />
                        <label htmlFor="radio1">
                            Победа
                        </label>

                        <input
                            id="radio2"
                            className="radio"
                            type="radio"
                            value="draw"
                            checked={this.state.radioGroup.draw}
                            onChange={this.handleRadio}
                        />
                        <label htmlFor="radio2">
                            Ничья
                        </label>

                        <input
                            id="radio3"
                            className="radio"
                            type="radio"
                            value="lose"
                            checked={this.state.radioGroup.lose}
                            onChange={this.handleRadio}
                        />
                        <label htmlFor="radio3">
                            Поражение
                        </label>
                    </div>
                    <div className="b-checkbox">
                        <input
                        id="checkbox1"
                        className="checkbox"
                        type="checkbox"
                        value="January"
                        checked={this.state.checkboxGroup.January}
                        onChange={this.handleCheckbox}
                    />
                        <label htmlFor="checkbox1">
                            Январь
                        </label>
                        <input
                            id="checkbox2"
                            className="checkbox"
                            type="checkbox"
                            value="February"
                            checked={this.state.checkboxGroup.February}
                            onChange={this.handleCheckbox}
                        />
                        <label htmlFor="checkbox2">
                            Февраль
                        </label>
                    </div>
                    <div className="btn-row">
                        <input
                            type="submit"
                            className="btn"
                            value="Показать"
                        />
                    </div>
                </form>
            </div>
        );
    }
}