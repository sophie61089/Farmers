package com.casestudy.farmingapp.vegstock;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface VegStockJPARepository extends CrudRepository<VegStock, Integer> {


}
