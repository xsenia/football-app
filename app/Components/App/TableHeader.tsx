import * as React from "react";

interface AppProps {
    sortByDecreasing: any,
    sortByIncreasing: any;
}

export class TableHeader extends React.Component<AppProps, {}> {
    render(): JSX.Element {
        return(
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>
                        Команды<br />
                        <button onClick={() => this.props.sortByDecreasing('ligue')}> &#9660; </button>
                        <button onClick={() => this.props.sortByIncreasing('ligue')}> &#9650; </button>
                    </th>
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
}