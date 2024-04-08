import React from 'react'
const rohitArray=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const checkRohit = (value) => {
	value = value.split('');
	let flag = false;
    let word = '';
	value.map(chars=>{
	   if(rohitArray.includes(chars) )
	   {
		 word+=chars
	   }
	})
   if(word==='rohit'){
	   return true
   }
}

export default checkRohit
