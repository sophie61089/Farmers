package com.casestudy.farmingapp;

import org.glassfish.jersey.server.ResourceConfig;
import com.casestudy.farmingapp.farmers.FarmerAccessAPI;
<<<<<<< HEAD
import com.casestudy.farming.app.VegStock.VegStockAccessAPI;
=======
import com.casestudy.farming.app.VegStock.VegStock;
>>>>>>> branch 'master' of https://github.com/sophie61089/Farmers.git
import com.casestudy.farmingapp.Customer.CustomerAccessAPI;
import com.casestudy.farmingapp.farmerorders.FarmerOrder;

public class ServiceConfig extends ResourceConfig{
	
	public ServiceConfig() {
		register(CORSFilter.class);
		register(CustomerAccessAPI.class);
		register(FarmerAccessAPI.class);
<<<<<<< HEAD
		register(VegStockAccessAPI.class);
=======
		register(FarmerOrder.class);
		register(VegStock.class);
>>>>>>> branch 'master' of https://github.com/sophie61089/Farmers.git
	}
}