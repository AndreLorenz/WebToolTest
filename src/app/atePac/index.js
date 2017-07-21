import TasyApp from '../TasyApp';
import _module from './_module';
import './commonAssistanceFunctions/factory/externalAccessParameters.common.js';

const AtePac = TasyApp.newApp('atePac').ngModule(_module);

export default AtePac;