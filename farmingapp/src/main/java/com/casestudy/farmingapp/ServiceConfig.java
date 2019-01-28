package com.casestudy.farmingapp;

import org.glassfish.jersey.server.ResourceConfig;
import com.casestudy.farmingapp.farmers.FarmerAccessAPI;
import com.casestudy.farming.app.VegStock.VegStockAccessAPI;
import com.casestudy.farming.app.VegStock.VegStock;
import com.casestudy.farmingapp.Customer.CustomerAccessAPI;
import com.casestudy.farmingapp.farmerorders.FarmerOrder;

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