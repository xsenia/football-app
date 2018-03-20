import * as React from "react";
import {leaguesList} from "../../Helpers/getData";

interface AppProps {
    /*sortByDecreasing: any,
    sortByIncreasing: any;*/
}

export class Search extends React.Component<AppProps, { searchString:string,classNameList:string}> {
    constructor(props: any, state: any){
        super(props, state);
        this.state = {
            searchString: '',
            classNameList: 'invisibleList' //visibleList
        };
    }


    private handleChange = (event:any) => {
        this.setState({
            searchString:event.target.value,
            classNameList: 'visibleList'
        });
    }

    private handleList = (elem:string) => {
        console.log(elem);
        this.setState({
            searchString: elem,
            classNameList: 'invisibleList'
        });
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
                <input
                    type="text"
                    value={this.state.searchString}
                    onChange={this.handleChange}
                    placeholder="Лига"
                />

                <ul className={this.state.classNameList}>
                    { libraries.map((elem:any, i:number)=>{
                        return <li key={i} onClick={() => this.handleList(elem)}>{elem}</li>
                    }) }
                </ul>

            </div>
        );
    }
}