package com.casestudy.farmingapp.farmerorders;

import java.util.Set;

import javax.transaction.Transactional;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
@Path("/farmerorder/")
public class FarmerOrderAccessAPI {
	
	FarmerOrderJPARepository repository;

	public FarmerOrderJPARepository getRepository() {
		return repository;
	}

	@Autowired
	public void setRepository(FarmerOrderJPARepository repository) {
		this.repository = repository;
	}
	
	@Path("/list")
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Iterable<FarmerOrder> listFarmerOrders(){
		return getRepository().findAll();
	}
	
	@POST
	@Path("/register")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED})
	public FarmerOrder addFarmerOrder(@BeanParam FarmerOrder newFarmerOrder) {
		getRepository().save(newFarmerOrder);
		return newFarmerOrder ;
	}
	
	@DELETE
	@Path("/delete")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public FarmerOrder deleteFarmerOrder(int farmerOrderId) {
		FarmerOrder deleteFarmerOrder = getRepository().findById(farmerOrderId).get(); 
		getRepository().delete(deleteFarmerOrder);									
		return deleteFarmerOrder;
	}

}
