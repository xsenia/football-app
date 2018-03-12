import {data, leagues} from "./Data";

const dataClone = JSON.parse(JSON.stringify(data));
export const tableInfo = dataClone.map((game: any, i: number) =>
    {
        return (
            {
                "gameId": i,
                "ligue": game.eventInfo.leagueId,
                "date": game.eventInfo.date,
                "teamHome": game.info.home,
                "teamAway": game.info.away,
                "score": game.info.score,
                "resultWord": "win/draw/lose",
                "homeW": game.results.home.win,
                "homeD": game.results.home.draw,
                "homeL": game.results.home.lose,
                "homeTotal": game.results.home.total,
                "awayW": game.results.away.win,
                "awayD": game.results.away.draw,
                "awayL": game.results.away.lose,
                "awayTotal": game.results.away.total
            }
        )
    }
);

