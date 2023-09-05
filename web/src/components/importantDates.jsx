import { useState } from "react"

export default function ImportantDates(){
    const [dates, setdates] = useState([
        {
          "event_key": "Submission opens",
          "event_value": "October 1, 2023"
        },
        {
          "event_key": "Submission deadline",
          "event_value": "November 1, 2023"
        },
        {
          "event_key": "Decisions announced",
          "event_value": "December 1, 2023"
        },
        {
          "event_key": "Registration opens",
          "event_value": "November 15, 2023"
        },
        {
          "event_key": "Registration closes",
          "event_value": "December 31, 2023"
        },
        {
          "event_key": "Colloquium",
          "event_value": "January 12, 2024"
        }
      ]
      
      )
    return(
        <div className="hero-overlay p-5 rounded-r-2xl">
            <h1 className="text-2xl font-bold">Important Dates</h1>
  <table className="table">
    {/* head */}
    <tbody>
      {/* row 1 */}
      {dates.map((date)=><tr  className={date.event_key=="Submission opens"?"font-bold":""}>
        <td>{date.event_key}</td>
        <td>{date.event_value}</td>
      </tr>
      )}
    </tbody>
  </table>
</div>
    )
}
