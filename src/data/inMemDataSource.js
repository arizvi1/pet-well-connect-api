import { clinics, pets, vets } from "./data.js";

class InMemDataSource {
  constructor(clinics) {
    this.clinics = clinics;
    this.vets = vets;
    this.pets = pets;
    this.clinicIdGenerator = this.generateId(20);
  }

  // generator function to generate clinic ids
  *generateId(initId) {
    let id = initId;

    while (true) {
      yield ++id;
    }
  }

  createClinic({ name, address }) {
    const id = this.clinicIdGenerator.next().value;
    const clinic = { id, name, address };

    this.clinics.push(clinic);

    return clinic;
  }

  getClinics() {
    return this.clinics;
  }

  updateClinic(id, { name, address }) {
    this.clinics = this.clinics.map((clinic) => {
      if (clinic.id === id) {
        return { id, name, address };
      }
      return clinic;
    });

    return { id, name, address, updated: true };
  }

  getVets() {
    return this.vets;
  }

  getPets() {
    return this.pets;
  }
}

export default new InMemDataSource(clinics);
