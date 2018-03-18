export class FiltersHandler {

    public static filterIt(setValue:any){
        const filteredBy1 = FiltersHandler.filter1(setValue.tableInfo, setValue.valueSelect);
        const filteredBy2 = FiltersHandler.filter2(filteredBy1, setValue.valueTeamsName);
        /*const filteredBy3 = FiltersHandler.filter3(filteredBy2);*/
        console.log('filteredBy2',filteredBy2);
        return filteredBy2;
    }

    private static filter1(table:any,value:string){
       const resultTable = table.filter((elem:any) => elem.ligue == value);
       return resultTable;
    };

    private static filter2(table:any,value:string){
        const resultTable = table.filter((elem:any) => elem.teamHome == value);
        console.log('resultTable 2',resultTable);
        return resultTable;
    };

    private static filter3(){};

}

