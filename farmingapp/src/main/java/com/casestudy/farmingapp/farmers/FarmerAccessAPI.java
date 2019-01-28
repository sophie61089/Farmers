package com.casestudy.farmingapp.farmers;

import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
@Path("/farmer/")
public class FarmerAccessAPI {
	
	FarmerJPARepository repository;
	
	public FarmerJPARepository getRepository() {
		return repository;
	}

	@Autowired
	public void setRepository(FarmerJPARepository repository) {
		this.repository = repository;
	}
	
	@Path("/list")
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Iterable<Farmer> listFarmers(){
		return getRepository().findAll();
	}
	
	@POST
	@Path("/register")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED})
	public Farmer addFarmer(@BeanParam Farmer newFarmer) {
		getRepository().save(newFarmer);
		return newFarmer ;
	}
	
	@DELETE
	@Path("/delete")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Farmer deleteFarmer(int farmerId) {
		Farmer deleteFarmer = getRepository().findById(farmerId).get(); 
		getRepository().delete(deleteFarmer);									
		return deleteFarmer;
	}

}
