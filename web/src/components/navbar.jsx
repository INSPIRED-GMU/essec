export default function NavBar(){
    return(
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"> ESSEC </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#paperCall">Call for Papers</a></li>
      {/* <li><a href="#program">Program</a></li> */}
      <li><a href="#commitee">Commitee</a></li>
      <li><a href="#travel">Directions</a></li>
      <li className="button btn-primary rounded-md"><a href="https://docs.google.com/forms/d/1T1B21qkLhbMH5rcID3bYD91RZwQ-Y5VGFw0IZtt5-so/" target="_blank">Register</a></li>
    </ul>
  </div>
</div>
        </>
    )
}
