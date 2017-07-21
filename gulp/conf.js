/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  app: 'src/app',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  assets: 'src/assets'
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [],
  directory: 'bower_components'
};

exports.backend = {
  brasil: {
        tasy: 'http://192.168.240.1:8080',
    security: 'http://192.168.240.1:8080'
  },
  india : {
        tasy: 'http://10.10.11.96:9090',
    security: 'http://10.10.11.96:9090'
  },
  local : {
        tasy: 'http://localhost:8084',
    security: 'http://localhost:8085'
  }
};

exports.modules = {
  'corate' : {
    'name' : 'tasy.app.corAte',
    'path' : './corAte/_index'
  },
  'atepac' : {
    'name' : 'tasy.app.atePac',
    'path' : './atePac/_index'
  },
  'atesus' : {
    'name' : 'tasy.app.ateSus',
    'path' : './ateSus/_index'
  },
  'corcom' : {
    'name' : 'tasy.app.corCom',
    'path' : './corCom/_index'
  },
  'corcon' : {
    'name' : 'tasy.app.corCon',
    'path' : './corCon/_index'
  },
  'corpes' : {
    'name' : 'tasy.app.corPes',
    'path' : './corPes/_index'
  },
  'corsis' : {
    'name' : 'tasy.app.corSis',
    'path' : './corSis/_index'
  },
  'cusapu' : {
    'name' : 'tasy.app.cusApu',
    'path' : './cusApu/_index'
  },
  'destes' : {
    'name' : 'tasy.app.desTes',
    'path' : './desTes/_index'
  },
  'tectes' : {
    'name' : 'tasy.app.tecTes',
    'path' : './tecTes/_index'
  },
  'fatact' : {
    'name' : 'tasy.app.fatAct',
    'path' : './fatAct/_index'
  },
  'coretq' : {
    'name' : 'tasy.app.corEtq',
    'path' : './corEtq/_index'
  },
  'corlab' : {
    'name' : 'tasy.app.corLab',
    'path' : './corLab/_index'
  },
  'tasycme' : {
    'name' : 'tasy.app.tasyCme',
    'path' : './tasyCme/_index'
  },
  'corcre' : {
    'name' : 'tasy.app.corCre',
    'path' : './corCre/_index'
  },
  'corcpa' : {
    'name' : 'tasy.app.corCpa',
    'path' : './corCpa/_index'
  },
  'corman' : {
    'name' : 'tasy.app.corMan',
    'path' : './corMan/_index'
  },
  'corcrg' : {
    'name' : 'tasy.app.corCrg',
    'path' : './corCrg/_index'
  },
  'serter' : {
    'name' : 'tasy.app.serTer',
    'path' : './serTer/_index'
  },
  'corfin' : {
    'name' : 'tasy.app.corFin',
    'path' : './corFin/_index'
  },
  'coreis' : {
    'name' : 'tasy.app.corEis',
    'path' : './corEis/_index'
  },
  'corger' : {
    'name' : 'tasy.app.corGer',
    'path' : './corGer/_index'
  },
  'corhit' : {
    'name' : 'tasy.app.corHit',
    'path' : './corHit/_index'
  },
  'fatpre' : {
    'name' : 'tasy.app.fatPre',
    'path' : './fatPre/_index'
  },
  'tasycih' : {
    'name' : 'tasy.app.tasyCih',
    'path' : './tasyCih/_index'
  },
  'tasyprev' : {
    'name' : 'tasy.app.tasyPrev',
    'path' : './tasyPrev/_index'
  },
  'corcad' : {
    'name' : 'tasy.app.corCad',
    'path' : './corCad/_index'
  },
  'corctb' : {
    'name' : 'tasy.app.corCtb',
    'path' : './corCtb/_index'
  },
  'corsac' : {
    'name' : 'tasy.app.corSac',
    'path' : './corSac/_index'
  },
  'corsug' : {
    'name' : 'tasy.app.corSug',
    'path' : './corSug/_index'
  },
  'corsan' : {
    'name' : 'tasy.app.corSan',
    'path' : './corSan/_index'
  },
  'corqua' : {
    'name' : 'tasy.app.corQua',
    'path' : './corQua/_index'
  },
  'atedis' : {
    'name' : 'tasy.app.ateDis',
    'path' : './ateDis/_index'
  },
  'corbi' : {
    'name' : 'tasy.app.corBi',
    'path' : './corBi/_index'
  },
  'corpla' : {
    'name' : 'tasy.app.corPla',
    'path' : './corPla/_index'
  },
  'cormed' : {
    'name' : 'tasy.app.corMed',
    'path' : './corMed/_index'
  },
  'cornfe' : {
    'name' : 'tasy.app.corNfe',
    'path' : './corNfe/_index'
  },
  'cihgra' : {
    'name' : 'tasy.app.cihGra',
    'path' : './cihGra/_index'
  },
  'websui': {
    'name'  : 'tasy.app.webSui',
    'path'  : './webSui/_index'
  },
   'regest' : {
     'name' : 'tasy.app.regEst',
     'path' : './regEst/_index'
  },
  'corres':  {
    'name'  : 'tasy.app.corRes',
    'path'  : './corRes/_index'
   },
 'etqrel': {
    'name'  : 'tasy.app.etqRel',
    'path'  : './etqRel/_index'
  },
  'cusbas': {
    'name'  : 'tasy.app.cusBas',
    'path'  : './cusBas/_index'
  },
  'relate': {
    'name'  : 'tasy.app.relAte',
    'path'  : './relAte/_index'
  },
  'fiscal': {
    'name'  : 'tasy.app.fisCal',
    'path'  : './fisCal/_index'
  },
  'tasyrel': {
    'name': 'tasy.app.tasyRel',
    'path': './tasyRel/_index'
  }  
}

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
