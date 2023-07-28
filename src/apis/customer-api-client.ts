import { DetailedCustomer, SimpleCustomer } from "../types/customer";
import { customersList, detailedCustomers } from "../data/customers-data";

function simulateDelay() {
  const minDelay = 1000;
  const maxDelay = 2000;

  const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
  return new Promise((resolve) => setTimeout(resolve, randomDelay));
}

/**
 * Fetches the basic information of the list of customers.
 *
 * @returns {Promise<SimpleCustomer[]>} A promise that resolves with the list of SimpleCustomer objects.
 */
export async function fetchCustomerList(): Promise<SimpleCustomer[]> {
  await simulateDelay();
  return customersList;
}

/**
 * Fetches the extended information of the customer with the provided ID.
 *
 * @param {number} id - The ID of the customer to fetch.
 * @throws {Error} Throws an error if the customer with the provided ID is not found.
 * @returns {Promise<DetailedCustomer>} A promise that resolves with the DetailedCustomer object.
 */
export async function fetchCustomer(id: number): Promise<DetailedCustomer> {
  await simulateDelay();

  const customer = detailedCustomers.find((customer) => customer.id === id);
  if (!customer) {
    throw new Error(`Customer with ID ${id} not found.`);
  }
  return customer;
}
