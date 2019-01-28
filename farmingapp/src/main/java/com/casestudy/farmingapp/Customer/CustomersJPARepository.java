package com.casestudy.farmingapp.Customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;


@Component
public interface CustomersJPARepository extends CrudRepository<Customer, Integer> {

}
