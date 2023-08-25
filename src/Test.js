// const Test = () => {
//     let result=[]
//   const gridColumns=[{field:"test"},{field:"action"},{field:"workFlow"},{field:"state"},{field:"country"}]
//     let field="country"
//     let oldIndex=4
//     let targetIndex=2
//     gridColumns.forEach((column) => {
//         if(column.field===field){
//             // gridColumns.splice(gridColumns.indexOf(column.field))
//             // gridColumns.splice(1, 0, column)
//             const secondRemoved = gridColumns.filter((fruit) => fruit.field !== column.field);
//             const changedPositions=[
//                 ...secondRemoved.slice(0, oldIndex<targetIndex ? targetIndex: targetIndex-1),
//                 column,
//                 ...secondRemoved.slice(oldIndex<targetIndex ? targetIndex: targetIndex-1)
//             ]
//             result=changedPositions
//             break;
//         }
//     });
//
//     return <div>{JSON.stringify(result)}</div>
//
// }
// export default Test;