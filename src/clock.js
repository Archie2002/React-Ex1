import React, {useEffect, useState} from 'react'

function Clock() {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January,', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const today = new Date()
    const dt = days[today.getDay()]
    const date =(months[today.getMonth()+1]) + '-' +today.getDate() + '-' +  today.getFullYear() 
    const hrs = today.getHours()
    const min = today.getMinutes()
    const stringM = hrs>12 && min>1  ? 'pm' : 'am'

    const [sec1, setSec1] = useState(today);

    useEffect(()=>{
        var timer = setInterval(()=> setSec1(new Date()), 1000)      
    })

    return (
        <div>
            {
                <div>
                    <h1>Digital Clock</h1>
                <h3>{dt}</h3>
            <h1>{hrs} : {min} : {sec1.getSeconds()} <span>{stringM}</span></h1>
                <h5>{date}</h5>
                </div>
            }
        </div>
    )
}

export default Clock
