//
// import {Button} from "@mui/material";
// import 'date-fns';
// import React, { useState } from 'react';
// import './App.css';
//
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker
// } from '@mui/material/pickers';
//
// const DragableFile = () => {
//     let list = [];
//     const [selectedDate, setSelectedDate] = useState(new Date());
//
//     const handleDateChange = (date) => {
//         console.log(date);
//         setSelectedDate(date);
//     };
//
//
//     return (
//         <div>
//
//
//             <div className="App">
//
//                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//
//                     <KeyboardDatePicker
//                         label="Material Date Picker"
//                         value={selectedDate}
//                         onChange={handleDateChange}
//                     />
//
//                 </MuiPickersUtilsProvider>
//
//             </div>
//
//         </div>
//
//     )
// }
// export default DragableFile;