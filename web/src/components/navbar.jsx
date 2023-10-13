export default function NavBar(){
    return(
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"> Eastern Atlantic Students in Software Engineering Colloquium (ESSEC) </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#paperCall">Call for Papers</a></li>
      {/* <li><a href="#paperCall">Register</a></li>
      <li><a href="#program">Program</a></li> */}
      <li><a href="#commitee">Commitee</a></li>
      <li><a href="#travel">Directions</a></li>
    </ul>
  </div>
</div>
        </>
    )
}
