const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

// Reemplaza esta línea con tu cadena de conexión de MongoDB Atlas
const MONGO_URI = 'mongodb+srv://ecastillod:phjklemn@casafacil.mskvemx.mongodb.net/?retryWrites=true&w=majority&appName=CasaFacil';

// Clave secreta para JWT
const SECRET_KEY = 'phjklemn';

// Conexión a MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Definición de Schemas (modelos de datos)
const propiedadSchema = new mongoose.Schema({
  titulo: String,
  precio: Number,
  ubicacion: String,
  habitaciones: Number,
  banos: Number,
  metrosCuadrados: Number,
  descripcion: String,
  imagenes: [String],
  tipo: String,
  estacionamientos: Number,
  direccion: String,
  colonia: String,
  ciudad: String,
  codigoPostal: String,
  imagenPrincipal: String,
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mapUrl: String,
});
const Propiedad = mongoose.model('Propiedad', propiedadSchema);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nombreCompleto: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model('User', userSchema);

// Middlewares globales
app.use(cors());
app.use(express.json());

// Configuración de Multer para la subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Middleware de autenticación JWT
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido.' });
  }
};

// Endpoints de la API
// -----------------------

// Obtener todas las propiedades
app.get('/api/propiedades', async (req, res) => {
  try {
    const propiedades = await Propiedad.find();
    res.status(200).json(propiedades);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener propiedades', error });
  }
});

// Obtener una sola propiedad por su ID, con los datos del creador
app.get('/api/propiedades/:id', async (req, res) => {
  try {
    const propiedad = await Propiedad.findById(req.params.id).populate('creador', 'nombreCompleto telefono _id'); // ✅ Asegúrate de que _id esté aquí
    if (!propiedad) {
      return res.status(404).json({ message: 'Propiedad no encontrada' });
    }
    res.status(200).json(propiedad);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la propiedad', error });
  }
});

// Búsqueda de propiedades
app.get('/api/propiedades/buscar', async (req, res) => {
  const { q } = req.query;
  const searchTerm = q ? q.toLowerCase() : '';

  try {
    const propiedades = await Propiedad.find({
      $or: [
        { titulo: { $regex: searchTerm, $options: 'i' } },
        { ubicacion: { $regex: searchTerm, $options: 'i' } },
        { descripcion: { $regex: searchTerm, $options: 'i' } }
      ]
    });
    res.status(200).json(propiedades);
  } catch (error) {
    res.status(500).json({ message: 'Error en la búsqueda', error });
  }
});

// Publicar una nueva propiedad (REQUIERE AUTENTICACIÓN)
app.post('/api/propiedades/publicar', authMiddleware, upload.array('imagenes', 10), async (req, res) => {
  try {
    const { titulo, precio, descripcion, tipo, habitaciones, metrosCuadrados, estacionamientos, banos, direccion, colonia, ciudad, codigoPostal, imagenPrincipal, mapUrl } = req.body;

const imagenes = req.files.map(file => `http://localhost:5000/uploads/${file.filename}`);
    const nuevaPropiedad = new Propiedad({
      titulo,
      precio,
      ubicacion: `${direccion}, ${colonia}, ${ciudad}`,
      habitaciones,
      banos,
      metrosCuadrados,
      estacionamientos,
      descripcion,
      imagenes,
      tipo,
      direccion,
      colonia,
      ciudad,
      codigoPostal,
      imagenPrincipal: imagenes[parseInt(imagenPrincipal)],
      creador: req.user.id,
      mapUrl,
    });

    await nuevaPropiedad.save();
    res.status(201).json({ message: 'Propiedad publicada con éxito', propiedad: nuevaPropiedad });
  } catch (error) {
    res.status(500).json({ message: 'Error al publicar la propiedad', error });
  }
});

// Actualizar una propiedad (REQUIERE AUTENTICACIÓN Y SER EL PROPIETARIO)
app.put('/api/propiedades/:id', authMiddleware, upload.array('imagenes', 10), async (req, res) => {
  try {
    const { titulo, precio, descripcion, tipo, habitaciones, metrosCuadrados, estacionamientos, banos, direccion, colonia, ciudad, codigoPostal, imagenPrincipal, mapUrl } = req.body;
    const { id } = req.params;

    const propiedad = await Propiedad.findById(id);

    if (!propiedad) {
      return res.status(404).json({ message: 'Propiedad no encontrada.' });
    }

    if (propiedad.creador.toString() !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para editar esta propiedad.' });
    }

    propiedad.titulo = titulo;
    propiedad.precio = precio;
    propiedad.descripcion = descripcion;
    propiedad.tipo = tipo;
    propiedad.habitaciones = habitaciones;
    propiedad.banos = banos;
    propiedad.metrosCuadrados = metrosCuadrados;
    propiedad.estacionamientos = estacionamientos;
    propiedad.direccion = direccion;
    propiedad.colonia = colonia;
    propiedad.ciudad = ciudad;
    propiedad.codigoPostal = codigoPostal;
    propiedad.mapUrl = mapUrl;
    propiedad.ubicacion = `${direccion}, ${colonia}, ${ciudad}`; // ✅ Actualizar ubicacion

    if (req.files && req.files.length > 0) {
const nuevasImagenes = req.files.map(file => `http://localhost:5000/uploads/${file.filename}`);      propiedad.imagenes = nuevasImagenes;
      propiedad.imagenPrincipal = nuevasImagenes[parseInt(imagenPrincipal)];
    }

    await propiedad.save();

    res.status(200).json({ message: 'Propiedad actualizada con éxito.', propiedad });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la propiedad.', error });
  }
});

// Eliminar una propiedad (REQUIERE AUTENTICACIÓN Y SER EL PROPIETARIO)
app.delete('/api/propiedades/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const propiedad = await Propiedad.findById(id);

    if (!propiedad) {
      return res.status(404).json({ message: 'Propiedad no encontrada.' });
    }

    if (propiedad.creador.toString() !== req.user.id) {
      return res.status(403).json({ message: 'No tienes permiso para eliminar esta propiedad.' });
    }

    await Propiedad.findByIdAndDelete(id);

    res.status(200).json({ message: 'Propiedad eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la propiedad.', error });
  }
});

// Endpoints de Autenticación
// --------------------------

// Registro de usuario
app.post('/api/auth/register', async (req, res) => {
  const { email, password, nombreCompleto, telefono } = req.body;

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      nombreCompleto,
      telefono,
    });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente.' });

  } catch (error) {
    res.status(500).json({ message: 'Error en el registro', error });
  }
});

// Inicio de sesión de usuario
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas.' });
    }
    const token = jwt.sign(
      { id: user._id, nombreCompleto: user.nombreCompleto },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
    res.json({ message: 'Inicio de sesión exitoso.', token, user: { nombreCompleto: user.nombreCompleto, _id: user._id } });
  } catch (error) {
    res.status(500).json({ message: 'Error en el inicio de sesión', error });
  }
});

// Servir archivos estáticos de la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});