import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'omar aboulbarge',
    email: 'omar@example.com',
    password: bcrypt.hashSync('123456'),
  },
  {
    name: 'abdellah aboulbarge',
    email: 'abdellah@example.com',
    password: bcrypt.hashSync('123456'),
  },
]

export default users
