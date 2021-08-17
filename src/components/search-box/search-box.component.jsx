import React from 'react'

import './search-box.styles.css'

/* 
    FUNCTIONAL COMPONENT - export const - no export statement at end
*/

// export const SearchBox = (props) => (

//     <input className='search' type='search' placeholder={props.placeholder} 
//                   onChange={ props.handleChange }/>
// );


/* 
    SAME AS
 */

const SearchBox = (props) => {

    return (

        <input className='search-box' type='search' placeholder={props.placeholder} 
                    onChange={ props.handleChange }/>
    );
}

// default export    
export default SearchBox