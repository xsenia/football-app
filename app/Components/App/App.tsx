import * as React from "react";
import {headers} from "../../Helpers/Data";
import {tableInfo} from "../../Helpers/getData";

export class App extends React.Component {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            /*games: tableInfo*/
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
                    console.log(elem);
                    return (
                        <tr key={i}>
                            <td>{elem.date}</td>
                            <td>{elem.ligue}</td>
                            <td>{elem.teamHome} - {elem.teamAway}</td>
                            <td>{elem.score}</td>
                            <td>{elem.resultWord}</td>
                            <td>{elem.homeW}-{elem.homeD}-{elem.homeL}</td>
                            <td>{elem.homeTotal}</td>
                            <td>{elem.awayW}-{elem.awayD}-{elem.awayL}</td>
                            <td>{elem.awayTotal}</td>
                        </tr>
                    )
                })}
            </tbody>
        );
    }

/*    private renderBody(): JSX.Element {
        return(
            <tr>
                {tableInfo.map((elem:any, i:number) => {
                    console.log(elem);
                    return (
                        <div key={i}>{elem.teamHome}</div>
                    )

                })}
            </tr>
        );
    }*/


    render(): JSX.Element {
        return(
            <div>
                <table>
                    {this.renderHeader()}
                    {this.renderBody()}

                </table>
            </div>
        )
    }
}