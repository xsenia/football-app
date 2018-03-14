import * as React from "react";

interface AppProps {
    sortBy: any;
}

export class TableHeader extends React.Component<AppProps, {}> {
    render(): JSX.Element {
        return(
            <thead>
            <tr>
                <th>Дата</th>
                <th>
                    Команды
                    <button
                        onClick={() => this.props.sortBy('gameId')}
                    >Сортировка</button>
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