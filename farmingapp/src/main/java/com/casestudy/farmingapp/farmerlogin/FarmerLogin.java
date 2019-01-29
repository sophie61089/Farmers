package com.casestudy.farmingapp.farmerlogin;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

import com.casestudy.farmingapp.farmers.Farmer;

@Entity
@Table(name="Farmer_Login_Table")
@XmlRootElement
public class FarmerLogin {
	
	@FormParam("username")
	String username;
	
	@FormParam("password")
	String password;
	
	Farmer farmer;
	
	@OneToOne
	@MapsId
	@JoinColumn(name = "farmerId")
	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}
	
	@Id
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
