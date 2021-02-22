const fs = require('fs');
const path = require('path');
const Router = require('@koa/router');
const { getType } = require('mime');
const {
  login, 
  upload, 
  newProject, 
  deleteFile,
  viewProject,
  updateProject,
  viewFile,
  viewAllUsers,
  newUser,
  deleteUser,
  updateUser,
  viewAllMedias
} = require('./middleware');

const router = new Router();

router.get(/./, async (ctx, next) => {
  const render = fs.readFileSync(path.resolve(__dirname, '../../build/index.html'));
  ctx.type = getType('html');
  ctx.body = render;
  await next();
});

router
  .get('/api/view/project', viewProject)
//   .get('/view/date', viewDate);
  .get('/api/view/file', viewFile)
  .get('/api/view/users', viewAllUsers)
  .get('/api/view/media', viewAllMedias)


router
  .post('/api/login', login)
  // .post('/logout', logout)
  .post('/api/upload', upload)
  .post('/api/new/user', newUser)
  .post('/api/new/project', newProject)
  .post('/api/update/project', updateProject)
  .post('/api/update/user', updateUser)
  // .post('/verify/username', verifyUsername)
  // .post('/verify/token', verifyToken)


router
  .delete('/api/delete/file', deleteFile)
//   .delete('/delete/project', deleteProject)
  .delete('/api/delete/user', deleteUser);


module.exports = router;
