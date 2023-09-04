export default function NavBar(){
    return(
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">ESSEC</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Call for Papers</a></li>
      <li><a>Register</a></li>
      <li><a>Program</a></li>
      <li><a>Commitee</a></li>
      <li><a>Directions</a></li>
    </ul>
  </div>
</div>
        </>
    )
}