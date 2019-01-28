package com.casestudy.farmingapp;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import com.casestudy.farmingapp.farmers.FarmerAccessAPI;
import com.casestudy.farmingapp.login.Login;
import com.casestudy.farmingapp.login.LoginAccessAPI;
import com.casestudy.farmingapp.vegstock.VegStock;
import com.casestudy.farmingapp.vegstock.VegStockAccessAPI;
import com.casestudy.farmingapp.Customer.CustomerAccessAPI;
import com.casestudy.farmingapp.farmerorders.FarmerOrder;
import com.casestudy.farmingapp.farmerorders.FarmerOrderAccessAPI;

@Component
public class ServiceConfig extends ResourceConfig{
	
	public ServiceConfig() {
		register(CORSFilter.class);
		register(CustomerAccessAPI.class);
		register(FarmerAccessAPI.class);
<<<<<<< HEAD
		register(VegStockAccessAPI.class);
		register(FarmerOrderAccessAPI.class);
=======
		register(VegStockAccessAPI.class);
		register(FarmerOrderAccessAPI.class);
		register(VegStockAccessAPI.class);
		register(LoginAccessAPI.class);
>>>>>>> branch 'master' of https://github.com/sophie61089/Farmers.git
	}
}