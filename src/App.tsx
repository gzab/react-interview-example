import React, { useEffect, useState } from "react";
import {fetchCustomer, fetchCustomerList} from "./apis/customer-api-client";
import { List } from "./design-system/List";
import { Card } from "./design-system/Card";
import {DetailedCustomer, SimpleCustomer} from "./types/customer";
import {
  addOrUpdateSearchParameter,
  readSearchParameter,
  removeSearchParameter,
} from "./utils/search-params";
import {Drawer} from "./design-system/Drawer";
import {Form} from "./design-system/Form";
import {TextField} from "./design-system/TextField";

export const App = () => {
  const [customers, setCustomers] = useState<any>();
  const [customerId, setCustomerId] = useState<any>();
  const [isOpen, setOpen] = useState<any>();
  const [customer, setCustomer] = useState<any>();

  fetchCustomerList().then(setCustomers);

  if(customerId)
    fetchCustomer(customerId).then(setCustomer);

  useEffect(() => {
    if (customerId) {
      setOpen(true);
    }
  }, [customerId]);

  useEffect(() => {
    if (customerId) {
      addOrUpdateSearchParameter("customer", customerId);
    }
  }, [customerId]);

  useEffect(() => {
    const customerSearchParam = readSearchParameter("customer");
    if (customerSearchParam) {
      setCustomerId(customerSearchParam);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      removeSearchParameter("customer");
      setCustomerId(null);
      setCustomer(null);
    }
  }, [isOpen]);

  return (
    <div>
      {customers && (
        <List
          set={customers}
          renderElement={(customer: SimpleCustomer) => (
            <Card title={customer.name} action={() => setCustomerId(customer.id)}/>
          )}
        />
      )}
      {customer && customerId && <Drawer open={isOpen} onClose={() => setOpen(false)}>
        <Form>
          <TextField label="Name" value={(customer as DetailedCustomer)?.name}/>
          <TextField label="Email" value={(customer as DetailedCustomer)?.email}/>
          <TextField label="Address" value={(customer as DetailedCustomer)?.address}/>
          <TextField label="Phone" value={(customer as DetailedCustomer)?.phone}/>
        </Form>
      </Drawer>}
    </div>
  );
};
