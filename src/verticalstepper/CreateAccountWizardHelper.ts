import * as Yup from 'yup';

export interface ICreateAccount {
	projectName: string;
	accountTeamSize: string;
	accountName: string;
	accountPlan: string;

	nameOnCard: string;
	cardNumber: string;
	businessType: string;
	endDate: string;
	startDate: string;
	cardExpiryMonth: string;
	cardExpiryYear: string;
	cardCvv: string;
	saveCard: string;
	ageRange?: Array<string>;
	occupation?: Array<string>;
	incomeRange?: Array<string>;
	carPriceRange?: Array<string>;
	interestAreas?: Array<string>;
}

const createAccountSchemas = [
	Yup.object({
		projectName: Yup.string().required().label('Project Name'),
		startDate: Yup.string().required().label('Start Date'),
		endDate: Yup.string().required().label('End Date'),
		businessType: Yup.string().required().label('Business Type'),
	}),
	// Yup.object({
	// 	storeName: Yup.string().required().label('Store Name'),
	// 	storeAddress: Yup.string().required().label('Address'),
	// 	storeCity: Yup.string().required().label('City'),
	// 	storeState: Yup.string().required().label('State'),
	// 	storePostal: Yup.string().required().label('Postal'),
	// }),
	// Yup.object({
	// 	storeName: Yup.string().required().label('Store Name'),
	// 	storeAddress: Yup.string().required().label('Address'),
	// 	storeCity: Yup.string().required().label('City'),
	// 	storeState: Yup.string().required().label('State'),
	// 	storePostal: Yup.string().required().label('Postal'),
	// }),
	Yup.object({
		nameOnCard: Yup.string().required().label('Name On Card'),
		cardNumber: Yup.string().required().label('Card Number'),
		cardExpiryMonth: Yup.string().required().label('Expiration Month'),
		cardExpiryYear: Yup.string().required().label('Expiration Year'),
		cardCvv: Yup.string().required().label('CVV'),
	}),
];
const projectTargetSchema = Yup.object({
	storeName: Yup.string().required().label('Store Name'),
	storeAddress: Yup.string().required().label('Address'),
	numberOfResponse: Yup.string().required().label('Number of Response'),
	storeCity: Yup.string().required().label('City'),
	storeState: Yup.string().required().label('State'),
	storePostal: Yup.string().required().label('Postal'),
});
const inits: ICreateAccount = {
	projectName: '',
	accountTeamSize: '50+',
	accountName: '',
	accountPlan: '1',

	endDate: '',
	startDate: '',
	businessType: '',

	nameOnCard: 'Max Doe',
	cardNumber: '4111 1111 1111 1111',
	cardExpiryMonth: '1',
	cardExpiryYear: '2025',
	cardCvv: '123',
	saveCard: '1',
	ageRange: [],
	occupation: [],
	incomeRange: [],
	carPriceRange: [],
	interestAreas: [],
};
export interface IProjectTarget {
	storeName: string;
	storeAddress: string;
	numberOfResponse: string;
	storeCity: string;
	storeState: string;
	storePostal: string;
}
const projectTargetInit: IProjectTarget = {
	storeName: '',
	storeAddress: '',
	numberOfResponse: '',
	storeCity: '',
	storeState: '',
	storePostal: '',
};
const projectDetailSchema = Yup.object({
	itemDescription: Yup.string().required().label('Item Description'),
	productPrice: Yup.string().required().label('Product Price'),
	productPhoto: Yup.string().required().label('Product Photo'),
});

export {
	createAccountSchemas,
	inits,
	projectTargetSchema,
	projectTargetInit,
	projectDetailSchema,
};
