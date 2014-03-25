

I18nDummy._handlebarsHelpers = {
  __: function (key) {
    return I18nDummy.__(key);
  }
};

if ('undefined' !== typeof Handlebars) {
  _.each(I18nDummy._handlebarsHelpers, function (func, name){
    Handlebars.registerHelper(name, func);
  });
}
else {
  console.log ('WARNING: I18n Handlebars helpers not registered. Handlebars not defined');
}