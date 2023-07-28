import { DetailedCustomer, SimpleCustomer } from "../types/customer";

/**
 * An array of SimpleCustomer objects representing a list of customers with basic information.
 * @type {SimpleCustomer[]}
 */
export const customersList: SimpleCustomer[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

/**
 * An array of DetailedCustomer objects representing a list of customers with extended information.
 * @type {DetailedCustomer[]}
 */
export const detailedCustomers: DetailedCustomer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, City",
    phone: "555-1234",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    address: "456 Park Ave, Town",
    phone: "555-5678",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    address: "789 Elm Rd, Village",
    phone: "555-9876",
  },
];
