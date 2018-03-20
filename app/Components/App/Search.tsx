import * as React from "react";
import {homeTeams} from "../../Helpers/getData";

interface AppProps {
    stateSearch: any
}

export class Search extends React.Component<AppProps, { searchString:string,classNameList:string}> {
    constructor(props: any, state: any){
        super(props, state);
        console.log(this.props);
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
        this.props.stateSearch(event.target.value);
    }

    /*private handleBlur = (event:any) => {
        if (event.target) {
            console.log(event.target);
        }
        this.setState({
           classNameList: 'invisibleList'
        });
    }*/

    private handleList = (elem:string) => {
        console.log(elem);
        this.setState({
            searchString: elem,
            classNameList: 'invisibleList'
        });
        this.props.stateSearch(elem);
    }

    render(): JSX.Element {
        let libraries = homeTeams;

        let searchString = this.state.searchString.trim().toLowerCase();

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
                    /*onBlur={this.handleBlur}*/
                    placeholder="Название домашней команды"
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