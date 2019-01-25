package com.casestudy.farmingapp;

import org.glassfish.jersey.server.ResourceConfig;
import com.casestudy.farmingapp.farmers.FarmerAccessAPI;
import com.casestudy.farmingapp.Customer.CustomerAccessAPI;

public class ServiceConfig extends ResourceConfig{
	
	public ServiceConfig() {
		register(CORSFilter.class);
		register(CustomerAccessAPI.class);
		register(FarmerAccessAPI.class);
	}
}