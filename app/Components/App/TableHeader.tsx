import * as React from "react";

export class TableHeader extends React.Component<{}, {}> {
    render(): JSX.Element {
        return(
            <thead>
            <tr>
                <th>Дата</th>
                <th>Лига</th>
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