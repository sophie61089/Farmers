package com.casestudy.farmingapp.vegstock;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name="VegStock_Table")
@XmlRootElement
public class VegStock {

	int id;
	
	@FormParam("name")
	String name;
	
	@FormParam("amount")
	int amount;
	
	@FormParam("price")
	double price;
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "VegStock [id=" + id + ", name=" + name + ", amount=" + amount + ", price=" + price + "]";

	}
	
	
	
}
