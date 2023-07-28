/**
 * Represents a customer with basic information.
 *
 * @typedef {Object} SimpleCustomer
 *
 * @property {number} id - The unique identifier of the customer.
 * @property {string} name - The name of the customer.
 */
export type SimpleCustomer = {
  id: number;
  name: string;
};

/**
 * Represents a customer with extended information.
 *
 * @typedef {Object} DetailedCustomer
 *
 * @property {number} id - The unique identifier of the customer.
 * @property {string} name - The name of the customer.
 * @property {string} email - The email address of the customer.
 * @property {string} address - The address of the customer.
 * @property {string} phone - The phone number of the customer.
 */
export type DetailedCustomer = SimpleCustomer & {
  email: string;
  address: string;
  phone: string;
};
