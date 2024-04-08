import React from 'react'
const integers=['4', '5', '0', '1', '2', '3', '6', '7', '8', '9']
const checkNumerics = (value) => {
	value = value.split('');
	let flag = '';

     value.map(ints=>{
		if(integers.includes(ints))
		{
          flag+=ints
		}
	 })
	if(flag==='45'){
		return true
	}
}

export default checkNumerics
