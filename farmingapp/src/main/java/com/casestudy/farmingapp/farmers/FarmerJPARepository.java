package com.casestudy.farmingapp.farmers;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

@Component
public interface FarmerJPARepository extends CrudRepository<Farmer, Integer>{
	
	@Query("select f from Farmer f where f.email =:email")
	List<Farmer> findByEmail(@Param("email")String emailAddress);

}
