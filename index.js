const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { v4: uuid } = require('uuid');

// Database Services.
const { lenderService } = require('./services');

const port = 5000;

const main = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(cookieParser());

  app.use(
    cors({
      credentials: true,
      origin: true,
    }),
  );

  app.post('/lender', async (req, res) => {
    try {
      const id = uuid();
      await lenderService.create({ id, lenderName: 'karel' });
      const data = await lenderService.get({ id }, { useMaster: true });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  })
    
  app.get('/lender/:lenderId', async (req, res) => {
    try {
      const data = await lenderService.get({ id: req.params.lenderId });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  });
    
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main();