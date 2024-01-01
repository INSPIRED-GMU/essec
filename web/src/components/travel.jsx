export default function Travel(){
    const hotels = {"hotels": [
        {
            "name": "Holiday Inn Express & Suites",
            "address": "1452 Richmond Road",
            "phone": "(757) 941-1057",
            "distance": 1.3,
            "website": "https://www.ihg.com/holidayinnexpress/hotels/us/en/williamsburg/wbgva/hoteldetail"
        },
        {
            "name": "Hilton Garden Inn",
            "address": "1624 Richmond Road",
            "phone": "(757) 253-9400",
            "distance": 1.6,
            "website": "https://www.hilton.com/en/hotels/phfwhgi-hilton-garden-inn-williamsburg/"
        },
        {
            "name": "Comfort Inn Williamsburg Gateway",
            "address": "331 Bypass Road",
            "phone": "(804) 605-6064",
            "distance": 1.7,
            "website": "https://www.choicehotels.com/virginia/williamsburg/comfort-inn-hotels/va676"
        },
        {
            "name": "Embassy Suites by Hilton Williamsburg",
            "address": "3006 Mooretown Road",
            "phone": "(757) 345-7606",
            "distance": 1.7,
            "website": "https://www.hilton.com/en/hotels/wbgvaes-embassy-suites-williamsburg/"
        },
        {
            "name": "Fairfield Inn & Suites",
            "address": "1402 Richmond Road",
            "phone": "(757) 645-3600",
            "distance": 1.8,
            "website": "https://www.marriott.com/en-us/hotels/phffw-fairfield-inn-and-suites-williamsburg/overview/"
        },
        {
            "name": "Holiday Inn Hotel & Suites Gateway",
            "address": "515 Bypass Road",
            "phone": "(804) 605-6064",
            "distance": 1.9,
            "website": "https://www.ihg.com/holidayinn/hotels/us/en/williamsburg/wbgbr/hoteldetail"
        },
        {
            "name": "Clarion Hotel",
            "address": "3032 Richmond Road",
            "phone": "(757) 565-2600",
            "distance": 2.7,
            "website": "https://www.choicehotels.com/virginia/williamsburg/clarion-hotels/va740?source=gyxt"
        },
        {
            "name": "Colonial Williamsburg Resorts",
            "address": "1010 Kingsmill Road",
            "phone": "(757) 220-7736",
            "distance": 5.7,
            "website": "https://www.colonialwilliamsburghotels.com"
        },
        {
            "name": "Wyndham Garden Hotel Busch Gardens Area",
            "address": "201 Water Country Parkway",
            "phone": "(757) 253-6444",
            "distance": 6.4,
            "website": "https://www.wyndhamhotels.com/wyndham-garden/williamsburg-virginia/wyndham-garden-williamsburg-busch-gardens/overview?CID=LC:GN::GGL:RIO:National:06487&iata=00065402"
        }
    ]
    
    }
    return(
        <div id="travel" className="p-20">
        <h1 className="text-3xl font-bold mb-5">Travel and Logistics</h1>
        <h2 className="font-bold text-xl">Getting here</h2>
        <p>We look forward to welcoming you at William & Mary. Here are some key details to help you plan your trip.</p>
        <h2 className="font-bold text-lg mt-3">🛫 Air</h2>
        <p>There are three airports convenient to Williamsburg:</p> 
        <ul className="list-disc ml-5">
            <li>Richmond International Airport (RIC)</li>
            <li>Norfolk International Airport (ORF)</li>
            <li>Newport News/Williamsburg Airport (PHF)</li>
        </ul>
        <p>Richmond and Norfolk are each approximately one hour from the College by car, and the drive from Newport News takes forty minutes. The tunnel between Norfolk and Williamsburg can cause traffic delays, especially during rush hour.</p>
        <h2 className="font-bold text-lg mt-3">🚊 Rail</h2>
        <p>Amtrak train service is available to Williamsburg. Rail travel can be especially convenient for travelers from New York, Philadelphia or Washington, D.C.</p>
        <h2 className="font-bold text-lg mt-3">🚘 Parking</h2>
        <p>Parking information coming soon</p>
        {/* <h2 className="font-bold text-lg">🚍 Bus</h2>
        <p>Bus information...</p> */}
        <h2 className="font-bold text-xl mt-10">Accommodation</h2>
        <p>While we do not have any special arrangements or affiliations with local hotels, we would like to provide you with a list of nearby hotels for your convenience. Please note that the conference does not endorse any specific hotel and has not negotiated special rates. For further details and to make reservations, please contact the hotels directly. We also encourage you to explore other accommodation options that may meet your specific requirements.</p>
        <table className="table-lg mt-10 mb-10 table border-collapse bg-blue-100">
                <thead className='bg-blue-300'>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.hotels.map((item, index) => (
                        <tr key={index} className="border-blue-200">
                            <td className="font-semibold w-1/4">{item.name}<br></br><span className="badge badge-ghost badge-sm font-bold">{item.distance} mi</span></td>
                            <td className="w-1/4">{item.address}</td>
                            <td className="w-1/4">{item.phone}</td>
                            <td className="w-1/4 text-blue-600"><a href={item.website} target="_blank">Book now</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        {/* <div className="">Information on local accommodations and travel to the venue coming soon!</div> */}
        {/* <h2 className="font-bold text-2xl">Poster Printing</h2>
        <p>Print shops nearby and hours... discount codes...</p> */}
        </div>
    )
}