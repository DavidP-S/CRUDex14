const express = require('express');
const Formulario = require('./models/Formulario');

const router = express.Router();

router.post('/formulario', (req, res) => {
    const formularioData = req.body;
    const nuevoFormulario = new Formulario(formularioData);
  
    nuevoFormulario.save()
      .then(() => {
        res.status(201).json({ message: 'Formulario creado con éxito' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear el formulario' });
      });
  });

  router.get('/doctores', (req, res) => {
    Formulario.find({ tipo: 'doctor' })
      .then((formularios) => {
        res.status(200).json(formularios);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener los formularios de doctores' });
      });
  });

  router.get('/pacientes', (req, res) => {
    Formulario.find({ tipo: 'paciente' })
      .then((formularios) => {
        res.status(200).json(formularios);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener los formularios de pacientes' });
      });
  });

  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  router.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  router.get('/visualizar.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'visualizar.html'));
  });
  router.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
  });
  router.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
  });