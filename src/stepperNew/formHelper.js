import * as Yup from 'yup';
// First page
const setUpInits = {
	projectName: '',
	accountPlan: '0',
	endDate: '',
	startDate: '',
	businessType: '',
	ageRange: [],
	occupation: [],
	incomeRange: [],
	carPriceRange: [],
	solutionInterestAreas: [],
};
const firstPageSchemas = Yup.object({
	projectName: Yup.string().required().label('Project Name'),
	startDate: Yup.string().required().label('Start Date'),
	endDate: Yup.string().required().label('End Date'),
	businessType: Yup.string().required().label('Business Type'),
});

// Second Page

const projectTargetInit = {
	storeName: '',
	storeAddress: '',
	numberOfResponse: 0,
	storeCity: '',
	storeState: '',
	storePostal: '',
};
const projectTargetSchema = Yup.object({
	storeName: Yup.string().required().label('Store Name'),
	storeAddress: Yup.string().required().label('Address'),
	numberOfResponse: Yup.number().required().label('Number of Response'),
	storeCity: Yup.string().required().label('City'),
	storeState: Yup.string().required().label('State'),
	storePostal: Yup.string().required().label('Postal'),
});
// Third Page
const projectTarhgetInit = {
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
// Final Page
const registerStepper = {
	firstName: '',
	lastName: '',
	emailId: '',
	mobileNumber: '',
	companyName: '',
	password: '',
	cpassword: '',
	address: '',
	city: '',
	state: '',
	pincode: '',
	gstin: '',
};
const registerStepperSchema = Yup.object({
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
});
// Final Page Login Modal
const loginStepper = {
	email: '',
	password: '',
};
const loginStepperSchema = Yup.object({
	email: Yup.string().required().label('Item Description'),
	password: Yup.string().required().label('Product Price'),
});

export {
	setUpInits,
	firstPageSchemas,
	projectTargetSchema,
	projectTargetInit,
	projectDetailSchema,
	registerStepper,
	registerStepperSchema,
	loginStepperSchema,
	loginStepper,
};
