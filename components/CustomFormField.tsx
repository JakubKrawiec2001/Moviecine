import { Control, FieldPath } from "react-hook-form";
import {
	FormControl,
	FormDescription,
	FormField,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { formSchema } from "@/lib/utils";

const authSchema = formSchema("sign-up");

interface ICustomFormFieldProps {
	control: Control<z.infer<typeof authSchema>>;
	name: FieldPath<z.infer<typeof authSchema>>;
	label: string;
	placeholder: string;
}

const CustomFormField = ({
	control,
	name,
	label,
	placeholder,
}: ICustomFormFieldProps) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<div className="w-full">
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							placeholder={placeholder}
							type={
								name === "password" || "confirmedPassword" ? "password" : "text"
							}
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</div>
			)}
		/>
	);
};

export default CustomFormField;
