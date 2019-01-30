package com.casestudy.farmingapp.farmers;

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

import com.casestudy.farmingapp.farmerorders.FarmerOrder;
import com.casestudy.farmingapp.farmerorders.FarmerOrderJPARepository;

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
	
	FarmerOrderJPARepository orderRepository;
	
	
	
	public FarmerOrderJPARepository getOrderRepository() {
		return orderRepository;
	}

	@Autowired
	public void setOrderRepository(FarmerOrderJPARepository orderRepository) {
		this.orderRepository = orderRepository;
	}

	@Path("/login")
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Farmer farmerLogin(@QueryParam("username") String email,@QueryParam("password") String password){
		Farmer correctFarmer = getRepository().findByEmail(email).get(0);
		if (correctFarmer.getPassword().equals(password))
			return correctFarmer;
		else
			return null;
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
	
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Path("/orders")
	@Transactional
	public Set<FarmerOrder> getOrders(@QueryParam("farmerId")int farmerId){
		Farmer f = getRepository().findById(farmerId).get();
		if(!f.getFarmerOrders().isEmpty()) {
			return f.getFarmerOrders();
		}else {
			return null;
		}
	}
	
	@POST
	@Path("/register-order-to-farmer")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED})
	@Transactional
	public void addOrderToFarmer(@FormParam("orderId")int orderId, @FormParam("farmerId")int farmerId){
		FarmerOrder o = getOrderRepository().findById(orderId).get();
		Farmer f = getRepository().findById(farmerId).get();
		if(!f.getFarmerOrders().contains(o)){
			f.getFarmerOrders().add(o);
			o.setFarmer(f);
		}		
		getRepository().save(f);
	}

}
