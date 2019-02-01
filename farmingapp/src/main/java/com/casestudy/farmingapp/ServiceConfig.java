package com.casestudy.farmingapp;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import com.casestudy.farmingapp.Customer.CustomerAccessAPI;
import com.casestudy.farmingapp.box.BoxAccessAPI;
import com.casestudy.farmingapp.farmerorders.FarmerOrderAccessAPI;
import com.casestudy.farmingapp.farmers.FarmerAccessAPI;
import com.casestudy.farmingapp.vegstock.VegStockAccessAPI;

@Component
public class ServiceConfig extends ResourceConfig{
	
	public ServiceConfig() {
		register(CORSFilter.class);
		register(CustomerAccessAPI.class);
		register(BoxAccessAPI.class);
		register(FarmerAccessAPI.class);
		register(VegStockAccessAPI.class);
		register(FarmerOrderAccessAPI.class);
		register(FarmerOrderAccessAPI.class);

	}
}