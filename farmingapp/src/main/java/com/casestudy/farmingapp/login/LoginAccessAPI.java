package com.casestudy.farmingapp.login;

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
@Path("/login/")
public class LoginAccessAPI {
	
	LoginJPARepository repository;

	public LoginJPARepository getRepository() {
		return repository;
	}

	@Autowired
	public void setRepository(LoginJPARepository repository) {
		this.repository = repository;
	}
	
	@Path("/list") 
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Iterable<Login> listLogin(){
		return getRepository().findAll();
	}
	@POST
	@Path("/register") 
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED})
	public Login addLogin(@BeanParam Login newLogin) {
		getRepository().save(newLogin);
		return newLogin;
	}
	@DELETE
	@Path("/delete")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public Login deleteLogin(int id) {
		Login deleteLogin = getRepository().findById(id).get();
		System.out.println(deleteLogin);
		getRepository().delete(deleteLogin);
		return deleteLogin;
	}

}
