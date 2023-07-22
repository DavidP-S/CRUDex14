document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab a');

  tabLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const tabName = event.target.getAttribute('href').substring(1);
      showTab(tabName);
    });
  });

  // Función para mostrar la pestaña seleccionada
  function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      if (tab.id === tabName) {
        tab.style.display = 'block';
      } else {
        tab.style.display = 'none';
      }
    });

    if (tabName === 'doctores') {
      fetch('/doctores')
        .then(response => response.json())
        .then(formularios => {
          const doctoresTableBody = document.getElementById('doctoresTable');

          // Limpiar la tabla antes de agregar nuevos datos
          doctoresTableBody.innerHTML = '';

          formularios.forEach(formulario => {
            Object.entries(formulario).forEach(([dato, valor]) => {
              if (dato !== 'tipo') {
                const row = doctoresTableBody.insertRow();
                const datoCell = row.insertCell();
                const valorCell = row.insertCell();

                datoCell.textContent = dato.charAt(0).toUpperCase() + dato.slice(1);
                valorCell.textContent = valor;
              }
            });
          });
        })
        .catch(error => console.error(error));
    } else if (tabName === 'pacientes') {
      fetch('/pacientes')
        .then(response => response.json())
        .then(formularios => {
          const pacientesTableBody = document.getElementById('pacientesTable');

          // Limpiar la tabla antes de agregar nuevos datos
          pacientesTableBody.innerHTML = '';

          formularios.forEach(formulario => {
            Object.entries(formulario).forEach(([dato, valor]) => {
              if (dato !== 'tipo') {
                const row = pacientesTableBody.insertRow();
                const datoCell = row.insertCell();
                const valorCell = row.insertCell();

                datoCell.textContent = dato.charAt(0).toUpperCase() + dato.slice(1);
                valorCell.textContent = valor;
              }
            });
          });
        })
        .catch(error => console.error(error));
    }
  }

  // Mostrar la pestaña activa por defecto
  showTab('doctores');
});