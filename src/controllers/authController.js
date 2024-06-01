
exports.login = (req, res) => {
  
    const { username, password } = req.body;
      
    User.findOne({ username }, (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
      // If login successful, you may generate a JWT token or set a session
      return res.status(200).json({ message: 'Login successful' });
    });
  };
  
  exports.register = (req, res) => {
    const { username, password } = req.body;
  
  
     const newUser = new User({ username, password });
     newUser.save((err, user) => {
       if (err) {
         return res.status(500).json({ error: 'Internal Server Error' });
       }
       return res.status(201).json({ message: 'User registered successfully' });
    });
  };
  