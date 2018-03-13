import * as React from "react";
import {leaguesList} from "../../Helpers/getData";

interface AppProps {
    title?: string;
}

    export class Filter extends React.Component<AppProps, {}> {
    constructor(props: any, state: any){
        super(props, state);
        console.log(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange(event) {
        this.setState({value: event.target.value});
    }

    private handleSubmit(event) {
        alert('Вы выбрали лигу: ' + this.state.value);
        event.preventDefault();
    }



    render(): JSX.Element {
        return (
            <div className="filter-wrap">
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {leaguesList.map((name) => {
                            return (
                                <option value={name}>{name}</option>
                            );
                        })}
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}