import React from "react"
import checkRohit from "./checkRohit"

const integers=['4', '5', '0', '1', '2', '3', '6', '7', '8', '9']
const rohitArray=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const operators=['+','-','/','%','*']

export const checkHitmanString=(value)=>{
	if(integers.includes(value) && operators.includes(value) && !rohitArray.includes(value))
	{
		console.log("number apperared")
	}
    value = value.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '')
	value = value.split(" ").join("")
	value = value.toLowerCase()
	if(value.length === 6 || value==='rohit' || value==='shana' || checkRohit(value) ||value==='mumbaicharaja'||value==='rohitsharma')
	{
		return true
	}
	else{
	return false
  }
  }