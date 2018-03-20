import * as React from "react";
import {leaguesList} from "../../Helpers/getData";

interface AppProps {
    /*sortByDecreasing: any,
    sortByIncreasing: any;*/
}

export class Search extends React.Component<AppProps, { searchString:string}> {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            searchString: ''/*,
            visibleList: false*/
        };
    }


    private handleChange = (event:any) => {
        this.setState({searchString:event.target.value});
    }

    render(): JSX.Element {
        var libraries = leaguesList;

        var searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){
            libraries = libraries.filter((l:any)=>{
                return l.toLowerCase().match( searchString );
            });
        }

        return(
            <div className="b-search">
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

                <ul>

                    { libraries.map((elem:any, i:number)=>{
                        return <li key={i}>{elem}</li>
                    }) }

                </ul>

            </div>
        );
    }
}