// src/middleware/role.middleware.js
const checkRole = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ 
          error: 'You do not have permission to perform this action' 
        });
      }
      next();
    };
  };
  
  module.exports = checkRole;
  