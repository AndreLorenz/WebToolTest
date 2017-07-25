import { ExternalAccess } from "./../../../../TasyApp/CRUD";

class DesTesF1ExternalAccess extends ExternalAccess {

  setParams(params) {
    // here you should set your parameters accordingly
    // this.prescriptionNumber = params.prescriptionNumber;
  }

  reset() {
    this.promise = undefined;
    this.setParams({});
  }

  externalAccess(params, promise) {
    this.reset();
    this.promise = promise;
    this.setParams(params);
  }
}

export const desTesF1ExternalAccess = new DesTesF1ExternalAccess({ code: 9906 });