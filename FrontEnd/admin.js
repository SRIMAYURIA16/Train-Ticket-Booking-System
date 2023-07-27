import React from 'react';
import './Admin.css';
function AdminPage() {
    return ( 
        <div className='w1'>
        <center>

        <table>
  <tr>
    <th>Add New Train Details</th>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <td>Add</td>
  </tr>
  <tr>
    <th>Update the Existing Train Details</th>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <td>Update</td>
  </tr>
  <tr>
    <th>Delete the Train</th>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <td>Delete</td>
    
  </tr>
</table>
</center>
</div>
     );
}

export default AdminPage;