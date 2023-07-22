function validateFormDoctor() {
    const nombre = document.getElementById('nombre-doctor').value;
    const apellido = document.getElementById('apellido-doctor').value;
    const cedula = document.getElementById('cedula-doctor').value;
    const correo = document.getElementById('correo-doctor').value;
  
    if (nombre.trim() === '' || apellido.trim() === '' || cedula.trim() === '' || correo.trim() === '') {
      alert('Por favor, completa todos los campos para el formulario de doctores.');
      return false;
    }
  
    return true;
  }
  
  function validateFormPaciente() {
    const nombre = document.getElementById('nombre-paciente').value;
    const apellido = document.getElementById('apellido-paciente').value;
    const cedula = document.getElementById('cedula-paciente').value;
    const correo = document.getElementById('correo-paciente').value;
  
    if (nombre.trim() === '' || apellido.trim() === '' || cedula.trim() === '' || correo.trim() === '') {
      alert('Por favor, completa todos los campos para el formulario de pacientes.');
      return false;
    }
  
    return true;
  }