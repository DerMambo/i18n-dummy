Package.describe({
  summary: "Gives a translation helper that does nothing"
});

Package.on_use(function (api) {
  api.use(['handlebars', 'underscore'], 'client');

  api.export && api.export('I18nDummy');
  api.export && api.export('__');

  api.add_files('i18n_dummy.js', ['server', 'client']);
  api.add_files('i18n_dummy_client.js', ['client']);
});