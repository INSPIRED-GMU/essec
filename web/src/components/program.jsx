import React from 'react';

export default function Program () {
    const schedule = {
     
        "schedule": [
            {
                "time": "8:30",
                "speaker": "Denys Poshyvanyk",
                "affiliation": "William and Mary",
                "topic": "Welcome, Local Arrangements, Round Robin 'Hello'!",
                "tag":"Welcome",
                "style":"bold"
            },
            {
                "time": "9:00",
                "speaker": "Brittany Johnson",
                "affiliation": "George Mason University",
                "topic": "Preparing for a Career in SE Research: Planning Under Uncertainty",
                "tag":"Keynote",
                "style":"bold"
        },
            {
                "time": "9:30",
                "topic": "Break Out Session: Career and Research Planning",
                "tag":"Break-out Session",
            },
            {
                "time": "10:00",
                "speaker": "Talank Baral",
                "affiliation": "George Mason University",
                "topic": "Optimizing Continuous Development By Detecting and Preventing Unnecessary Content Generation",
                "tag":"Talk",
          },
            {
                "time": "10:10",
                "speaker": "Minhyuk Ko",
                "affiliation": "Virginia Tech",
                "topic": "AutoPrint: Automatic Print Statement Insertion Tool",
                "tag":"Talk",
            },
            {
                "time": "10:20",
                "speaker": "Trevor Stalnaker",
                "affiliation": "William & Mary",
                "topic": "Software Bills of Material as a Solution in the Software Supply Chain",
                "tag":"Talk",
            },
            {
                "time": "10:30",
                "topic": "Coffee Break ☕️",
                "tag":"Break",
            },
            {
                "time": "11:00",
                "speaker": "Sajed Jalil",
                "affiliation": "George Mason University",
                "topic": "The Transformative Influence of Generative AI-Assisted Tools in Software Development",
                "tag":"Talk",
            },
            {
                "time": "11:10",
                "speaker": "Rahul Yedida",
                "affiliation": "NC State University",
                "topic": "Smoothness-Based Hyper-Parameter Optimization for Software Analytics",
                "tag":"Talk",
            },
            {
                "time": "11:20",
                "speaker": "Shawal Khalid",
                "affiliation": "Virginia Tech",
                "topic": "Advancing Blockchain Application Development: Automated Tools and Processes for Design, Review, and Iteration",
                "tag":"Talk",
            },
            {
                "time": "11:30",
                "speaker": "Ebtesam Haque",
                "affiliation": "George Mason University",
                "topic": "Perceptions of AI-Assisted Tools Across Different Stakeholders in the Software Industry (Tentative)",
                "tag":"Talk",
            },
            {
                "time": "11:40",
                "speaker": "Andre Lustosa Cabral de Paula Motta",
                "affiliation": "NC State University",
                "topic": "Learning from Very Little Data: On the Value of Landscape Analysis for Predicting Software Project Health",
                "tag":"Talk",
            },
            {
                "time": "11:50",
                "speaker": "XIAOXIAO GAN",
                "affiliation": "Virginia Tech",
                "topic": "Exploring the Usage and Impact of Integrating Selenium in CI/CD Workflows on Open Source Repositories",
                "tag":"Talk",
            },
            {
                "time": "12:00",
                "speaker": "Suzzana Rafi",
                "affiliation": "George Mason University",
                "topic": "Efficient Identification of Order-Dependent Test Relationships",
                "tag":"Talk",
            },
            {
                "time": "12:10",
                "speaker": "MD Mahmudul Hasan Pious",
                "affiliation": "George Mason University",
                "topic": "Prioritizing Test Orders for Efficient Order-Dependent Flaky Test Detection",
                "tag":"Talk",
          },
          {
                "time": "12:20",
                "speaker": "David Nader",
                "affiliation": "William & Mary",
                "topic": "Toward a Theory of Causation for Interpreting Foundation Models for Code Generation",
                "tag":"Talk",
          },
          {
            "time": "12:30",
            "topic": "Lunch 🍕",
            "tag":"Break",
          },
          {
            "time": "2:10",
            "topic": "Poster Session",
            "tag":"Poster",
          },
          {
            "time": "3:30",
            "topic": "Coffee Break ☕️",
            "tag":"Break",
          },
          {
            "time": "4:00",
            "speaker": "Andrian Marcus",
            "affiliation": "George Mason University",
            "topic": "NSF: The Role of NSF in Supporting Research",
            "tag":"NSF Talk",
        },
          {
            "time": "4:30",
            "topic": "Panel: Challenges in Research and Career",
            "tag":"Panel",
          },
          {
            "time": "5:15",
            "topic": "Planning ESSEC 2025",
            "tag":"Closing",
          }
        ]
      }
      
    return (
        <div id="program" className="p-20 bg-blue-100">
            <h1 className="text-3xl font-bold">Program</h1>
            <p className='mt-5'>All sessions will be held at <span className='font-bold link'><a href="https://maps.app.goo.gl/iebYVjm99WN9wnQ88" target='blank'>McGlothlin-Street Hall 020</a></span></p>
            <div className='rounded-lg'>
            <table className="table-lg mt-10 mb-10 table border-collapse bg-blue-100">
                <thead className='bg-blue-300'>
                    <tr>
                        <th>Time</th>
                        <th>Speaker</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.schedule.map((item, index) => (
                        <tr key={index} className={item.tag=="Break"?"bg-amber-300":item.tag!="Talk"?"bg-blue-200":"border-blue-200"}>
                            <td className={item.tag!="Talk"?"font-semibold align-top":"align-top"}>{item.time}</td>
                            <td className={item.tag!="Talk"?"font-semibold":""}>{item.speaker}<br></br><span className='italic'>{item.affiliation}</span></td>
                            <td className={item.tag!="Talk"?"font-bold":"font-medium"}><span className="badge badge-ghost badge-sm font-bold">{item.tag}</span><br></br>{item.topic}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

