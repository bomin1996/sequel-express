const express = require('express');
const { User, Test } = require('../models/user');

const router = express.Router();

// CREATE - 새로운 사용자 추가
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// READ - 모든 사용자 조회
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ - 특정 사용자 조회
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE - 특정 사용자 수정
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE - 특정 사용자 삭제
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Test 테이블을 위한 CRUD API 추가

// CREATE - 새로운 테스트 추가
router.post('/test', async (req, res) => {
    try {
        const test = await Test.create(req.body);
        res.status(201).json(test);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// READ - 모든 테스트 조회
router.get('/test', async (req, res) => {
    try {
        const tests = await Test.findAll();
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ - 특정 테스트 조회
router.get('/test/:id', async (req, res) => {
    try {
        const test = await Test.findByPk(req.params.id);
        if (test) {
            res.status(200).json(test);
        } else {
            res.status(404).json({ error: 'Test not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE - 특정 테스트 수정
router.put('/test/:id', async (req, res) => {
    try {
        const [updated] = await Test.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedTest = await Test.findByPk(req.params.id);
            res.status(200).json(updatedTest);
        } else {
            res.status(404).json({ error: 'Test not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE - 특정 테스트 삭제
router.delete('/test/:id', async (req, res) => {
    try {
        const deleted = await Test.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Test not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;