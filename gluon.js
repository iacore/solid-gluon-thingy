import * as Gluon from '@gluon-framework/gluon';

const isProduction = process.env.NODE_ENV === 'production'

Gluon.open('http://localhost:5173', {
  allowHTTP: !isProduction,
  allowNavigation: false,
});
