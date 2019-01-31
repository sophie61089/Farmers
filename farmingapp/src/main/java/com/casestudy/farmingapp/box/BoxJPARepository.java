package com.casestudy.farmingapp.box;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface BoxJPARepository  extends CrudRepository<Box, Integer>{

}
