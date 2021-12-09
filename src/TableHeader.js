import React from 'react'

const TableHeader = () =>{
    return (
        <div>
            <table width="100%" border="1" >
            <tr class="bg-info">
                    <th width="10%">Employee ID</th>
                    <th width="10%">Employee Name</th>
                    <th width="10%">Age</th>
                    
                    <th width="10%">Joiningdate</th>
                    <th width="10%">Position</th>
                    <th width="10%">city</th>
                    <th width="10%">Country</th>
                </tr>
            </table>
        </div>
    );
}

export default TableHeader;