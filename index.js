module.exports = function (method) {
  var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var depsStr =  method.toString().match(FN_ARGS);
  var deps = (depsStr) ? depsStr[1].trim().split(/[\s,]+/) : [''];
  
  if(deps[0] === '') return [];
  
  return deps;
};