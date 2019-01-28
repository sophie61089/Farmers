package com.casestudy.farming.app.VegStock;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface VegStockJPARepository extends CrudRepository<VegStock, Integer> {


}
