package com.casestudy.farming.app.VegStock;

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

@Path("/vegstock/")
@Component
public class VegStockAccessAPI {

	VegStockJPARepository repository;

	public VegStockJPARepository getRepository() {
		return repository;
	}
	@Autowired
	public void setRepository(VegStockJPARepository repository) {
		this.repository = repository;
	}
	@Path("/list") 
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Iterable<VegStock> listVegStock(){
		return getRepository().findAll();
	}
	
	@POST
	@Path("/register") 
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED})
	public VegStock addVegStock(@BeanParam VegStock newVegStock) {
		getRepository().save(newVegStock);
		return newVegStock;
	}
	
	@DELETE
	@Path("/delete")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public VegStock deleteVegStock(int id) {
		VegStock deleteVegStock = getRepository().findById(id).get();
		System.out.println(deleteVegStock);
		getRepository().delete(deleteVegStock);
		return deleteVegStock;
	}
	
	@POST
	@Path("/addstock")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public VegStock updateAddVegStock(@FormParam("id")int id, @FormParam("added")int added) {
		VegStock updatedVegStock = getRepository().findById(id).get();
		int currentStock = updatedVegStock.getAmount();
		updatedVegStock.setAmount(currentStock + added);
		getRepository().save(updatedVegStock);
		return updatedVegStock;
	}
	
	@POST
	@Path("/removestock")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public VegStock updateDeleteVegStock(@FormParam("id")int id, @FormParam("added")int used) {
		VegStock updatedVegStock = getRepository().findById(id).get();
		int currentStock = updatedVegStock.getAmount();
		updatedVegStock.setAmount(currentStock - used);
		getRepository().save(updatedVegStock);
		return updatedVegStock;
	}
	
}







