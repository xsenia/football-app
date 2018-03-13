import * as React from "react";
import {tableInfo} from "../../Helpers/getData";

export class TableRow extends React.Component<{}, {}> {

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


    render(): JSX.Element {
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
}