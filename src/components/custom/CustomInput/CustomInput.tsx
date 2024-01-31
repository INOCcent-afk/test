import { FormData } from "@/types";
import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	label: string;
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		field: keyof FormData
	) => void;
	htmlFor: keyof FormData;
	error: string | undefined;
}
export const CustomInput: FC<Props> = ({
	label,
	handleInputChange,
	htmlFor,
	value,
	error,
	...restProps
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={htmlFor} className="text-sm font-medium">
				{label}:
			</label>
			<input
				id={htmlFor}
				value={value}
				onChange={(e) => handleInputChange(e, htmlFor)}
				className={`py-1 px-2 text-sm ${
					error ? "border-red-500 focus:border-red-500" : ""
				}`}
				{...restProps}
			/>
			{error && (
				<div className="max-w-[300px] mt-2 text-sm text-red-500">
					<span>{error}</span>
				</div>
			)}
		</div>
	);
};
