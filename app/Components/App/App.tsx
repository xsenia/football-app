import * as React from "react";
import {headers, data, leagues} from "../../Helpers/Data";

export class App extends React.Component {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {};
    }

    private renderHeader(): JSX.Element {
        return(
            <thead>
                {headers.map((head, i) =>
                    <th>{head}</th> 
                )}
            </thead>
        );
    }

    render(): JSX.Element {
        return(
            <div>
                <table>
                    {this.renderHeader()}
                </table>
            </div>
        )
    }
}