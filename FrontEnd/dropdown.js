import React from 'react';
function dropdown() {
    return ( 
        <>
        <div class="dropdown">
<button class="btn btn-success 
        dropdown-toggle" type="button" 
        id="dropdownMenuButton" 
        data-toggle="dropdown"
        aria-haspopup="true" 
        aria-expanded="false">
    Country Flags
</button>

<ul class="dropdown-menu" 
    aria-labelledby="dropdownMenuButton">
    <li class="dropdown-item">
       India</li>
    <li class="dropdown-item">
        USA</li>
    <li class="dropdown-item">
       England</li>
    <li class="dropdown-item">
         Brazil</li>
</ul>
</div>
        </>
     );
}

export default dropdown;
