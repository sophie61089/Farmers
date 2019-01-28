package com.casestudy.farmingapp.farmers;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface FarmerJPARepository extends CrudRepository<Farmer, Integer>{

}
