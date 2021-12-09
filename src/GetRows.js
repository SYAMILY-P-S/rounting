import React from 'react';

const GetRows = (props) =>{

    return (
        <div class="table-responsive">
            <table width="100%" border="1">
            <tr>
                    <td width="6%">{props.std.id}</td>
                    <td width="6%">{props.std.firstName} {props.std.lastName}</td>
                    <td width="6%">{props.std.age}</td>
                    <td width="6%">{props.std.joiningdate}</td>
                    <td width="6%">{props.std.position}</td>
                    <td width="6%">{props.std.city}</td>
                    <td width="6%">{props.std.country}</td>
                </tr>
            </table>
        </div>
    );
}

export default GetRows;