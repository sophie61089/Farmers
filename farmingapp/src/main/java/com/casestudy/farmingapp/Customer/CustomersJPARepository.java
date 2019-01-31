package com.casestudy.farmingapp.Customer;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import com.casestudy.farmingapp.farmers.Farmer;


@Component
public interface CustomersJPARepository extends CrudRepository<Customer, Integer> {
	
	@Query("select c from Customer c where c.email =:email")
	List<Customer> findByEmail(@Param("email")String emailAddress);

}
