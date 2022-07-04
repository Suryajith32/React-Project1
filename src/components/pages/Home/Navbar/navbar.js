import React from 'react'

function navbar() {
  return (
    
        <div>
      <nav class="navbar navbar-expand-lg bg-dark fixed-top ">
  <div class="container-fluid  ">
    <a class="navbar-brand text-light " href="#">MOVIE-MANIAC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
      </ul>
      <form class="d-flex" role="search">
        
        <button class="btn btn-outline-primary" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>
    </div>

  )
}

export default navbar