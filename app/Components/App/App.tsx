import * as React from "react";
import {headers, data, leagues} from "../../Helpers/Data";

export class App extends React.Component {
    constructor(props: any, state: any){
        super(props, state);
        /*const dataClone = JSON.parse(JSON.stringify(data));
        const tableInfo = dataClone.map((game: any, i: number) =>
            {
                return (
                    {
                        "gameId": i,
                        "date": game.eventInfo.date,
                        "ligue": game.eventInfo.leagueId,
                        "teamHome": game.info.home,
                        "teamAway": game.info.away,
                        "score": game.info.score,
                        "resultWord": "win/draw/lose",
                        "homeW": game.results.home.win,
                        "homeD": game.results.home.draw,
                        "homeL": game.results.home.lose,
                        "homeTotal": game.results.home.total,
                        "awayW": game.results.away.win,
                        "awayD": game.results.away.draw,
                        "awayL": game.results.away.lose,
                        "awayTotal": game.results.away.total
                    }
                )
            }
        );
        console.log(tableInfo);*/
        this.state = {
            /*games: tableInfo*/
        };
    }



    private renderHeader(): JSX.Element {
        return(
            <tr>
                {headers.map((head, i) =>
                    <th key={i}>{head}</th>
                )}
            </tr>
        );
    }

    private renderBody(): JSX.Element {
        const dataClone = JSON.parse(JSON.stringify(data));
        const tableInfo = dataClone.map((game: any, i: number) =>
            {
                return (
                    {
                        "gameId": i,
                        "date": game.eventInfo.date,
                        "ligue": game.eventInfo.leagueId,
                        "teamHome": game.info.home,
                        "teamAway": game.info.away,
                        "score": game.info.score,
                        "resultWord": "win/draw/lose",
                        "homeW": game.results.home.win,
                        "homeD": game.results.home.draw,
                        "homeL": game.results.home.lose,
                        "homeTotal": game.results.home.total,
                        "awayW": game.results.away.win,
                        "awayD": game.results.away.draw,
                        "awayL": game.results.away.lose,
                        "awayTotal": game.results.away.total
                    }
                )
            }
        );
        console.log(tableInfo);
        return(
            {tableInfo.map( (row: object, i: number) =>
                {
                    <tr key={i}>
                        {row.map( (cell: any, i: number) =>
                            {
                                <td key={i}>
                                    {cell}
                                </td>
                            }
                        )}
                    </tr>
                }
            )}
        );
    }

    render(): JSX.Element {
        return(
            <div>
                <table>
                    <tbody>
                        {this.renderHeader()}
                        {this.renderBody()}
                    </tbody>
                </table>
            </div>
        )
    }
}