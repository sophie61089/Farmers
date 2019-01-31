package com.casestudy.farmingapp.box;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import com.casestudy.farmingapp.Customer.Customer;

@Entity
@Table(name="Customer_Box")
@XmlRootElement
public class Box {
	
	int id;
	Customer customer;
	
	@FormParam("vegTypes")
	String vegTypes;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@ManyToOne
	@JoinColumn(name="FK_CustomerID")
	@XmlTransient
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public String getVegTypes() {
		return vegTypes;
	}
	public void setVegTypes(String vegTypes) {
		this.vegTypes = vegTypes;
	}
	
	
	

}
