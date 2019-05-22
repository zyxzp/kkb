const Koa=require('koa');
const ejs=require('koa-ejs');
const path=require('path');

let server=new Koa();
server.listen(8080);

//
ejs(server, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
});

//
server.use(async ctx=>{
  await ctx.render('2', {
    arr: [12, 5, 8, 99, 37]
  })
});
