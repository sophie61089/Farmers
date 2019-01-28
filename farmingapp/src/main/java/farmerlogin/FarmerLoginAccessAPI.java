package farmerlogin;

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
@Path("/farmerlogin/")
public class FarmerLoginAccessAPI {
	
	FarmerLoginJPARepository repository;
	
	public FarmerLoginJPARepository getRepository() {
		return repository;
	}

	@Autowired
	public void setRepository(FarmerLoginJPARepository repository) {
		this.repository = repository;
	}
	@Path("/list") 
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Iterable<FarmerLogin> listLogin(){
		return getRepository().findAll();
	}
	@POST
	@Path("/register") 
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED})
	public FarmerLogin addFarmerLogin(@BeanParam FarmerLogin newFarmerLogin) {
		getRepository().save(newFarmerLogin);
		return newFarmerLogin;
	}
	@DELETE
	@Path("/delete")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public FarmerLogin deleteFarmerLogin(int id) {
		FarmerLogin deleteFarmerLogin = getRepository().findById(id).get();
		System.out.println(deleteFarmerLogin);
		getRepository().delete(deleteFarmerLogin);
		return deleteFarmerLogin;
	}

}
