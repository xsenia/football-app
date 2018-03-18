import {data, leagues} from "./Data";



const getResultWord = (score:any) => {
    const scoreWord = score;
    let scoreArr = scoreWord.split('-');
    if (Number(scoreArr[0]) == Number(scoreArr[1])) {
        return('Ничья');
    } else if (Number(scoreArr[0]) > Number(scoreArr[1])) {
        return('Победа');
    } else {
        return('Поражение');
    }
}

const leaguesClone = JSON.parse(JSON.stringify(leagues));
const dataClone = JSON.parse(JSON.stringify(data));


export let leaguesList = leaguesClone.map((leagues:any) => {
    return leagues.name;
});
leaguesList.unshift("Выберите лигу");



const getLeagueId = (id:number) => {
    const leaguesClone = JSON.parse(JSON.stringify(leagues));
    const index = leaguesClone.findIndex((leaguesClone:any) => leaguesClone.id === id);
    const name = leaguesClone[index].name;
    return name;
};



export const tableInfo = dataClone.map((game: any, i: number) =>
    {
        return (
            {
                "gameId": i,
                "ligue": getLeagueId(game.eventInfo.leagueId),
                "date": game.eventInfo.date,
                "teamHome": game.info.home,
                "teamAway": game.info.away,
                "score": game.info.score,
                "resultWord": getResultWord(game.info.score),
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
/*console.log(tableInfo);
const compareAge = (objA:any, objB:any) => {
    return objA.ligue - objB.ligue;
}
tableInfo.sort(this.compareAge);
console.log(tableInfo);*/



