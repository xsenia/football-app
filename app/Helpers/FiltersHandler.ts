export class FiltersHandler {

    public static filterIt(setValue:any){
        const filteredBy1 = FiltersHandler.filter1(setValue.tableInfo, setValue.valueSelect);
        const filteredBy2 = FiltersHandler.filter2(filteredBy1, setValue.valueTeamsName);
        /*const filteredBy3 = FiltersHandler.filter3(filteredBy2);*/
        console.log('Результат после фильтра - ',filteredBy2);
        return filteredBy2;
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

    private static filter3(){};

}

