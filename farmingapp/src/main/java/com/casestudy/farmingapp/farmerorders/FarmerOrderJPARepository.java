package com.casestudy.farmingapp.farmerorders;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface FarmerOrderJPARepository extends CrudRepository<FarmerOrder, Integer>{

}
