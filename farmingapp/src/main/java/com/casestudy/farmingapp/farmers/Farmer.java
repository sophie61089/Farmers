package com.casestudy.farmingapp.farmers;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

import com.casestudy.farmingapp.farmerorders.FarmerOrder;

@Entity
@Table(name="Farmer_Table")
@XmlRootElement
public class Farmer {
	
	int farmerId;
	
	@FormParam("name")
	String name;
	
	@FormParam("address")
	String address;
	
	@FormParam("accountNumber")
	int accountNumber;
	
	@FormParam("sortCode")
	int sortCode;

	Set<FarmerOrder> farmerOrders = new HashSet<>();
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getFarmerId() {
		return farmerId;
	}
	public void setFarmerId(int farmerId) {
		this.farmerId = farmerId;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public int getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}
	
	public int getSortCode() {
		return sortCode;
	}
	public void setSortCode(int sortCode) {
		this.sortCode = sortCode;
	}
	
	@OneToMany(mappedBy="farmer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	public Set<FarmerOrder> getFarmerOrders() {
		return farmerOrders;
	}
	public void setFarmerOrders(Set<FarmerOrder> farmerOrders) {
		this.farmerOrders = farmerOrders;
	}
	
	
	
}
