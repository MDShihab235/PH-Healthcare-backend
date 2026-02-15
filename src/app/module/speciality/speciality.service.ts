import { Speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Speciality): Promise<Speciality> => {
  const speciality = await prisma.speciality.create({
    data: payload,
  });
  return speciality;
};

const getAllSpecialties = async () => {
  const specialities = await prisma.speciality.findMany();
  return specialities;
};

const deleteSpeciality = async (id: string) => {
  const deleteItem = await prisma.speciality.delete({
    where: {
      id,
    },
  });
  return deleteItem;
};

export const SpecialityService = {
  createSpeciality,
  getAllSpecialties,
  deleteSpeciality,
};
