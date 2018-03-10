export const headers = [
    "Дата",
    "Домашняя команда - гостевая команда",
    "Счет",
    "Результат (относительно домашней команды) - победа, ничья или поражение",
    "Победа, ничья, поражение",
    "Форма"
];

export const leagues = [
    {id: 1, name: "Bundesliga 1"},
    {id: 2, name: "Bundesliga 2"},
    {id: 3, name: "La Liga"},
    {id: 4, name: "Segunda Liga"},
    {id: 5, name: "Eng Premier"},
    {id: 6, name: "Eng Championship"},
    {id: 7, name: "Australia League A"},
    {id: 8, name: "Belgian First Division A"},
    {id: 9, name: "Hungarian Premier League"},
    {id: 10, name: "Italy Serie A"},
    {id: 11, name: "Italy Serie B"},
    {id: 12, name: "Netherlands Eredivisie"},
    {id: 13, name: "Poland Premier"},
    {id: 14, name: "French 1"},
    {id: 15, name: "Serbia Superleague"},
    {id: 16, name: "Bundesliga 3"},
    {id: 17, name: "Portugal Premier"},
    {id: 18, name: "Croatia Premier"},
    {id: 19, name: "French 2"},
    {id: 20, name: "French 3"},
    {id: 21, name: "England 1"},
    {id: 22, name: "Netherlands 1"},
    {id: 23, name: "Argentina Superleague"},
    {id: 24, name: "Segunda B 1"},
    {id: 25, name: "Segunda B 2"},
    {id: 26, name: "Segunda B 3"},
    {id: 27, name: "Segunda B 4"}
];

export const data = [
    {
        "eventInfo": {"date": "20.01.2018", "leagueId": 19},
        "info": {"home": "Брест", "away": "Ланс", "score": "1-1"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 3, "total": "lwwlddwwdl"},
            "away": {"win": 2, "draw": 3, "lose": 6, "total": "wdlddwlllll"}
        }
    }, {
        "eventInfo": {"date": "20.01.2018", "leagueId": 19},
        "info": {"home": "Кевийи Руан", "away": "Газелек Аяччо", "score": "0-2"},
        "results": {
            "home": {"win": 3, "draw": 1, "lose": 6, "total": "lwwlllwlld"},
            "away": {"win": 2, "draw": 2, "lose": 6, "total": "llwwlllldd"}
        }
    }, {
        "eventInfo": {"date": "20.01.2018", "leagueId": 19},
        "info": {"home": "Лорьян", "away": "Клермон", "score": "1-1"},
        "results": {
            "home": {"win": 7, "draw": 3, "lose": 1, "total": "wwlwwddwwwd"},
            "away": {"win": 3, "draw": 5, "lose": 3, "total": "dlwddlwlwdd"}
        }
    }, {
        "eventInfo": {"date": "20.01.2018", "leagueId": 19},
        "info": {"home": "Сошо", "away": "Нанси", "score": "1-0"},
        "results": {
            "home": {"win": 6, "draw": null, "lose": 4, "total": "lwwwwlllww"},
            "away": {"win": 1, "draw": 4, "lose": 5, "total": "dwdlldlldl"}
        }

    }, {
        "eventInfo": {"date": "20.01.2018", "leagueId": 19},
        "info": {"home": "Тур", "away": "Ньор", "score": "2-1"},
        "results": {
            "home": {"win": 1, "draw": 1, "lose": 8, "total": "dllwllllll"},
            "away": {"win": 2, "draw": 2, "lose": 6, "total": "llwlldwlld"}
        }

    }, {
        "eventInfo": {"date": "20.01.2018", "leagueId": 4},
        "info": {"home": "Кордоба", "away": "Альбасете", "score": "1-0"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 4, "total": "wddldlwwll"},
            "away": {"win": 1, "draw": 4, "lose": 5, "total": "wldddlllld"}
        }
    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 8},
        "info": {"home": "Васланд-Беверен", "away": "Синт-Трёйден", "score": "3-1"},
        "results": {
            "home": {"win": 5, "draw": 1, "lose": 4, "total": "lwlwwwlwld"},
            "away": {"win": 1, "draw": 5, "lose": 4, "total": "dddlldldwl"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 14},
        "info": {"home": "Монпелье", "away": "Тулуза", "score": "2-1"},
        "results": {
            "home": {"win": 3, "draw": 5, "lose": 3, "total": "dldwdlwdldw"},
            "away": {"win": 1, "draw": 2, "lose": 8, "total": "lllllwdldll"}
        }
    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 14},
        "info": {"home": "Ренн", "away": "Анже", "score": "1-0"},
        "results": {
            "home": {"win": 4, "draw": 1, "lose": 5, "total": "llwwwwlldl"},
            "away": {"win": 2, "draw": 6, "lose": 3, "total": "dlllddwdddw"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 14},
        "info": {"home": "Страсбур", "away": "Дижон", "score": "3-2"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 3, "total": "lwwdwddllw"},
            "away": {"win": 1, "draw": 2, "lose": 7, "total": "lllllwdldl"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 8},
        "info": {"home": "Мехелен", "away": "Зюльте-Варегем", "score": "0-2"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 4, "total": "lwwllwdldd"},
            "away": {"win": 3, "draw": 1, "lose": 6, "total": "ldllllwlww"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 12},
        "info": {"home": "Витесс", "away": "Херенвен", "score": "1-1"},
        "results": {
            "home": {"win": 2, "draw": 4, "lose": 2, "total": "dwdlddlw"},
            "away": {"win": 4, "draw": 3, "lose": 3, "total": "ldlwdlwwwd"}
        }
    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 3},
        "info": {"home": "Алавес", "away": "Леганес", "score": "2-2"},
        "results": {
            "home": {"win": 4, "draw": null, "lose": 6, "total": "wwwlwlllll"},
            "away": {"win": 3, "draw": 1, "lose": 6, "total": "ldllllwwlw"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 12},
        "info": {"home": "Спарта", "away": "Эксельсиор", "score": "2-3"},
        "results": {
            "home": {"win": 2, "draw": 2, "lose": 5, "total": "llldwllwd"},
            "away": {"win": 4, "draw": 1, "lose": 3, "total": "lllwwwdw"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 12},
        "info": {"home": "Виллем II", "away": "Гронинген", "score": "1-1"},
        "results": {
            "home": {"win": 2, "draw": 2, "lose": 5, "total": "ldwdlwlll"},
            "away": {"win": 1, "draw": 1, "lose": 6, "total": "ldwlllll"}
        }
    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 10},
        "info": {"home": "Болонья", "away": "Беневенто", "score": "3-0"},
        "results": {
            "home": {"win": 2, "draw": 3, "lose": 5, "total": "lldwllwdld"},
            "away": {"win": null, "draw": null, "lose": 9, "total": "lllllllll"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 10},
        "info": {"home": "Верона", "away": "Кротоне", "score": "3-2"},
        "results": {
            "home": {"win": 2, "draw": 1, "lose": 7, "total": "lwlllwldll"},
            "away": {"win": 1, "draw": 1, "lose": 8, "total": "llllwlldll"}
        }
    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 10},
        "info": {"home": "Удинезе", "away": "СПАЛ", "score": "2-1"},
        "results": {
            "home": {"win": 5, "draw": null, "lose": 5, "total": "wwllwlwlwl"},
            "away": {"win": 1, "draw": 2, "lose": 7, "total": "lwlldlllld"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 11},
        "info": {"home": "Брешия", "away": "Авеллино", "score": "1-1"},
        "results": {
            "home": {"win": 3, "draw": 5, "lose": 3, "total": "ldwdlwlwddd"},
            "away": {"win": 1, "draw": 3, "lose": 6, "total": "ldddlllwll"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 4},
        "info": {"home": "Осасуна", "away": "Леонеса", "score": "0-2"},
        "results": {
            "home": {"win": 4, "draw": 5, "lose": 2, "total": "lwdlddwwwdd"},
            "away": {"win": 1, "draw": 4, "lose": 5, "total": "lldldddlwl"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 17},
        "info": {"home": "Авеш", "away": "Пасуш де Феррейра", "score": "0-3"},
        "results": {
            "home": {"win": 1, "draw": 2, "lose": 6, "total": "lldlldwll"},
            "away": {"win": null, "draw": 2, "lose": 7, "total": "ldlllldll"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 4},
        "info": {"home": "Химнастик", "away": "Реус Депортиу", "score": "2-0"},
        "results": {
            "home": {"win": 3, "draw": 1, "lose": 6, "total": "lwlldlwwll"},
            "away": {"win": 2, "draw": 4, "lose": 4, "total": "lldlwdwdld"}
        }

    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 3},
        "info": {"home": "Реал Сосьедад", "away": "Сельта", "score": "1-2"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 4, "total": "lwldwddllw"},
            "away": {"win": 4, "draw": 1, "lose": 5, "total": "wwldllwwll"}
        }
    }, {
        "eventInfo": {"date": "21.01.2018", "leagueId": 17},
        "info": {"home": "Риу Аве", "away": "Боавишта", "score": "2-0"},
        "results": {
            "home": {"win": 5, "draw": 1, "lose": 3, "total": "wwllwldww"},
            "away": {"win": 2, "draw": 3, "lose": 4, "total": "dwdlwdlll"}
        }

    }, {
        "eventInfo": {"date": "22.01.2018", "leagueId": 4},
        "info": {"home": "Тенерифе", "away": "Барселона (Б)", "score": "1-3"},
        "results": {
            "home": {"win": 5, "draw": 5, "lose": null, "total": "dwdwddwwdw"},
            "away": {"win": 1, "draw": 6, "lose": 4, "total": "dllldddlddw"}
        }

    }, {
        "eventInfo": {"date": "22.01.2018", "leagueId": 10},
        "info": {"home": "Интер", "away": "Рома", "score": "1-1"},
        "results": {
            "home": {"win": 7, "draw": 2, "lose": 1, "total": "dlwwdwwwww"},
            "away": {"win": 5, "draw": 2, "lose": 1, "total": "lddwwwww"}
        }
    }, {
        "eventInfo": {"date": "22.01.2018", "leagueId": 17},
        "info": {"home": "Гимарайнш", "away": "Эшторил", "score": "3-1"},
        "results": {
            "home": {"win": 4, "draw": 1, "lose": 3, "total": "lwldwwlw"},
            "away": {"win": 1, "draw": 2, "lose": 6, "total": "dldllllwl"}
        }

    }, {
        "eventInfo": {"date": "23.01.2018", "leagueId": 22},
        "info": {"home": "Йонг Аякс", "away": "Камбур", "score": "3-2"},
        "results": {
            "home": {"win": 7, "draw": 2, "lose": 1, "total": "wwwlwwddww"},
            "away": {"win": 3, "draw": 2, "lose": 5, "total": "wllldldwwl"}
        }
    }, {
        "eventInfo": {"date": "23.01.2018", "leagueId": 19},
        "info": {"home": "ФК Париж", "away": "Аяччо", "score": "2-1"},
        "results": {
            "home": {"win": 7, "draw": 3, "lose": 1, "total": "wdwdwwwwwld"},
            "away": {"win": 4, "draw": 4, "lose": 2, "total": "wlddwwlwdd"}
        }

    }, {
        "eventInfo": {"date": "23.01.2018", "leagueId": 3},
        "info": {"home": "Эйбар", "away": "Малага", "score": "1-1"},
        "results": {
            "home": {"win": 5, "draw": 2, "lose": 3, "total": "lwwwwddlwl"},
            "away": {"win": 1, "draw": null, "lose": 9, "total": "llwlllllll"}
        }

    }, {
        "eventInfo": {"date": "23.01.2018", "leagueId": 2},
        "info": {"home": "Бохум", "away": "Дуйсбург", "score": "0-2"},
        "results": {
            "home": {"win": 4, "draw": 2, "lose": 2, "total": "wddwwlwl"},
            "away": {"win": 4, "draw": 2, "lose": 3, "total": "dlwwldwwl"}
        }

    }, {
        "eventInfo": {"date": "24.01.2018", "leagueId": 8},
        "info": {"home": "Мускрон", "away": "Кортрейк", "score": "0-3"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 3, "total": "wwdldldwwwl"},
            "away": {"win": 2, "draw": 1, "lose": 8, "total": "lwlllllldwl"}
        }

    }, {
        "eventInfo": {"date": "24.01.2018", "leagueId": 8},
        "info": {"home": "Синт-Трёйден", "away": "Мехелен", "score": "2-0"},
        "results": {
            "home": {"win": 6, "draw": 3, "lose": 2, "total": "ldddwwlwwww"},
            "away": {"win": 1, "draw": 3, "lose": 7, "total": "llwdllldlld"}
        }

    }, {
        "eventInfo": {"date": "24.01.2018", "leagueId": 2},
        "info": {"home": "Нюрнберг", "away": "Регенсбург", "score": "1-2"},
        "results": {
            "home": {"win": 4, "draw": 2, "lose": 3, "total": "wdlwlwldw"},
            "away": {"win": 3, "draw": 1, "lose": 4, "total": "wdlllwwl"}
        }
    }, {
        "eventInfo": {"date": "24.01.2018", "leagueId": 2},
        "info": {"home": "Хольштейн Киель", "away": "Унион Берлин", "score": "2-0"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 1, "total": "ddwwwlwwd"},
            "away": {"win": 3, "draw": 2, "lose": 4, "total": "lldwwlldw"}
        }

    }, {
        "eventInfo": {"date": "24.01.2018", "leagueId": 21},
        "info": {"home": "Ротерхэм", "away": "Бредфорд Сити", "score": "1-3"},
        "results": {
            "home": {"win": 8, "draw": 2, "lose": 4, "total": "wdwdlllwwwwwlw"},
            "away": {"win": 9, "draw": 2, "lose": 3, "total": "lwlwwwwlwwdwdw"}
        }

    }, {
        "eventInfo": {"date": "24.01.2018", "leagueId": 21},
        "info": {"home": "Сканторп Юнайтед", "away": "Донкастер", "score": "1-1"},
        "results": {
            "home": {"win": 7, "draw": 4, "lose": 3, "total": "lwwdwwwdlwldwd"},
            "away": {"win": 4, "draw": 3, "lose": 7, "total": "ddwlldwllwlllw"}
        }
    }, {
        "eventInfo": {"date": "24.01.2018", "leagueId": 2},
        "info": {"home": "Дармштадт 98", "away": "Кайзерслаутерн", "score": "3-1"},
        "results": {
            "home": {"win": 3, "draw": 2, "lose": 4, "total": "lldldwlww"},
            "away": {"win": 1, "draw": 1, "lose": 7, "total": "lwldlllll"}
        }

    }, {
        "eventInfo": {"date": "25.01.2018", "leagueId": 2},
        "info": {"home": "Арминия", "away": "Гройтер Фюрт", "score": "0-0"},
        "results": {
            "home": {"win": 3, "draw": 2, "lose": 3, "total": "wdlldlww"},
            "away": {"win": null, "draw": 2, "lose": 7, "total": "ldlllldll"}
        }

    }, {
        "eventInfo": {"date": "25.01.2018", "leagueId": 2},
        "info": {"home": "Фортуна Дюссельдорф", "away": "Эрцгебирге Ауэ", "score": "2-1"},
        "results": {
            "home": {"win": 5, "draw": 2, "lose": 2, "total": "lldwwwwwd"},
            "away": {"win": 2, "draw": 2, "lose": 4, "total": "lldlwwdl"}
        }
    }, {
        "eventInfo": {"date": "25.01.2018", "leagueId": 2},
        "info": {"home": "Хайденхайм", "away": "Айнтрахт Б", "score": "2-0"},
        "results": {
            "home": {"win": 4, "draw": 1, "lose": 4, "total": "wwwlldllw"},
            "away": {"win": 1, "draw": 6, "lose": 1, "total": "wdddlddd"}
        }
    }, {
        "eventInfo": {"date": "26.01.2018", "leagueId": 2},
        "info": {"home": "Динамо Дрезден", "away": "Санкт-Паули", "score": "1-3"},
        "results": {
            "home": {"win": 2, "draw": 3, "lose": 3, "total": "wlddldlw"},
            "away": {"win": 4, "draw": 1, "lose": 4, "total": "llldwwwlw"}
        }

    }, {
        "eventInfo": {"date": "26.01.2018", "leagueId": 2},
        "info": {"home": "Унион Берлин", "away": "Нюрнберг", "score": "0-1"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 2, "total": "lldwwwddw"},
            "away": {"win": 6, "draw": 1, "lose": 2, "total": "dwwlwwwlw"}
        }
    }, {
        "eventInfo": {"date": "26.01.2018", "leagueId": 16},
        "info": {"home": "Цвикау", "away": "Зонненхоф Гроссаспах", "score": "2-0"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 4, "total": "wdllwlwwldd"},
            "away": {"win": 4, "draw": 3, "lose": 4, "total": "lwdwwllwdld"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 22},
        "info": {"home": "Дордрехт", "away": "Осс", "score": "2-0"},
        "results": {
            "home": {"win": 4, "draw": 4, "lose": 3, "total": "wllwldwdddw"},
            "away": {"win": 3, "draw": 4, "lose": 3, "total": "ldwlldwddw"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 22},
        "info": {"home": "Фортуна", "away": "Эммен", "score": "1-2"},
        "results": {
            "home": {"win": 9, "draw": 1, "lose": 1, "total": "wwwwwdlwwww"},
            "away": {"win": 3, "draw": 4, "lose": 3, "total": "ldwwlldddw"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 19},
        "info": {"home": "Газелек Аяччо", "away": "Бур-ан-Бресс Перонна", "score": "1-2"},
        "results": {
            "home": {"win": 5, "draw": 4, "lose": 2, "total": "wdlddwwwlwd"},
            "away": {"win": 1, "draw": null, "lose": 10, "total": "lllllllllwl"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 19},
        "info": {"home": "Клермон", "away": "Кевийи Руан", "score": "1-1"},
        "results": {
            "home": {"win": 6, "draw": 1, "lose": 3, "total": "wllwdwwwlw"},
            "away": {"win": 2, "draw": 2, "lose": 7, "total": "wwdllllllld"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 19},
        "info": {"home": "Нанси", "away": "Брест", "score": "2-2"},
        "results": {
            "home": {"win": 3, "draw": 5, "lose": 3, "total": "llldddwwwdd"},
            "away": {"win": 6, "draw": 2, "lose": 3, "total": "dwwldlwwwwl"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 19},
        "info": {"home": "Ньор", "away": "Валансьен", "score": "1-2"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 3, "total": "dlwdwwllwwd"},
            "away": {"win": 3, "draw": null, "lose": 7, "total": "lllwlwlllw"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 19},
        "info": {"home": "Осер", "away": "ФК Париж", "score": "1-1"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 3, "total": "wdldlwwwdlw"},
            "away": {"win": 3, "draw": 5, "lose": 2, "total": "dwdddldwlw"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 20},
        "info": {"home": "По", "away": "Кретей", "score": "1-0"},
        "results": {
            "home": {"win": 2, "draw": 6, "lose": 2, "total": "dldwddwldd"},
            "away": {"win": 1, "draw": 1, "lose": 6, "total": "wldlllll"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 8},
        "info": {"home": "Мехелен", "away": "Мускрон", "score": "0-2"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 5, "total": "llwwllwdldd"},
            "away": {"win": 2, "draw": 2, "lose": 7, "total": "lllllldldww"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 1},
        "info": {"home": "Айнтрахт Ф", "away": "Боруссия М", "score": "2-0"},
        "results": {
            "home": {"win": 2, "draw": 3, "lose": 4, "total": "ddllwdwll"},
            "away": {"win": 3, "draw": 2, "lose": 4, "total": "lllwwwldd"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 11},
        "info": {"home": "Пескара", "away": "Перуджа", "score": "0-2"},
        "results": {
            "home": {"win": 5, "draw": 4, "lose": 2, "total": "wwdwdlwlddw"},
            "away": {"win": 1, "draw": 5, "lose": 5, "total": "dddldlllldw"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 3},
        "info": {"home": "Атлетик", "away": "Эйбар", "score": "1-1"},
        "results": {
            "home": {"win": 3, "draw": 4, "lose": 2, "total": "wdddlwlwd"},
            "away": {"win": 3, "draw": 1, "lose": 5, "total": "wdwlllllw"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 4},
        "info": {"home": "Сарагоса", "away": "Кордоба", "score": "1-0"},
        "results": {
            "home": {"win": 3, "draw": 6, "lose": 2, "total": "wdldwddwdld"},
            "away": {"win": 1, "draw": 1, "lose": 10, "total": "lllldllllllw"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 2},
        "info": {"home": "Дуйсбург", "away": "Хайденхайм", "score": "3-3"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 3, "total": "wwwddllld"},
            "away": {"win": 2, "draw": 3, "lose": 4, "total": "dlwdldwll"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 3},
        "info": {"home": "Депортиво", "away": "Леванте", "score": "2-2"},
        "results": {
            "home": {"win": 3, "draw": 1, "lose": 6, "total": "llwdllwwll"},
            "away": {"win": 1, "draw": 5, "lose": 3, "total": "llddwddld"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 16},
        "info": {"home": "Аален", "away": "Хемнитцер", "score": "3-2"},
        "results": {
            "home": {"win": 6, "draw": 3, "lose": 2, "total": "dwwwwdlldww"},
            "away": {"win": 1, "draw": 2, "lose": 8, "total": "llllldwlldl"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 16},
        "info": {"home": "Оснабрюк", "away": "Фортуна Кёльн", "score": "2-2"},
        "results": {
            "home": {"win": 4, "draw": 2, "lose": 3, "total": "wwwldlwdl"},
            "away": {"win": 4, "draw": 4, "lose": 3, "total": "dlldlwwwddw"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 11},
        "info": {"home": "Бари", "away": "Эмполи", "score": "0-4"},
        "results": {
            "home": {"win": 8, "draw": 1, "lose": 2, "total": "dlwwwwwwwlw"},
            "away": {"win": 3, "draw": 4, "lose": 4, "total": "wddlllwlwdd"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 11},
        "info": {"home": "Венеция", "away": "Чезена", "score": "1-0"},
        "results": {
            "home": {"win": 3, "draw": 5, "lose": 2, "total": "ddlwdwwldd"},
            "away": {"win": 1, "draw": 3, "lose": 7, "total": "lddldwlllll"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 11},
        "info": {"home": "Верчелли", "away": "Асколи", "score": "2-0"},
        "results": {
            "home": {"win": 2, "draw": 4, "lose": 5, "total": "lldwlddwdll"},
            "away": {"win": 2, "draw": 3, "lose": 6, "total": "wdllllddwll"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 11},
        "info": {"home": "Парма", "away": "Новара", "score": "3-0"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 3, "total": "ddwwwwldllw"},
            "away": {"win": 4, "draw": 3, "lose": 4, "total": "llwddwwdlwl"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 11},
        "info": {"home": "Энтелла", "away": "Фоджа", "score": "1-2"},
        "results": {
            "home": {"win": 4, "draw": 4, "lose": 3, "total": "wlwdddlwdwl"},
            "away": {"win": 4, "draw": 2, "lose": 5, "total": "wllwwdldwll"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 19},
        "info": {"home": "Аяччо", "away": "Тур", "score": "2-1"},
        "results": {
            "home": {"win": 7, "draw": 1, "lose": 3, "total": "dwwllwwwlww"},
            "away": {"win": null, "draw": 2, "lose": 9, "total": "lllllldldll"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 6},
        "info": {"home": "Брентфорд", "away": "Норвич", "score": "0-1"},
        "results": {
            "home": {"win": 6, "draw": 7, "lose": 1, "total": "wwwdwdwdwddddl"},
            "away": {"win": 6, "draw": 2, "lose": 6, "total": "wdwllllwwwwlld"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 6},
        "info": {"home": "Бристоль Сити", "away": "КПР", "score": "2-0"},
        "results": {
            "home": {"win": 7, "draw": 3, "lose": 4, "total": "llwwwlwldwwddw"},
            "away": {"win": 2, "draw": 5, "lose": 7, "total": "wldwllldddllld"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 21},
        "info": {"home": "Бредфорд Сити", "away": "Уимблдон", "score": "0-4"},
        "results": {
            "home": {"win": 6, "draw": 1, "lose": 7, "total": "lwlwllldwlwwlw"},
            "away": {"win": 3, "draw": 4, "lose": 6, "total": "ddldwlwllwlld"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 21},
        "info": {"home": "Донкастер", "away": "Бристоль Роверс", "score": "1-3"},
        "results": {
            "home": {"win": 5, "draw": 6, "lose": 3, "total": "dwwdwdlwwllddd"},
            "away": {"win": 2, "draw": 3, "lose": 9, "total": "dddlllllwlllwl"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 21},
        "info": {"home": "Олдхэм", "away": "Плимут", "score": "1-2"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 6, "total": "ddlwdwlwwwllll"},
            "away": {"win": 3, "draw": 6, "lose": 5, "total": "ddwdlwwdlldldl"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 21},
        "info": {"home": "Портсмут", "away": "Шрусбери Таун", "score": "0-1"},
        "results": {
            "home": {"win": 9, "draw": 2, "lose": 3, "total": "dwwwwwlwlwwldw"},
            "away": {"win": 6, "draw": 5, "lose": 3, "total": "lwddlwlddwwwdw"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 8},
        "info": {"home": "Шарлеруа", "away": "Антверпен", "score": "1-1"},
        "results": {
            "home": {"win": 6, "draw": 4, "lose": 1, "total": "wddwwdldwww"},
            "away": {"win": 6, "draw": 3, "lose": 2, "total": "wwdwdlldwww"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 1},
        "info": {"home": "Вердер", "away": "Герта", "score": "0-0"},
        "results": {
            "home": {"win": 2, "draw": 3, "lose": 4, "total": "ddwwlldll"},
            "away": {"win": 2, "draw": 4, "lose": 3, "total": "lwdwddldl"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 3},
        "info": {"home": "Малага", "away": "Жирона", "score": "0-0"},
        "results": {
            "home": {"win": 2, "draw": 2, "lose": 5, "total": "lldwwldll"},
            "away": {"win": 3, "draw": 4, "lose": 3, "total": "dllwdwwddl"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 12},
        "info": {"home": "Гронинген", "away": "Хераклес", "score": "3-3"},
        "results": {
            "home": {"win": 4, "draw": 4, "lose": 2, "total": "wdlwldwdwd"},
            "away": {"win": null, "draw": 2, "lose": 7, "total": "ldlllllld"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 8},
        "info": {"home": "Васланд-Беверен", "away": "Зюльте-Варегем", "score": "2-2"},
        "results": {
            "home": {"win": 6, "draw": 1, "lose": 4, "total": "wlwlwwwlwld"},
            "away": {"win": 4, "draw": 1, "lose": 6, "total": "wldllllwlww"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 8},
        "info": {"home": "Кортрейк", "away": "Эйпен", "score": "0-0"},
        "results": {
            "home": {"win": 5, "draw": 4, "lose": 2, "total": "wwwwddlddlw"},
            "away": {"win": null, "draw": 3, "lose": 8, "total": "lldldldllll"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 4},
        "info": {"home": "Альбасете", "away": "Алькоркон", "score": "2-0"},
        "results": {
            "home": {"win": 6, "draw": 3, "lose": 3, "total": "wldwdwdwwwll"},
            "away": {"win": 3, "draw": 3, "lose": 6, "total": "ldldwlwlllwd"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 14},
        "info": {"home": "Анже", "away": "Амьен", "score": "1-0"},
        "results": {
            "home": {"win": 2, "draw": 4, "lose": 4, "total": "wwdllldldd"},
            "away": {"win": 2, "draw": 2, "lose": 7, "total": "lllwddllwll"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 14},
        "info": {"home": "Генгам", "away": "Нант", "score": "0-3"},
        "results": {
            "home": {"win": 5, "draw": 4, "lose": 2, "total": "lwwdddwdwwl"},
            "away": {"win": 4, "draw": 3, "lose": 4, "total": "dwdllldwwwl"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 14},
        "info": {"home": "Сент-Этьен", "away": "Кан", "score": "2-1"},
        "results": {
            "home": {"win": 4, "draw": 4, "lose": 3, "total": "wlddllwddww"},
            "away": {"win": 3, "draw": 1, "lose": 6, "total": "wlldllwlwl"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 14},
        "info": {"home": "Тулуза", "away": "Труа", "score": "1-0"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 3, "total": "dlwlddwlww"},
            "away": {"win": 2, "draw": 1, "lose": 7, "total": "lllllldwlw"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 4},
        "info": {"home": "Кадис", "away": "Луго", "score": "1-1"},
        "results": {
            "home": {"win": 7, "draw": 4, "lose": 1, "total": "wwwwwwddldwd"},
            "away": {"win": 5, "draw": 2, "lose": 5, "total": "wlldwldwlwwl"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 3},
        "info": {"home": "Вильярреал", "away": "Реал Сосьедад", "score": "4-2"},
        "results": {
            "home": {"win": 5, "draw": 2, "lose": 2, "total": "wdllwwwdw"},
            "away": {"win": 3, "draw": 2, "lose": 4, "total": "ldldlwlww"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 3},
        "info": {"home": "Леганес", "away": "Эспаньол", "score": "3-2"},
        "results": {
            "home": {"win": 4, "draw": 2, "lose": 2, "total": "wwlwddlw"},
            "away": {"win": 1, "draw": 4, "lose": 4, "total": "wdlldldld"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 4},
        "info": {"home": "Леонеса", "away": "Севилья (Б)", "score": "2-1"},
        "results": {
            "home": {"win": 4, "draw": 7, "lose": 1, "total": "wdwddddldwdw"},
            "away": {"win": 1, "draw": 4, "lose": 6, "total": "llldwdllldd"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 2},
        "info": {"home": "Зандхаузен", "away": "Динамо Дрезден", "score": "1-0"},
        "results": {
            "home": {"win": 6, "draw": 1, "lose": 3, "total": "wwlldwwwlw"},
            "away": {"win": 4, "draw": 2, "lose": 4, "total": "lwwllwdwld"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 2},
        "info": {"home": "Санкт-Паули", "away": "Дармштадт 98", "score": "0-1"},
        "results": {
            "home": {"win": 2, "draw": 5, "lose": 2, "total": "wddddllwd"},
            "away": {"win": 1, "draw": 5, "lose": 3, "total": "dlddlldwd"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 16},
        "info": {"home": "Карл-Цейс Йена", "away": "Халлешер", "score": "2-1"},
        "results": {
            "home": {"win": 5, "draw": 5, "lose": 1, "total": "wddwwwwdddl"},
            "away": {"win": 1, "draw": 6, "lose": 4, "total": "ddlldlwdddl"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 22},
        "info": {"home": "Волендам", "away": "Гоу Эхед Иглс", "score": "4-3"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 4, "total": "wwdlwlldld"},
            "away": {"win": 1, "draw": 3, "lose": 6, "total": "llllldwddl"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 10},
        "info": {"home": "Дженоа", "away": "Удинезе", "score": "0-1"},
        "results": {
            "home": {"win": 2, "draw": 2, "lose": 6, "total": "wwldllldll"},
            "away": {"win": 4, "draw": 1, "lose": 5, "total": "ldwwwwllll"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 10},
        "info": {"home": "Кротоне", "away": "Кальяри", "score": "1-1"},
        "results": {
            "home": {"win": 3, "draw": 2, "lose": 5, "total": "lwllwdwldl"},
            "away": {"win": 3, "draw": 1, "lose": 6, "total": "wldwlllwll"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 14},
        "info": {"home": "Лилль", "away": "Страсбур", "score": "2-1"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 4, "total": "ldwwldldlw"},
            "away": {"win": 2, "draw": 3, "lose": 6, "total": "llwdlwdlldl"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 1},
        "info": {"home": "Ганновер", "away": "Вольфсбург", "score": "0-1"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 1, "total": "wdwdwldww"},
            "away": {"win": 1, "draw": 5, "lose": 3, "total": "dldldddlw"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 4},
        "info": {"home": "Уэска", "away": "Осасуна", "score": "1-0"},
        "results": {
            "home": {"win": 9, "draw": 3, "lose": null, "total": "wdwwwwwdwwdw"},
            "away": {"win": 5, "draw": 3, "lose": 3, "total": "wwllwddwdwl"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 23},
        "info": {"home": "Годой Крус", "away": "Чакарита Хуниорс", "score": "1-0"},
        "results": {
            "home": {"win": 3, "draw": null, "lose": null, "total": "www"},
            "away": {"win": null, "draw": 2, "lose": 4, "total": "ldllld"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 23},
        "info": {"home": "Тальерес Кордоба", "away": "Сан-Лоренсо", "score": "-"},
        "results": {
            "home": {"win": 2, "draw": null, "lose": 2, "total": "llww"},
            "away": {"win": 4, "draw": 1, "lose": null, "total": "wwwwd"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 25},
        "info": {"home": "Атлетик (Б)", "away": "Аренас Клуб", "score": "-"},
        "results": {
            "home": {"win": 4, "draw": 1, "lose": null, "total": "wwwdw"},
            "away": {"win": 1, "draw": 6, "lose": 3, "total": "dldddwlddl"}
        }
    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 24},
        "info": {"home": "Cerceda", "away": "Сеговиана", "score": "-"},
        "results": {
            "home": {"win": 2, "draw": 2, "lose": 6, "total": "lllllddwwl"},
            "away": {"win": 1, "draw": 5, "lose": 5, "total": "dldldddwlll"}
        }

    }, {
        "eventInfo": {"date": "27.01.2018", "leagueId": 25},
        "info": {"home": "CD Vitoria", "away": "Реал Унион", "score": "-"},
        "results": {
            "home": {"win": 2, "draw": 6, "lose": 2, "total": "dwldddldwd"},
            "away": {"win": 1, "draw": 1, "lose": 8, "total": "lllllldllw"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 23},
        "info": {"home": "Дефенса и Хустисия", "away": "Велес Сарсфилд", "score": "-"},
        "results": {
            "home": {"win": 2, "draw": 3, "lose": 1, "total": "wwddld"},
            "away": {"win": 1, "draw": 2, "lose": 3, "total": "dllldw"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 23},
        "info": {"home": "Ньюэллс Олд Бойс", "away": "Арсенал Саранди", "score": "-"},
        "results": {
            "home": {"win": 2, "draw": 3, "lose": 1, "total": "dlwdwd"},
            "away": {"win": 1, "draw": 1, "lose": 4, "total": "ldlwll"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 23},
        "info": {"home": "Ланус", "away": "Патронато", "score": "-"},
        "results": {
            "home": {"win": 2, "draw": 1, "lose": 2, "total": "dlwwl"},
            "away": {"win": 1, "draw": 2, "lose": 3, "total": "dldlwl"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 24},
        "info": {"home": "Вальядолид (Б)", "away": "Коруксо", "score": "-"},
        "results": {
            "home": {"win": 4, "draw": 4, "lose": 3, "total": "wwwlddwdlld"},
            "away": {"win": 2, "draw": 1, "lose": 7, "total": "llwdllllwl"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 24},
        "info": {"home": "Райо Махадаонда", "away": "Понферрадина", "score": "-"},
        "results": {
            "home": {"win": 8, "draw": 1, "lose": 2, "total": "wwdwwwwwllw"},
            "away": {"win": 1, "draw": 2, "lose": 7, "total": "lwlldllldl"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 24},
        "info": {"home": "Сан-Себастьян", "away": "Навалькарнеро", "score": "-"},
        "results": {
            "home": {"win": 2, "draw": 4, "lose": 4, "total": "dlddlwlldw"},
            "away": {"win": 4, "draw": 3, "lose": 3, "total": "wlddlwlwdw"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 24},
        "info": {"home": "Сельта (Б)", "away": "Атлетико (Б)", "score": "-"},
        "results": {
            "home": {"win": 6, "draw": 3, "lose": 1, "total": "dwddlwwwww"},
            "away": {"win": 3, "draw": 4, "lose": 3, "total": "wdlwdlldwd"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 24},
        "info": {"home": "Рапидо де Боусас", "away": "Юнион Адарве", "score": "-"},
        "results": {
            "home": {"win": 5, "draw": 4, "lose": 1, "total": "wdwwdlddww"},
            "away": {"win": 2, "draw": 2, "lose": 7, "total": "lwllllwdlld"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 24},
        "info": {"home": "Толедо", "away": "Понтеведра", "score": "-"},
        "results": {
            "home": {"win": 3, "draw": 2, "lose": 5, "total": "lllwllwwdd"},
            "away": {"win": 1, "draw": 2, "lose": 7, "total": "lddlllwlll"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 24},
        "info": {"home": "Ферроль", "away": "Талавера", "score": "-"},
        "results": {
            "home": {"win": 2, "draw": 2, "lose": 6, "total": "wlldlllldw"},
            "away": {"win": null, "draw": 6, "lose": 4, "total": "lddldldldd"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 24},
        "info": {"home": "Реал Мадрид (Б)", "away": "Депортиво (Б)", "score": "-"},
        "results": {
            "home": {"win": 4, "draw": 6, "lose": 1, "total": "wwddwdddwdl"},
            "away": {"win": 5, "draw": 4, "lose": 1, "total": "dwdldwwwdw"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 25},
        "info": {"home": "Исарра", "away": "Герника Клуб", "score": "-"},
        "results": {
            "home": {"win": 3, "draw": 4, "lose": 3, "total": "wldwwddldl"},
            "away": {"win": 4, "draw": 4, "lose": 3, "total": "lwdwwddldwl"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 25},
        "info": {"home": "Аморебьета", "away": "УД Логронес", "score": "-"},
        "results": {
            "home": {"win": 6, "draw": null, "lose": 4, "total": "wwwwwlwlll"},
            "away": {"win": 2, "draw": 4, "lose": 4, "total": "ddlwldlldw"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 25},
        "info": {"home": "Баракальдо", "away": "Реал Сосьедад (Б)", "score": "-"},
        "results": {
            "home": {"win": 6, "draw": 4, "lose": null, "total": "dwddwwwwdw"},
            "away": {"win": 4, "draw": 3, "lose": 3, "total": "ldwdlwdwlw"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 25},
        "info": {"home": "Бургос", "away": "Туделано", "score": "0-1"},
        "results": {
            "home": {"win": 5, "draw": 6, "lose": null, "total": "wdddwdddwww"},
            "away": {"win": 4, "draw": 4, "lose": 2, "total": "dwdlwldwwd"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 25},
        "info": {"home": "Расинг", "away": "Спортинг (Б)", "score": "1-2"},
        "results": {
            "home": {"win": 7, "draw": 2, "lose": 1, "total": "wddwwwwwlw"},
            "away": {"win": 5, "draw": 2, "lose": 4, "total": "wwllwdldwwl"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 26},
        "info": {"home": "Балеарес", "away": "Валенсия (Б)", "score": "1-1"},
        "results": {
            "home": {"win": 1, "draw": 6, "lose": 3, "total": "wllddddddl"},
            "away": {"win": 2, "draw": 6, "lose": 2, "total": "dddldddwlw"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 26},
        "info": {"home": "Эркулес", "away": "Корнелья", "score": "1-1"},
        "results": {
            "home": {"win": 5, "draw": 4, "lose": 2, "total": "lddlwwwwdwd"},
            "away": {"win": 4, "draw": 2, "lose": 4, "total": "dwwlwlllwd"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 27},
        "info": {"home": "Гранада (Б)", "away": "Кордоба (Б)", "score": "1-0"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 2, "total": "wdwddlwwwl"},
            "away": {"win": 2, "draw": 4, "lose": 5, "total": "ldlldwldwdl"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 27},
        "info": {"home": "Мурсия", "away": "Мелилла", "score": "0-1"},
        "results": {
            "home": {"win": 5, "draw": 3, "lose": 2, "total": "ddwwwwdlwl"},
            "away": {"win": 3, "draw": 2, "lose": 5, "total": "wwlllldwld"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 27},
        "info": {"home": "Хумилья", "away": "Вильяновенсе", "score": "0-0"},
        "results": {
            "home": {"win": 2, "draw": 5, "lose": 3, "total": "ldwwldddld"},
            "away": {"win": 1, "draw": 4, "lose": 5, "total": "lldlldddlw"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 27},
        "info": {"home": "Бадахос", "away": "Эхидо", "score": "3-0"},
        "results": {
            "home": {"win": 4, "draw": 5, "lose": 1, "total": "wwdwdwdldd"},
            "away": {"win": null, "draw": 5, "lose": 5, "total": "ldldddllld"}
        }
    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 27},
        "info": {"home": "Картахена", "away": "УКАМ Мурсия", "score": "3-2"},
        "results": {
            "home": {"win": 6, "draw": 3, "lose": 1, "total": "wwlwdwddww"},
            "away": {"win": 5, "draw": 2, "lose": 3, "total": "lwdlwdlwww"}
        }

    }, {
        "eventInfo": {"date": "28.01.2018", "leagueId": 27},
        "info": {"home": "Лорка Депортива", "away": "Эсиха", "score": "0-1"},
        "results": {
            "home": {"win": 2, "draw": 4, "lose": 5, "total": "wllwlldddld"},
            "away": {"win": 2, "draw": 3, "lose": 5, "total": "ldllldlwdw"}
        }
    }, {
        "eventInfo": {"date": "29.01.2018", "leagueId": 8},
        "info": {"home": "Остенде", "away": "Локерен", "score": "2-3"},
        "results": {
            "home": {"win": 4, "draw": null, "lose": 7, "total": "wllwwwlllll"},
            "away": {"win": 4, "draw": 2, "lose": 5, "total": "lwlddwwllwl"}
        }
    }, {
        "eventInfo": {"date": "29.01.2018", "leagueId": 4},
        "info": {"home": "Тенерифе", "away": "Вальядолид", "score": "0-0"},
        "results": {
            "home": {"win": 5, "draw": 5, "lose": 1, "total": "ldwdwddwwdw"},
            "away": {"win": 2, "draw": 4, "lose": 5, "total": "wllldddlldw"}
        }

    }, {
        "eventInfo": {"date": "29.01.2018", "leagueId": 14},
        "info": {"home": "Марсель", "away": "Монако", "score": "2-2"},
        "results": {
            "home": {"win": 7, "draw": 2, "lose": 1, "total": "wwwwwdwldw"},
            "away": {"win": 5, "draw": 2, "lose": 3, "total": "dwldwlwlww"}
        }

    }, {
        "eventInfo": {"date": "29.01.2018", "leagueId": 23},
        "info": {"home": "Аргентинос Хуниорс", "away": "Сан-Мартин Сан-Хуан", "score": "2-0"},
        "results": {
            "home": {"win": 3, "draw": 1, "lose": 2, "total": "dlwwwl"},
            "away": {"win": 2, "draw": 6, "lose": 5, "total": "ldwdlldldwldd"}
        }
    }, {
        "eventInfo": {"date": "29.01.2018", "leagueId": 23},
        "info": {"home": "Унион Санта-Фе", "away": "Расинг", "score": "2-1"},
        "results": {
            "home": {"win": 7, "draw": 3, "lose": 1, "total": "ddwwwwwwwdl"},
            "away": {"win": 1, "draw": 2, "lose": 5, "total": "dwllldll"}
        }
    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 22},
        "info": {"home": "Йонг ПСВ", "away": "Эйндховен", "score": "4-1"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 4, "total": "lwlwwwldldd"},
            "away": {"win": 3, "draw": 3, "lose": 5, "total": "lldlwdlwwld"}
        }
    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 17},
        "info": {"home": "Пасуш де Феррейра", "away": "Фейренси", "score": "2-1"},
        "results": {
            "home": {"win": 3, "draw": 4, "lose": 2, "total": "ddllwwwdd"},
            "away": {"win": 2, "draw": 1, "lose": 6, "total": "lwlllllwd"}
        }
    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 17},
        "info": {"home": "Портимоненси", "away": "Риу Аве", "score": "4-1"},
        "results": {
            "home": {"win": 4, "draw": 2, "lose": 3, "total": "ldlwwdwlw"},
            "away": {"win": 4, "draw": 2, "lose": 3, "total": "wldwwldlw"}
        }

    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 2},
        "info": {"home": "Бохум", "away": "Арминия", "score": "0-1"},
        "results": {
            "home": {"win": 4, "draw": 2, "lose": 3, "total": "lwddwwlwl"},
            "away": {"win": 4, "draw": 2, "lose": 4, "total": "llwdlwwldw"}
        }

    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 11},
        "info": {"home": "Тернана", "away": "Салернитана", "score": "2-2"},
        "results": {
            "home": {"win": 3, "draw": 7, "lose": 3, "total": "wdddddwdlwdll"},
            "away": {"win": 3, "draw": 4, "lose": 4, "total": "lwlldwwddld"}
        }

    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 19},
        "info": {"home": "Реймс", "away": "Лорьян", "score": "0-1"},
        "results": {
            "home": {"win": 8, "draw": 1, "lose": 1, "total": "wwwdwwwlww"},
            "away": {"win": 3, "draw": 3, "lose": 4, "total": "ldldwllwwd"}
        }

    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 3},
        "info": {"home": "Сельта", "away": "Бетис", "score": "3-2"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 3, "total": "dlwwlddwl"},
            "away": {"win": 3, "draw": 1, "lose": 5, "total": "wwllldwll"}
        }
    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 23},
        "info": {"home": "Атлетико Тукуман", "away": "Темперлей", "score": "3-0"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": null, "total": "wdwddw"},
            "away": {"win": 2, "draw": 3, "lose": 6, "total": "ddlwlldllwl"}
        }
    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 23},
        "info": {"home": "Индепендьенте", "away": "Эстудиантес", "score": "1-2"},
        "results": {
            "home": {"win": 3, "draw": 2, "lose": 1, "total": "dwdwlw"},
            "away": {"win": 2, "draw": 1, "lose": 2, "total": "wllwd"}
        }
    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 16},
        "info": {"home": "Пройссен Мюнстер", "away": "Рот-Вайсс Эрфурт", "score": "5-0"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 4, "total": "wlwddwdlllw"},
            "away": {"win": 1, "draw": 3, "lose": 7, "total": "lldllllwddl"}
        }

    }, {
        "eventInfo": {"date": "30.01.2018", "leagueId": 19},
        "info": {"home": "Ланс", "away": "Сошо", "score": "0-1"},
        "results": {
            "home": {"win": 5, "draw": null, "lose": 5, "total": "lwwwlwwlll"},
            "away": {"win": 3, "draw": 4, "lose": 4, "total": "dwlldwllwdd"}
        }

    }, {
        "eventInfo": {"date": "31.01.2018", "leagueId": 17},
        "info": {"home": "Эшторил", "away": "Тондела", "score": "3-0"},
        "results": {
            "home": {"win": 2, "draw": 1, "lose": 5, "total": "lwdllllw"},
            "away": {"win": 3, "draw": 2, "lose": 4, "total": "lwwlldlwd"}
        }
    }, {
        "eventInfo": {"date": "31.01.2018", "leagueId": 6},
        "info": {"home": "Бирмингем", "away": "Сандерленд", "score": "3-1"},
        "results": {
            "home": {"win": 5, "draw": 2, "lose": 7, "total": "lwlllwldwwlldw"},
            "away": {"win": 3, "draw": 5, "lose": 6, "total": "lwldwllddldldw"}
        }

    }, {
        "eventInfo": {"date": "31.01.2018", "leagueId": 6},
        "info": {"home": "Мидлсбро", "away": "Шеффилд Уэнсдей", "score": "0-0"},
        "results": {
            "home": {"win": 7, "draw": 2, "lose": 5, "total": "llwwlwwldlwdww"},
            "away": {"win": 3, "draw": 5, "lose": 6, "total": "dlwlddwlllddwl"}
        }
    }, {
        "eventInfo": {"date": "31.01.2018", "leagueId": 6},
        "info": {"home": "Халл Сити", "away": "Лидс", "score": "0-0"},
        "results": {
            "home": {"win": 4, "draw": 5, "lose": 5, "total": "dddwldllwldwlw"},
            "away": {"win": 7, "draw": null, "lose": 7, "total": "llwwwllwlllwww"}
        }
    }, {
        "eventInfo": {"date": "31.01.2018", "leagueId": 6},
        "info": {"home": "Шеффилд Юнайтед", "away": "Астон Вилла", "score": "0-1"},
        "results": {
            "home": {"win": 8, "draw": 2, "lose": 4, "total": "dlwldlwwwwlwww"},
            "away": {"win": 6, "draw": 3, "lose": 5, "total": "wwlldwwdlwwdll"}
        }

    }, {
        "eventInfo": {"date": "01.02.2018", "leagueId": 17},
        "info": {"home": "Боавишта", "away": "Маритиму", "score": "2-1"},
        "results": {
            "home": {"win": 5, "draw": null, "lose": 4, "total": "wllwlwwwl"},
            "away": {"win": 2, "draw": 2, "lose": 5, "total": "dlldwllwl"}
        }

    }, {
        "eventInfo": {"date": "01.02.2018", "leagueId": 17},
        "info": {"home": "Шавиш", "away": "Сетубал", "score": "2-2"},
        "results": {
            "home": {"win": 3, "draw": 4, "lose": 2, "total": "wdddwdwll"},
            "away": {"win": null, "draw": 3, "lose": 6, "total": "ddllllldl"}
        }

    }, {
        "eventInfo": {"date": "01.02.2018", "leagueId": 5},
        "info": {"home": "Ньюкасл Юнайтед", "away": "Бёрнли", "score": "1-1"},
        "results": {
            "home": {"win": 3, "draw": 3, "lose": 6, "total": "ddlllllwdwwl"},
            "away": {"win": 4, "draw": 5, "lose": 3, "total": "ldddlwwlwddw"}
        }
    }, {
        "eventInfo": {"date": "01.02.2018", "leagueId": 5},
        "info": {"home": "Саутгемптон", "away": "Брайтон", "score": "1-1"},
        "results": {
            "home": {"win": 3, "draw": 5, "lose": 5, "total": "dldldwlwdllwd"},
            "away": {"win": 2, "draw": 2, "lose": 8, "total": "ldllllwwlldl"}
        }
    }, {
        "eventInfo": {"date": "01.02.2018", "leagueId": 5},
        "info": {"home": "Сток Сити", "away": "Уотфорд", "score": "0-0"},
        "results": {
            "home": {"win": 5, "draw": 2, "lose": 5, "total": "wlwlwldlwldw"},
            "away": {"win": 4, "draw": 1, "lose": 7, "total": "lllllwlldwww"}
        }

    }, {
        "eventInfo": {"date": "01.02.2018", "leagueId": 5},
        "info": {"home": "Тоттенхэм", "away": "Манчестер Юнайтед", "score": "2-0"},
        "results": {
            "home": {"win": 7, "draw": 4, "lose": 1, "total": "wdwwwdwwwddl"},
            "away": {"win": 7, "draw": 3, "lose": 2, "total": "wwdwwwlldwdw"}
        }
    }, {
        "eventInfo": {"date": "02.02.2018", "leagueId": 2},
        "info": {"home": "Нюрнберг", "away": "Эрцгебирге Ауэ", "score": "2-0"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 3, "total": "dwdlwlwldw"},
            "away": {"win": 2, "draw": 2, "lose": 5, "total": "llldlwwdl"}
        }
    }, {
        "eventInfo": {"date": "02.02.2018", "leagueId": 2},
        "info": {"home": "Фортуна Дюссельдорф", "away": "Зандхаузен", "score": "1-0"},
        "results": {
            "home": {"win": 6, "draw": 2, "lose": 2, "total": "wlldwwwwwd"},
            "away": {"win": 2, "draw": 3, "lose": 4, "total": "dlwllldwd"}
        }

    }, {
        "eventInfo": {"date": "02.02.2018", "leagueId": 16},
        "info": {"home": "Вехен", "away": "Карлсруэ", "score": "1-1"},
        "results": {
            "home": {"win": 7, "draw": 1, "lose": 2, "total": "wwlwlwwdww"},
            "away": {"win": 2, "draw": 3, "lose": 5, "total": "dwwdlldlll"}
        }

    }, {
        "eventInfo": {"date": "02.02.2018", "leagueId": 16},
        "info": {"home": "Лотте", "away": "Аален", "score": "2-0"},
        "results": {
            "home": {"win": 4, "draw": 2, "lose": 4, "total": "wddlwlwwll"},
            "away": {"win": 1, "draw": 4, "lose": 5, "total": "ldllldddwl"}
        }
    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 22},
        "info": {"home": "Волендам", "away": "Фортуна", "score": "2-0"},
        "results": {
            "home": {"win": 4, "draw": 3, "lose": 4, "total": "wwwdlwlldld"},
            "away": {"win": 5, "draw": 1, "lose": 5, "total": "lwwwllwwdll"}
        }
    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 22},
        "info": {"home": "Ден Босх", "away": "Телстар", "score": "3-2"},
        "results": {
            "home": {"win": 5, "draw": 2, "lose": 3, "total": "llwdwdwwwl"},
            "away": {"win": 3, "draw": 5, "lose": 4, "total": "dwlllwwdddld"}
        }

    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 22},
        "info": {"home": "Эйндховен", "away": "Валвейк", "score": "3-1"},
        "results": {
            "home": {"win": 5, "draw": 1, "lose": 4, "total": "wwlwwlwlld"},
            "away": {"win": null, "draw": 4, "lose": 6, "total": "ldlldllddl"}
        }

    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 19},
        "info": {"home": "Кевийи Руан", "away": "Шатору", "score": "0-1"},
        "results": {
            "home": {"win": 3, "draw": 1, "lose": 7, "total": "llwwlllwlld"},
            "away": {"win": 5, "draw": 1, "lose": 6, "total": "lwwlwdlllwlw"}
        }
    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 19},
        "info": {"home": "Ним", "away": "Аяччо", "score": "1-1"},
        "results": {
            "home": {"win": 8, "draw": 1, "lose": 3, "total": "wlwwwwwlwwdl"},
            "away": {"win": 4, "draw": 4, "lose": 3, "total": "lwlddwwlwdd"}
        }
    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 19},
        "info": {"home": "Сошо", "away": "Газелек Аяччо", "score": "4-1"},
        "results": {
            "home": {"win": 7, "draw": null, "lose": 4, "total": "wlwwwwlllww"},
            "away": {"win": 3, "draw": 2, "lose": 6, "total": "wllwwlllldd"}
        }
    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 19},
        "info": {"home": "ФК Париж", "away": "Ньор", "score": "0-1"},
        "results": {
            "home": {"win": 8, "draw": 3, "lose": 1, "total": "wwdwdwwwwwld"},
            "away": {"win": 2, "draw": 2, "lose": 7, "total": "lllwlldwlld"}
        }

    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 20},
        "info": {"home": "Булонь", "away": "Лаваль", "score": "1-0"},
        "results": {
            "home": {"win": 4, "draw": 6, "lose": 4, "total": "dddwdldlwlwldw"},
            "away": {"win": 1, "draw": 5, "lose": 4, "total": "dlldldddlw"}
        }

    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 20},
        "info": {"home": "Конкарно", "away": "Лез Эрбье", "score": "2-2"},
        "results": {
            "home": {"win": 4, "draw": 5, "lose": 3, "total": "wwldwdldlwdd"},
            "away": {"win": 3, "draw": 4, "lose": 4, "total": "wddllwlwdld"}
        }

    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 20},
        "info": {"home": "По", "away": "Консола", "score": "1-2"},
        "results": {
            "home": {"win": 3, "draw": 6, "lose": 3, "total": "wdldwddwlddl"},
            "away": {"win": 4, "draw": 3, "lose": 5, "total": "dwllddwllwlw"}
        }
    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 20},
        "info": {"home": "Ред Стар 93", "away": "Авранш", "score": "2-2"},
        "results": {
            "home": {"win": 5, "draw": 2, "lose": 1, "total": "wlwwwdwd"},
            "away": {"win": 1, "draw": 5, "lose": 7, "total": "dlddllwlllldd"}
        }

    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 20},
        "info": {"home": "Саннуа", "away": "Шамбли", "score": "2-2"},
        "results": {
            "home": {"win": 3, "draw": 4, "lose": 3, "total": "dwddlldwwl"},
            "away": {"win": 2, "draw": 4, "lose": 3, "total": "wwddlldld"}
        }
    }, {
        "eventInfo": {"date": "03.02.2018", "leagueId": 20},
        "info": {"home": "Шоле", "away": "Лион Дюшер", "score": "3-1"},
        "results": {
            "home": {"win": 1, "draw": 1, "lose": 5, "total": "lllwdll"},
            "away": {"win": 2, "draw": 5, "lose": 5, "total": "ddllldwlwdld"}
        }
    }
];