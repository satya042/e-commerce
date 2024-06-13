export const color = [
    "white",
    "Black",
    "Red",
    "Maroon",
    "Being",
    "Pink",
    "Green",
    "Yellow"
];

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S', checked: false },
            { value: 'M', label: 'M', checked: false },
            { value: 'L', label: 'L', checked: false },
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: '159-399', label: '₹159 To ₹399', checked: false },
            { value: '359-999', label: '₹399 To ₹999', checked: false },
            { value: '999-1999', label: '₹999 To ₹1999', checked: false },
            { value: '1999-2999', label: '₹1999 To ₹2999', checked: false },
            { value: '3999-4999', label: '₹3999 To ₹4999', checked: false },
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% And Above", },
            { value: '20', label: '20% And Above', checked: false },
            { value: '30', label: '30% And Above', checked: false },
            { value: '40', label: '40% And Above', checked: false },
            { value: '50', label: '50% And Above', checked: false },
            { value: '60', label: '60% And Above', checked: false },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out Of Stock" },
        ],
    }
];