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
            <tr>
                {headers.map((head, i) =>
                    <th key={i}>{head}</th>
                )}
            </tr>
        );
    }

    private renderBody(): JSX.Element {

            {tableInfo.map( (row:any, i:number) =>
                {
                    return (
                        <tr key={i}>
                            {row.map( (cell:any, i:number) =>
                                {
                                    return (
                                        <td key={i}>
                                            {cell}
                                        </td>
                                    )
                                }
                            )}
                        </tr>
                    )
                }
            }
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