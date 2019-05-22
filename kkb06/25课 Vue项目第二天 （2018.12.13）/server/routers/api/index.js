const Router=require('koa-router');

let router=new Router();

router.get('/account_catalog', async ctx=>{
  ctx.body=['娱乐', '汽车', '情感', '美食', '时尚', 'js'];
});

router.get('/get_province', async ctx=>{
  ctx.body=await ctx.db.query('SELECT * FROM province');
});
router.get('/get_city/:proid/', async ctx=>{
  let {proid}=ctx.params;
  ctx.body=await ctx.db.query('SELECT * FROM city WHERE proID=?', proid);
});

module.exports=router.routes();
