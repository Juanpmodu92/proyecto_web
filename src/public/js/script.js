document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/services")
    .then(response => response.json())
    .then(data => {
        const servicesList = document.getElementById("services-list");
        data.forEach(service => {
            const serviceItem = document.createElement("div");
            serviceItem.className = "col-md-4";
            serviceItem.innerHTML = `
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${service.name}</h5>
                <p class="card-text">${service.description}</p>
                <p class="card-text"><small class="text-muted">Precio: $${service.price}</small></p>
            </div>
            </div>`;
            servicesList.appendChild(serviceItem);
        });
    })
    .catch(error => console.error("Error:", error));
});