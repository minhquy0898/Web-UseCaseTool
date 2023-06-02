export function formatTimestamptoDate(initdate:any){
    const date = JSON.stringify(initdate)
    return date.slice(1,11)
}
