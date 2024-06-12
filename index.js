const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config()

// Configuración del cliente de PostgreSQL
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect();

// Función para agregar un nuevo estudiante
const agregarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
        const res = await client.query(
            'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, rut, curso, nivel]
        );
        console.log('Estudiante agregado:', res.rows[0]);
    } catch (err) {
        console.error('Error agregando estudiante:', err);
    }
};

// Función para obtener todos los estudiantes
const obtenerEstudiantes = async () => {
    try {
        const res = await client.query('SELECT * FROM estudiantes');
        console.log('Estudiantes registrados:', res.rows);
    } catch (err) {
        console.error('Error obteniendo estudiantes:', err);
    }
};

// Función para obtener un estudiante por RUT
const obtenerEstudiantePorRut = async (rut) => {
    try {
        const res = await client.query('SELECT * FROM estudiantes WHERE rut = $1', [rut]);
        console.log('Estudiante encontrado:', res.rows[0]);
    } catch (err) {
        console.error('Error obteniendo estudiante:', err);
    }
};

// Función para actualizar un estudiante
const actualizarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
        const res = await client.query(
            'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *',
            [nombre, curso, nivel, rut]
        );
        console.log('Estudiante actualizado:', res.rows[0]);
    } catch (err) {
        console.error('Error actualizando estudiante:', err);
    }
};

// Función para eliminar un estudiante
const eliminarEstudiante = async (rut) => {
    try {
        const res = await client.query('DELETE FROM estudiantes WHERE rut = $1 RETURNING *', [rut]);
        console.log('Estudiante eliminado:', res.rows[0]);
    } catch (err) {
        console.error('Error eliminando estudiante:', err);
    }
};

// Ejecución de funciones según argumentos de línea de comando
const args = process.argv.slice(2);
const [accion, ...params] = args;

const ejecutarAccion = async () => {
    switch (accion) {
        case 'agregar':
            await agregarEstudiante(...params);
            break;
        case 'obtener':
            await obtenerEstudiantes();
            break;
        case 'obtenerRut':
            await obtenerEstudiantePorRut(params[0]);
            break;
        case 'actualizar':
            await actualizarEstudiante(...params);
            break;
        case 'eliminar':
            await eliminarEstudiante(params[0]);
            break;
        default:
            console.log('Acción no reconocida');
    }
    client.end(); // Cierra la conexión después de completar la acción
};

ejecutarAccion();