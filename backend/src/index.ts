import express from 'express';
import users from './data/users';

const app = express();

app.get('/', (req, res) => {
  res.json( '/users para obtener los usuarios' );
});

app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));