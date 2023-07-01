import { ColumnFormat, RowType } from ".";

const ConvertDotNested = (object: any | undefined, key: string): any => {
    let keys: Array<any> = key.split('.')
    for (let i = 0; i < keys.length; i++) {
        if (typeof object !== undefined) {
            object = object[keys[i]]
        }
    }
    return object
}


export const CreateTableData = (data: Array<any>, columns: Array<ColumnFormat>): Array<RowType> => {
    let results: Array<RowType> = [];

    data.forEach((v, i) => {
        let rowData: Array<any> = [];
        columns.forEach((vColumn, iColumn) => {
            let row: any = ''
            if (vColumn.value !== null && vColumn.value !== undefined) {
                row = ConvertDotNested(v, vColumn.value)
            } else {
                if (vColumn.render !== undefined) {
                    row = vColumn.render(v)
                }
            }
            rowData.push(row)
        })
        results.push({
            original: v,
            row: rowData
        }) 
    })
    return results;
}