let users = []; 
let id = 1;

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res, next) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return next(new Error('User not found'));
  res.json(user);
};

exports.createUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) return next(new Error('Name and email required'));

  const newUser = { id: id++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res, next) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return next(new Error('User not found'));

  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
};

exports.deleteUser = (req, res, next) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return next(new Error('User not found'));

  users.splice(index, 1);
  res.json({ message: 'User deleted' });
};
