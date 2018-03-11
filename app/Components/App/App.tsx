import * as React from "react";
import {headers, data, leagues} from "../../Helpers/Data";

export class App extends React.Component {
    constructor(props: any, state: any){
        super(props, state);
        const dataClone = JSON.parse(JSON.stringify(data));
        this.state = {
            data: dataClone
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

    /*renderBody(): JSX.Element {
        const data = this.state.data;
        console.log(data);
        return(
            {data.map((cell, i) =>
                <tr key={i}>
                    <td>{cell.eventInfo}</td>
                    <td>{cell.info}</td>
                    <td>{cell.results}</td>
                </tr>
            )}
        );
    }*/

    render(): JSX.Element {
        return(
            <div>
                <table>
                    <tbody>
                        {this.renderHeader()}
                       {/* {this.renderBody()}*/}
                    </tbody>
                </table>
            </div>
        )
    }
}