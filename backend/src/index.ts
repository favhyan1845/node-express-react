import express from 'express';
import users from './data/users';

const app = express();

app.get('/api/', (req, res) => {
  res.json( '/api/users para obtener los usuarios' );
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));