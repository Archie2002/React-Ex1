import React, {useState, useEffect} from 'react'

const Clock1 = () => {

    var [date, setDate] = useState(new Date())

    useEffect(()=>{
        var timer = setInterval(()=> setDate(new Date()), 1000)      
    })
    return (
        <div>
            <h3>TIme: {date.toLocaleDateString()}</h3>
    <h2>Second: {date.getSeconds()}</h2>
        </div>
    )
}

export default Clock1
