import { applicationsRepository } from "./applications.repository";
import { CreateApplicationInput } from "./applications.types";

export const applicationsService = {
  async getAll() {
    return applicationsRepository.findAll();
  },

  async create(data: CreateApplicationInput) {
    if (!data.company_name || !data.application_method || !data.status) {
      throw new Error(
        "company_name, application_method and status are required"
      );
    }

    return applicationsRepository.create(data);
  },
};