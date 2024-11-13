const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Acesso negado!' });

    jwt.verify(token, process.env.JWT_SECRET || 'secreta_chave', (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Token inválido!' });
        req.voluntario = { voluntarioId: decoded.voluntarioId };
        next();
    });
};

module.exports = { authenticateToken };
