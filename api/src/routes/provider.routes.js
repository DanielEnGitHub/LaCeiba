import { Router } from 'express';

import { getProvider, postProvider, deleteProvider, viewProvider, updateProvider } from '../controllers/provider.controller.js';

const router = Router();

// GET
router.get('/provider', getProvider);

// POST
router.post('/provider', postProvider);

// DELETE
router.delete('/provider/:id', deleteProvider);

// VIEW
router.get('/provider/:id', viewProvider);

// UPDATE
router.put('/provider/:id', updateProvider);

export default router;