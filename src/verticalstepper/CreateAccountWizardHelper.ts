import * as Yup from 'yup';

export interface ICreateAccount {
	projectName: string;
	// accountTeamSize: string;
	accountName: string;
	accountPlan: string;

	// nameOnCard: string;
	// cardNumber: string;
	businessType: string;
	endDate: string;
	startDate: string;
	// cardExpiryMonth: string;
	// cardExpiryYear: string;
	// cardCvv: string;
	// saveCard: string;
	ageRange?: Array<string>;
	occupation?: Array<string>;
	incomeRange?: Array<string>;
	carPriceRange?: Array<string>;
	solutionInterestAreas?: Array<string>;
	firstName: string;
	lastName: string;
	emailId: string;
	mobileNumber: number;
	companyName: string;
	password: string;
	cpassword: string;
	address: string;
	city: string;
	state: string;
	pincode: number;
	gstin: string;
}

const createAccountSchemas = [
	Yup.object({
		projectName: Yup.string().required().label('Project Name'),
		startDate: Yup.string().required().label('Start Date'),
		endDate: Yup.string().required().label('End Date'),
		businessType: Yup.string().required().label('Business Type'),
	}),
	Yup.object({
		storeName: Yup.string().nullable(true).notRequired(),
	}),
	Yup.object({
		storeName: Yup.string().nullable(true).notRequired(),
	}),
	Yup.object({
		storeName: Yup.string().nullable(true).notRequired(),
	}),
	Yup.object({
		projectName: Yup.string().required().label('Project Name'),
		startDate: Yup.string().required().label('Start Date'),
		endDate: Yup.string().required().label('End Date'),
		businessType: Yup.string().required().label('Business Type'),
	}),
	Yup.object({
		firstName: Yup.string().required().label('First Name'),
		lastName: Yup.string().required().label('Last Name'),
		emailId: Yup.string().required().label('Email Id'),
		mobileNumber: Yup.number().required().label('Mobile Number'),
		companyName: Yup.string()
			.nullable(true)
			.notRequired()
			.label('Company Name'),

		password: Yup.string().required().label('Password'),
		cpassword: Yup.string().required().label('Confirm Password'),
		address: Yup.string().required().label('Address'),
		city: Yup.string().required().label('City'),
		state: Yup.string().required().label('State'),
		pincode: Yup.number().required().label('Pincode'),
		gstin: Yup.string().nullable(true).notRequired(),
	}),
];
const projectTargetSchema = Yup.object({
	storeName: Yup.string().required().label('Store Name'),
	storeAddress: Yup.string().required().label('Address'),
	numberOfResponse: Yup.number().required().label('Number of Response'),
	storeCity: Yup.string().required().label('City'),
	storeState: Yup.string().required().label('State'),
	storePostal: Yup.string().required().label('Postal'),
});
const inits: ICreateAccount = {
	projectName: '',
	// accountTeamSize: '50+',
	accountName: '',
	accountPlan: '0',

	endDate: '',
	startDate: '',
	businessType: '',

	// nameOnCard: 'Max Doe',
	// cardNumber: '4111 1111 1111 1111',
	// cardExpiryMonth: '1',
	// cardExpiryYear: '2025',
	// cardCvv: '123',
	// saveCard: '1',
	ageRange: [],
	occupation: [],
	incomeRange: [],
	carPriceRange: [],
	solutionInterestAreas: [],
	firstName: '',
	lastName: '',
	emailId: '',
	mobileNumber: 0,
	companyName: '',
	password: '',
	cpassword: '',
	address: '',
	city: '',
	state: '',
	pincode: 0,
	gstin: '',
};
export interface IProjectTarget {
	storeName: string;
	storeAddress: string;
	numberOfResponse: number;
	storeCity: string;
	storeState: string;
	storePostal: string;
}
const projectTargetInit: IProjectTarget = {
	storeName: '',
	storeAddress: '',
	numberOfResponse: 0,
	storeCity: '',
	storeState: '',
	storePostal: '',
};
const projectDetailSchema = Yup.object({
	itemDescription: Yup.string().required().label('Item Description'),
	productPrice: Yup.string().required().label('Product Price'),
	productPhoto: Yup.string().required().label('Product Photo'),
});
export interface ILoginStep {
	email: string;
	password: string;
}
const loginStepper: ILoginStep = {
	email: '',
	password: '',
};
const loginStepperSchema = Yup.object({
	email: Yup.string().required().label('Item Description'),
	password: Yup.string().required().label('Product Price'),
});

export {
	createAccountSchemas,
	inits,
	projectTargetSchema,
	projectTargetInit,
	projectDetailSchema,
	loginStepperSchema,
	loginStepper,
};
