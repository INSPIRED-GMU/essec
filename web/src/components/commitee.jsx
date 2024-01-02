import { useState } from "react"
import BJM from '../assets/bjm.jpeg';
import TM from '../assets/tm.jpg';
import DP from '../assets/dp.jpg';
import EH from '../assets/eh.jpg';
import CO from '../assets/co.jpg';
import MN from '../assets/rn.jpg';

export default function Committee(){
    const [organizing, setorganizing] = useState([
        {
          "name": "Dr. Brittany Johnson-Matthews",
          "affiliation": "George Mason University",
          "img":BJM
        },
        {
          "name": "Dr. Tim Menzies",
          "affiliation": "NC State University",
          "img":TM
        },
        {
          "name": "Dr. Denys Poshyvanyk",
          "affiliation": "William & Mary",
          "img":DP
        }
      ]
      )
    const [localchair, setlocalchair] = useState([
      {
        "name":"Dr. Oscar Chaparro",
        "affiliation":"William & Mary",
        "img":CO
      }
    ])
    const [webchair, setwebchair] = useState([
      {
        "name":"Ebtesam Al Haque",
        "affiliation":"George Mason University",
        "img":EH
      },
      {
        "name":"Seyed Mohammadreza Noei",
        "affiliation":"George Mason University",
        "img":MN
      }
    ])
    return(
        <div id="commitee" className="p-20 bg-base-200">
            <h1 className="font-bold text-3xl mb-10 text-center mt-10">Organizing Committee</h1>
            <div className="flex flex-wrap grid-cols-3 gap-20 justify-center pl-10 pr-10">
                {organizing.map((organizer)=>(<div className="place-self-center text-center">
                <div className="avatar">
                <div className="rounded-full w-64">
                    <img src={organizer.img} />
                </div>
                </div>
                <div className="text-xl">{organizer.name}</div>
                <div className="text-sm italic">{organizer.affiliation}</div>
                </div>))}
            </div>

            <h1 className="font-bold text-3xl mb-10 text-center mt-10">Local Arrangements Chair</h1>
            <div className="flex flex-wrap grid-cols-3 gap-20 justify-center pl-10 pr-10">
                {localchair.map((organizer)=>(<div className="place-self-center text-center">
                <div className="avatar">
                <div className="rounded-full w-64">
                    <img src={organizer.img} />
                </div>
                </div>
                <div className="text-xl">{organizer.name}</div>
                <div className="text-sm italic">{organizer.affiliation}</div>
                </div>))}
            </div>

            <h1 className="font-bold text-3xl mb-10 text-center mt-10">Web Co-chairs</h1>
            <div className="flex flex-wrap grid-cols-3 gap-20 justify-center pl-10 pr-10">
                {webchair.map((organizer)=>(<div className="place-self-center text-center">
                <div className="avatar">
                <div className="rounded-full w-64">
                    <img src={organizer.img} />
                </div>
                </div>
                <div className="text-xl">{organizer.name}</div>
                <div className="text-sm italic">{organizer.affiliation}</div>
                </div>))}
            </div>
        </div>
    )
}