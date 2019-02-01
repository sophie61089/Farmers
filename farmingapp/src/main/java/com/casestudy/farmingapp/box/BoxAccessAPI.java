package com.casestudy.farmingapp.box;

import javax.transaction.Transactional;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.casestudy.farmingapp.Customer.Customer;
import com.casestudy.farmingapp.Customer.CustomersJPARepository;

@Component
@Path("/box/")
public class BoxAccessAPI {
	
	BoxJPARepository repository;

	public BoxJPARepository getRepository() {
		return repository;
	}
	
	@Autowired
	public void setRepository(BoxJPARepository repository) {
		this.repository = repository;
	}
	
	CustomersJPARepository customerRepository;
		
	public CustomersJPARepository getCustomerRepository() {
		return customerRepository;
	}
	
	@Autowired
	public void setCustomerRepository(CustomersJPARepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	@Path("/list") 
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Iterable<Box> listBoxes(){
		return getRepository().findAll();
	}
	
	@POST
	@Path("/register") 
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED})
	public Box addBox(@BeanParam Box newBox) {
		getRepository().save(newBox);
		return newBox;
	}
	
	@DELETE
	@Path("/delete")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public Box deleteBox(int boxId) {
		Box deleteBox = getRepository().findById(boxId).get();
		deleteBox.setCustomer(null);
		getRepository().save(deleteBox);
		getRepository().delete(deleteBox);
		return deleteBox;
	}
	
	@POST
	@Path("/register-box-to-customer")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED})
	@Transactional
	public void addBoxToCustomer(@FormParam("boxId")int boxId, @FormParam("customerId")int customerId) {
		Box b = getRepository().findById(boxId).get();
		Customer c = getCustomerRepository().findById(customerId).get();
		if (!c.getBoxes().contains(b)) {
			c.getBoxes().add(b);
			b.setCustomer(c);
		}
		getCustomerRepository().save(c);
	}
	
	

}





























