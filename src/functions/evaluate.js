import React from 'react'

const evaluate = (value) => {
	try {
        if(eval(value) === 45)
		return true
    } catch (error) {
        return NaN;
    }
}

export default evaluate
