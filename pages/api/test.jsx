// pages/api/test.jsx
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get((req, res) => {
  res.json({ message: 'Hello, world!' });
});

export default handler;
