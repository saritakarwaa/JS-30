const insert=document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`<div class='color'>
        <table border="1" style="border-collapse:collapse; text-align:left;">
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key===' '?'Space':e.key}</td>
            <td>${e.keycode || e.which}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    </div>`;
});



// const insert = document.getElementById('insert');

// window.addEventListener('keydown', (e) => {
//     // If the table doesn't exist, create it
//     if (!insert.querySelector('table')) {
//         insert.innerHTML = `
//             <table border="1" style="border-collapse:collapse; text-align:left; width:100%;">
//                 <thead>
//                     <tr>
//                         <th>Key</th>
//                         <th>KeyCode</th>
//                         <th>Code</th>
//                     </tr>
//                 </thead>
//                 <tbody id="key-log"></tbody>
//             </table>`;
//     }

//     // Append a new row for the key pressed
//     const tbody = document.getElementById('key-log');
//     const newRow = `
//         <tr>
//             <td>${e.key === ' ' ? 'Space' : e.key}</td>
//             <td>${e.keyCode || e.which}</td>
//             <td>${e.code}</td>
//         </tr>`;
//     tbody.innerHTML += newRow;
// });
