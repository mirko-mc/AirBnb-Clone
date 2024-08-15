
function toggleReview(Id) {
  document.getElementById(Id).classList.toggle("short-review");
}

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementsByClassName("calendario");
  for (const cal of calendarEl) {
    const calendar = new FullCalendar.Calendar(cal, {
      initialView: "dayGridMonth",
    });
    calendar.render();
  }
});

function toggleDescrizione() {
  document.getElementById("descrizione").classList.toggle("descrizione");
}

function toggleCarousel() {
  const main = document.getElementsByTagName("main");
  main[0].classList.toggle("d-none");
  document.getElementById("carosello").classList.toggle("d-none");
}

