import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send(users);
// });

//THE ABOVE CODE IS CONVERTED TO ..

router.get('/', getUsers);

router.post('/', createUser);

//this router is find the user with the id
router.get('/:id', getUser);

//router to delete
router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
