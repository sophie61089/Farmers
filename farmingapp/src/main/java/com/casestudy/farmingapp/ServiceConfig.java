package com.casestudy.farmingapp;

import org.glassfish.jersey.server.ResourceConfig;


public class ServiceConfig extends ResourceConfig{
	
	public ServiceConfig() {
		register(CORSFilter.class);
		register(CustomerAccessAPI.class);
		register(FarmerAccessAPI.class);
		register(ProvidedProduceAccessAPI.class);
		register(VegAccessAPI.class);
	}

}
