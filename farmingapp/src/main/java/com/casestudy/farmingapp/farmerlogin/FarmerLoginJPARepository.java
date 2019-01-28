package com.casestudy.farmingapp.farmerlogin;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface FarmerLoginJPARepository extends CrudRepository<FarmerLogin, Integer> {

}
