import { z } from 'zod';

const AddressSchema = z.object({
    address: z.string(),
    favoriteColor: z.string(),
    name: z.string(),
});

const ClientDetailsSchema = z.object({
    name: z.string(),
    favoriteFood: z.string(),
    pocClient: z.string(),
});

interface Option {
    value: string;
    label: string;
}

interface FormField {
    id: number;
    label: string;
    name?: string; // Optional since it's used for specific cases
    type: 'input' | 'select'; // Restrict type to 'input' or 'select'
    labelType?: 'text'; // Restrict labelType to 'text'
    placeholder?: string;
    required: boolean;
    options?: Option[];
}

interface FormData {
    id: number;
    category: string;
    data: FormField[];
    validationSchema: z.ZodObject<any>; // Use z.ZodObject for the validation schema
}

export const constants: FormData[] = [
    {
        id: 1,
        category: "Address", // Corrected spelling from 'catogery' to 'category'
        data: [
            {
                id: 1,
                label: "Address",
                type: "input",
                labelType: "text",
                placeholder: "Address",
                required: true,
            },
            {
                id: 2,
                name: 'favoriteColor',
                label: 'Favorite Color',
                type: 'select',
                required: true,
                options: [
                    { value: '', label: 'Select a color' },
                    { value: 'red', label: 'Red' },
                    { value: 'blue', label: 'Blue' },
                    { value: 'green', label: 'Green' },
                    { value: 'yellow', label: 'Yellow' },
                    { value: 'orange', label: 'Orange' }
                ]
            },
            {
                id: 3,
                label: "Name",
                type: "input",
                labelType: "text",
                placeholder: "Name",
                required: true,
            },
        ],
        validationSchema: AddressSchema, // Assign correct validation schema for Address category
    },
    {
        id: 2,
        category: "Client Details", // Corrected spelling from 'catogery' to 'category'
        data: [
            {
                id: 1,
                label: "Name",
                type: "input",
                labelType: "text",
                placeholder: "Name",
                required: true,
            },
            {
                id: 2,
                name: 'favoriteFood',
                label: 'Favorite Food',
                type: 'select',
                required: true,
                options: [
                    { value: '', label: 'Select a food' }, // Corrected label
                    { value: 'pizza', label: 'Pizza' }, // Modified options for food
                    { value: 'burger', label: 'Burger' },
                    { value: 'sushi', label: 'Sushi' },
                    { value: 'pasta', label: 'Pasta' },
                    { value: 'salad', label: 'Salad' }
                ]
            },
            {
                id: 3,
                label: "POC client",
                type: "input",
                labelType: "text",
                placeholder: "POC",
                required: true,
            },
        ],
        validationSchema: ClientDetailsSchema, // Assign correct validation schema for Client Details category
    }
];
