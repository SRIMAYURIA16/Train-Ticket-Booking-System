import React from 'react';
function Info(props) {
    return ( 
        <>
        <div className='i11'>
            <fieldset>
                <legend>PASSENGER{props.n+1}</legend>
                    <input type="text" placeholder='Name'style={{border:'none',width:'18%'}}>
                    </input><br></br><br></br>
                    <input type="number" placeholder='Age'style={{border:'none',width:'18%'}}>
                    </input><br></br><br></br>
                    <input type="number" placeholder='Aadhar Number'style={{border:'none',width:'18%'}}>
                    </input><br></br><br></br>
                    <select style={{border:'none',width:'18%',color:'rgb(104, 102, 102)'}}>
                        <option style={{color:'black'}} value='Class'>Class</option>
                        <option style={{color:'black'}}value="AC 1">AC 1</option>
                        <option style={{color:'black'}}value="AC 2">AC 2</option>
                        <option style={{color:'black'}}value="AC 3">AC 3</option>
                        <option style={{color:'black'}}value="Sleeper">SLEEPER</option>
                        <option style={{color:'black'}}value="First Class">FIRST CLASS</option>
                        <option style={{color:'black'}}value="Second Class">SECOND CLASS</option>
                    </select>
                    <br></br><br></br>
                    <select style={{border:'none',width:'18%',color:'rgb(104, 102, 102)'}}>
                        <option style={{color:'black'}} value='Gender'>Gender</option>
                        <option style={{color:'black'}}value='Male'>MALE</option>
                        <option style={{color:'black'}}value='Female'>FEMALE</option>
                    </select>
                    <br></br><br></br> 
            </fieldset>
        </div>
        </>
     );
}

export default Info;