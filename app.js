const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Danh sách người dùng mẫu
let users = [
    { id: 1, name: 'John Doe', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St' }
];

// Phương thức GET để lấy danh sách người dùng
app.get('/users', (req, res) => {
    res.json(users);
});

// Lấy thông tin người dùng theo id
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
  
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  });

// Phương thức POST để thêm người dùng mới
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json({ message: 'User added successfully', users });
});

// Phương thức PUT để cập nhật thông tin người dùng
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    users = users.map(user => {
        if (user.id === userId) {
            return { ...user, ...updatedUser };
        }
        return user;
    });

    res.json({ message: 'User updated successfully' });
});

// Phương thức DELETE để xóa người dùng
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    users = users.filter(user => user.id !== userId);

    res.json({ message: 'User deleted successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});