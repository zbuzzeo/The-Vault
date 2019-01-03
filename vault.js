'use strict';
module.exports = function( ) {
    // let privateVar = 'lakdsksadlsdaklsad';
    const vault = {  };
    const setValue = ( key, value ) => {
        vault[ key ] = value;
    }
    const getValue = ( key ) => {
        if ( vault[ key ] ) {
            return vault[ key ];
        }
        else { return null };
    }

    return {
        setValue: setValue,
        getValue: getValue,
    }

};

// console.log ( privateVar );