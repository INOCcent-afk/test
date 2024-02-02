import { useState } from "react";
import { useLocation } from "wouter";
import { CustomInput } from "../custom/CustomInput/CustomInput";
import { FormData } from "@/types";
import { validationRules } from "@/lib/utils";

export const FormVersionOne = () => {
	const [_, navigate] = useLocation();

	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [formErrors, setFormErrors] = useState<Record<string, string>>({});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: keyof FormData
	) => {
		setFormData({ ...formData, [field]: e.target.value });
	};

	const validateForm = () => {
		const errors: Record<string, string> = {};

		if (formData.firstName.length > 100) {
			errors.firstName = "First Name must be 100 characters or less.";
		}

		if (formData.lastName.length > 100) {
			errors.lastName = "Last Name must be 100 characters or less.";
		}

		if (!formData.email.match(validationRules.emailPattern)) {
			errors.email = "Invalid email address.";
		}

		if (
			formData.password.length < validationRules.minLength ||
			!formData.password.match(validationRules.specialChar) ||
			!formData.password.match(validationRules.capitalLetter) ||
			!formData.password.match(validationRules.smallLetter)
		) {
			errors.password =
				"Password must be at least 12 characters long, contain 1 special character, 1 capital letter, and 1 small letter.";
		}

		if (formData.password !== formData.confirmPassword) {
			errors.confirmPassword = "Passwords do not match.";
		}

		setFormErrors(errors);

		return Object.keys(errors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (validateForm()) {
			navigate(`/congrats/${formData.firstName} ${formData.lastName}`);
		}
	};

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
			<div className="flex items-center gap-4">
				<CustomInput
					htmlFor="firstName"
					label="First Name"
					type="text"
					error={formErrors.firstName}
					handleInputChange={handleInputChange}
					value={formData.firstName}
					required={true}
				/>

				<CustomInput
					htmlFor="lastName"
					label="Last Name"
					type="text"
					error={formErrors.lastName}
					handleInputChange={handleInputChange}
					value={formData.lastName}
					required={true}
				/>
			</div>

			<CustomInput
				htmlFor="email"
				label="Email"
				type="email"
				error={formErrors.email}
				handleInputChange={handleInputChange}
				value={formData.email}
				required={true}
			/>

			<CustomInput
				htmlFor="password"
				label="Password"
				type="password"
				error={formErrors.password}
				handleInputChange={handleInputChange}
				value={formData.password}
				required={true}
			/>

			<CustomInput
				htmlFor="confirmPassword"
				label="Confirm Password"
				type="password"
				error={formErrors.confirmPassword}
				handleInputChange={handleInputChange}
				value={formData.confirmPassword}
				required={true}
			/>

			<button
				className="bg-blue-700 text-white rounded-sm py-2 mt-4"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};
