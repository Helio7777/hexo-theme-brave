hexo.extend.generator.register('lovelist', function(locals){
  return {
    path: 'lovelist/index.html',
    data: locals.posts,
    layout: ['lovelist']
  }
});

hexo.extend.generator.register('blessings', function(locals){
  return {
    path: 'blessings/index.html',
    data: locals.posts,
    layout: ['blessings']
  }
});

hexo.extend.generator.register('records', function(locals){
  return {
    path: 'records/index.html',
    data: locals.posts,
    layout: ['records']
  }
});