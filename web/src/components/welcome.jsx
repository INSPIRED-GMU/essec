import ImportantDates from "./importantDates"
export default function Welcome(){
    return(
        <>
        <div>
        <div className="min-h-screen hero bg-base-200" style={{backgroundImage: 'url(https://www.wm.edu/about/visiting/campusmap/location/photos/61.jpg)'}}>
        <div className="hero-overlay text-neutral-content py-20 ">
        <div className="hero">
        <div className=" px-40 text-center py-20">
        <p className="text-5xl text-neutral-content">Eastern Atlantic Students in Software Engineering Colloquium<br></br>William & Mary, Williamsburg, VA</p>
        <p className="text-lg text-neutral-content">January 20, 2024</p>
        </div>
        </div>
  <div className="lg:grid grid-cols-3 px-40">
    <div className="col-span-2 hero-overlay bg-opacity-50 p-10 rounded-l-2xl">
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p className="py-4 text-xl">Academics work best when they work (and play) together. Access to people and ideas is critical to a researcher’s success. Such access often needs accepted papers to (eg.) conferences. So we need some way, without accepted papers, that how can junior researchers build their personnel and professional network. At ESSEC, student researchers will be invited to give brief presentations on their work as well as join affinity groups and attend panels that explore a wide range of professional and personal issues in academia.</p>
    </div>
      <div className="col-span-1"> 
      <ImportantDates/>
      </div>
  </div>
</div>
</div>
</div>
        </>
    )
}