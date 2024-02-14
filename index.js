const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/room1";
let events = [];
const eventsContainer = document.getElementById("events");
async function getEvents() {
  try {
    const response = await fetch(`${BASE_URL}/events`);
    const json = await response.json();
    return json.data;
  } catch (err) {
    console.error(err);
  }
}
function renderEvents() {
  const htmlEvents = events.map((event) => {
    let div = document.createElement("div");
    div.className = "eventCard";
    div.innerHTML = `<h3>#${event.id}</h3>
                        <h4>${event.name}</h4>
                        <h4>${event.date}</h4>
                        <h4>${event.location}</h4>
                        <p>${event.description}</p>`;
    return div;
  });
  eventsContainer.replaceChildren(...htmlEvents);
}
async function startApp() {
  events = await getEvents();
  renderEvents();
}
startApp();
