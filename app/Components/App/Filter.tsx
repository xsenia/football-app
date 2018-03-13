import * as React from "react";
import {leaguesList} from "../../Helpers/getData";

interface AppProps {
    title?: string;
}

    export class Filter extends React.Component<AppProps, {value: string}> {
    constructor(props: any, state: any){
        super(props, state);
        console.log(props);
        this.state = {
            value: undefined
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange(event:any) {
        this.setState({value: event.target.value});
    }

    private handleSubmit(event:any) {
        alert('Вы выбрали лигу: ' + this.state.value);
        event.preventDefault();
    }



    render(): JSX.Element {
        return (
            <div className="filter-wrap">
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label htmlFor="teamName">Название команды</label>
                        <input
                            id="teamName"
                            placeholder="Название команды"
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="leaguesName">Название лиги</label>
                        <select id="leaguesName" value={this.state.value} onChange={this.handleChange}>
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