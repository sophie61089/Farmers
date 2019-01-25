package com.casestudy.farmingapp.farmerorders;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

import com.casestudy.farmingapp.farmers.Farmer;


@Entity
@Table(name="Farmer_Orders")
@XmlRootElement
public class FarmerOrder {
	
	int orderid;
	
	@FormParam("vegName")
	String vegName;
	
	@FormParam("quantity")
	int quantity;
	
	@FormParam("unitPrice")
	double unitPrice;
	
	Farmer farmer;

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public String getVegName() {
		return vegName;
	}

	public void setVegName(String vegName) {
		this.vegName = vegName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}
	
	
	
}
