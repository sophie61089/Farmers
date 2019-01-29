package com.casestudy.farmingapp.farmerorders;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

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

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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

	@ManyToOne
	@JoinColumn(name="FK_FarmerID")
	@XmlTransient
	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}
	
	
	
}
