package com.casestudy.farmingapp;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import com.casestudy.farmingapp.farmers.FarmerAccessAPI;
import com.casestudy.farmingapp.vegstock.VegStock;
import com.casestudy.farmingapp.vegstock.VegStockAccessAPI;
import com.casestudy.farmingapp.Customer.CustomerAccessAPI;
import com.casestudy.farmingapp.farmerorders.FarmerOrder;

@Component
public class ServiceConfig extends ResourceConfig{
	
	public ServiceConfig() {
		register(CORSFilter.class);
		register(CustomerAccessAPI.class);
		register(FarmerAccessAPI.class);
		register(VegStockAccessAPI.class);
		register(FarmerOrder.class);
		register(VegStock.class);
	}
}