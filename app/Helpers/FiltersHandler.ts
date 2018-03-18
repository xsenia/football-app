export class FiltersHandler {

    public static filterIt(setValue:any){
        console.log('setValue.valueRadio',setValue.valueRadio);
        const filteredBy1 = FiltersHandler.filter1(setValue.tableInfo, setValue.valueSelect);
        const filteredBy2 = FiltersHandler.filter2(filteredBy1, setValue.valueTeamsName);
        const filteredBy3 = FiltersHandler.filter3(filteredBy2,setValue.valueRadio);
        console.log('Результат после фильтра - ',filteredBy2);
        return filteredBy3;
    }

    private static filter1(table:any,value:string){
        if (value && value!='Выберите лигу') {
            const resultTable = table.filter((elem:any) => elem.ligue == value);
            //console.log('resultTable ligue',resultTable);
            return resultTable;
        } else {
            return table;
        }

    };

    private static filter2(table:any,value:string) {
        if (value) {
            const resultTable = table.filter((elem: any) => elem.teamHome == value);
            //console.log('resultTable team home', resultTable);
            return resultTable;
        } else {
            return table;
        }
    };

    private static filter3(table:any,value:any) {
        if (value.length<3) {
            let key:string = value[0];
            if (key == 'win') {
                key = "Победа";
            } else if (key == 'draw') {
                key = "Ничья";
            } else {
                key = "Поражение";
            }
            const resultTable = table.filter((elem: any) => elem.resultWord == key);
            /*console.log('resultTable ', resultTable);
            console.log('key ', key);*/
            return resultTable;
        } else {
            return table;
        }
    };

}

