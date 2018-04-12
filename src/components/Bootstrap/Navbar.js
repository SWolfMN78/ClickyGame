import React from "react";

const Navbar = () => (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Restart</a>
  <button class="navbar-toggler" 
    type="button" data-toggle="collapse" 
    data-target="#navbarColor02" aria-controls="navbarColor02" 
    aria-expanded="false" aria-label="Toggle navigation" 
    style={{}}>
    <span class="navbar-toggler-icon"></span>
    </button>

  <h1 class="text-center">Chinese Clicker</h1>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <p>Your Score:</p><p id="iCurrentScore">00</p>
    <input class="form-control" id="disabledInput iCurrentScore" type="text" placeholder="00" disabled="">
    </input>
    {/* <input class="form-control" id="disabledInput iTopScore" type="text" placeholder="00" disabled="">
    High Score:</input>     */}
  </div>
</nav>

);

export default Navbar;