import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@codesfortomorrow.com' && password === 'Admin123!@#') {
    const token = jwt.sign({ email }, 'secretKey', { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(400).send('Email or Password is incorrect');
  }
};