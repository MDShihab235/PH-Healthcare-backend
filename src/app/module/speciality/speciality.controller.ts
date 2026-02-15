import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createSpeciality = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialityService.createSpeciality(payload);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Speciality created successfully",
    data: result,
  });
});

const getAllSpeciality = catchAsync(async (req: Request, res: Response) => {
  const specialities = await SpecialityService.getAllSpecialties();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialities fetched successfully",
    data: specialities,
  });
});

const deleteSpeciality = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const speciality = await SpecialityService.deleteSpeciality(id as string);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: `Speciality ${speciality.title} deleted Successfully `,
    data: speciality,
  });
});

export const SpecialityController = {
  createSpeciality,
  getAllSpeciality,
  deleteSpeciality,
};
