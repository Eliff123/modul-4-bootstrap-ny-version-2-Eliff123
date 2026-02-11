 // Extrauppgift: Fixa så att headern och footern laddas in i varje sida från denna fil
 document.getElementsByTagName("header")[0].innerHTML = `


       <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5 ">
      <div class="container-fluid">
        <a class="navbar-brand text-danger " href="index.html">🏠 </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="navbar-brand text-danger fst-italic" href="Bouquettis.html">Bouquettis </a>
            <a class="nav-link active" aria-current="page" href="Priser.html">Priser</a>
            <a class="nav-link" href="Beställ.html">Beställ</a>


          </div> 
          </div>


    </nav>
`;