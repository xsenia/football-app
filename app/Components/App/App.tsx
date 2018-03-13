import * as React from "react";
import {headers} from "../../Helpers/Data";
import {tableInfo} from "../../Helpers/getData";
import {Filter} from "./Filter";
import {Table} from "./Table";

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

    private getWDL(str:string) {
        let wdl = str.split('');
        let wdlMap = wdl.map((elem:any, i:number) => {
                return (
                    <span className={elem} key={i}>{elem}</span>
                );
            }
        );
        return(wdlMap);
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
                                <div className="w-d-l">
                                    <span className="win">{elem.homeW}</span>&nbsp;-&nbsp;
                                    <span className="draw">{elem.homeD}</span>&nbsp;-&nbsp;
                                    <span className="lose">{elem.homeL}</span>
                                </div>
                            </td>
                            <td><div className="total">{this.getWDL(elem.homeTotal)}</div></td>
                            <td>
                                <div className="w-d-l">
                                    <span className="win">{elem.awayW}</span> -
                                    <span className="draw">{elem.awayD}</span> -
                                    <span className="lose">{elem.awayL}</span>
                                </div>
                            </td>
                            <td><div className="total">{this.getWDL(elem.awayTotal)}</div></td>
                        </tr>
                    )
                })}
            </tbody>
        );
    }



    render(): JSX.Element {
        return(
            <div className="app-wrap">
                <Filter
                    title="Фильтр"
                />
                <Table

                />
                <table className="table">
                    {this.renderHeader()}
                    {this.renderBody()}
                </table>
            </div>
        )
    }
}