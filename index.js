module.exports = function (method) {
  var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var Arrow_ARGS = /^\s*[^\(]*\(\s*([^\)]*)\)\s*=>/m;
  var depsStr =  method.toString().match(FN_ARGS) || method.toString().match(Arrow_ARGS)
  var deps = (depsStr) ? depsStr[1].trim().split(/[\s,]+/) : [''];
  
  if(deps[0] === '') return [];
  
  return deps;
};