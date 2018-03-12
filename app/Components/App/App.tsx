import * as React from "react";
import {headers} from "../../Helpers/Data";
import {tableInfo} from "../../Helpers/getData";

export class App extends React.Component {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            games: tableInfo
        };
    }

    private renderHeader(): JSX.Element {
        return(
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Лига</th>
                    <th>Команды</th>
                    <th>Счет</th>
                    <th>Результ игры</th>
                    <th>Домашняя команда - очки</th>
                    <th>Домашняя команда - форма</th>
                    <th>Гостевая команда - очки</th>
                    <th>Гостевая команда - форма</th>
                </tr>
            </thead>
        );
    }

    private renderBody(): JSX.Element {
        return(
            <tbody>
                {tableInfo.map((elem:any, i:number) => {
                    return (
                        <tr key={i}>
                            <td>{elem.date}</td>
                            <td>{elem.ligue}</td>
                            <td>{elem.teamHome} - {elem.teamAway}</td>
                            <td>{elem.score}</td>
                            <td>{elem.resultWord}</td>
                            <td>
                                <span className="win">{elem.homeW}</span> -
                                <span className="draw">{elem.homeD}</span> -
                                <span className="lose">{elem.homeL}</span>
                            </td>
                            <td>{elem.homeTotal}</td>
                            <td>
                                <span className="win">{elem.awayW}</span> -
                                <span className="draw">{elem.awayD}</span> -
                                <span className="lose">{elem.awayL}</span>
                            </td>
                            <td>{elem.awayTotal}</td>
                        </tr>
                    )
                })}
            </tbody>
        );
    }



    render(): JSX.Element {
        return(
            <div>
                <table className="table">
                    {this.renderHeader()}
                    {this.renderBody()}

                </table>
            </div>
        )
    }
}