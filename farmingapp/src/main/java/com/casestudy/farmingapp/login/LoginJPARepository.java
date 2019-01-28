package com.casestudy.farmingapp.login;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface LoginJPARepository extends CrudRepository<Login, Integer>{

}
