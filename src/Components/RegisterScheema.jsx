import * as Yup from "yup";
export const signUpSchema = Yup.object({
    FirstName: Yup.string().min(4).max(30).required(" please enter  first name"),
    LastName: Yup.string().min(4).max(25).required(" please enter your last name"),
    Description: Yup.string().min(4).max(25).required(" please enter description"),

});