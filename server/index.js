const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDataBase = require('./config/database');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

connectDataBase(DB_URL).then(() => {
    app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));
}).catch((e) => console.error(e));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);