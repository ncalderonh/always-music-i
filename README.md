# Always Music - Gestión de Estudiantes

Always Music es una reconocida escuela de música que ha decidido modernizar su sistema de gestión de estudiantes, reemplazando su antigua base de datos en Excel por una aplicación personalizada. Esta aplicación en Node.js permite gestionar estudiantes a través de operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando una base de datos PostgreSQL.

## Funcionalidades

La aplicación permite realizar las siguientes operaciones:

1. **Agregar un nuevo estudiante.**
2. **Consultar los estudiantes registrados.**
3. **Consultar un estudiante por RUT.**
4. **Actualizar la información de un estudiante.**
5. **Eliminar el registro de un estudiante.**

## Requerimientos

Antes de iniciar el desarrollo de la aplicación, asegúrate de tener una base de datos PostgreSQL configurada con una tabla llamada `estudiantes` que tenga las siguientes columnas:

- `nombre` (Tipo: VARCHAR)
- `rut` (Tipo: VARCHAR)
- `curso` (Tipo: VARCHAR)
- `nivel` (Tipo: VARCHAR)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias necesarias ejecutando el comando:

```bash
npm install
```

## Configuración de la Base de Datos

1. Crea una base de datos en PostgreSQL.
2. Dentro de la base de datos, crea la tabla `estudiantes` con la siguiente estructura:

```sql
CREATE TABLE estudiantes (
  nombre VARCHAR(50),
  rut VARCHAR(12) PRIMARY KEY,
  curso VARCHAR(50),
  nivel VARCHAR(50)
);
```

3. Configura los parámetros de conexión a la base de datos PostgreSQL en el archivo `.env`:

```env
DB_USER=tu_usuario
DB_HOST=tu_host
DB_NAME=tu_base_de_datos
DB_PASSWORD=tu_contraseña
DB_PORT=5432
```

## Uso

La interacción con la aplicación se realiza a través de la línea de comandos. A continuación, se describen los comandos disponibles para cada operación:

### Agregar un nuevo estudiante

```bash
node index.js agregar <nombre> <rut> <curso> <nivel>
```

### Consultar todos los estudiantes registrados

```bash
node index.js consultar
```

### Consultar un estudiante por RUT

```bash
node index.js consultar <rut>
```

### Actualizar la información de un estudiante

```bash
node index.js actualizar <nombre> <rut> <curso> <nivel>
```

### Eliminar el registro de un estudiante

```bash
node index.js eliminar <rut>
```

## Ejemplo de Uso

Agregar un estudiante:

```bash
node index.js agregar "Juan Pérez" "12345678-9" "Guitarra" "Intermedio"
```

Consultar todos los estudiantes:

```bash
node index.js consultar
```

Consultar un estudiante por RUT:

```bash
node index.js consultar "12345678-9"
```

Actualizar la información de un estudiante:

```bash
node index.js actualizar "Juan Pérez" "12345678-9" "Piano" "Avanzado"
```

Eliminar el registro de un estudiante:

```bash
node index.js eliminar "12345678-9"
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos a continuación:

1. Haz un fork del repositorio.
2. Crea una rama nueva (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commits (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
