package com.casestudy.farmingapp.farmerlogin;

import javax.persistence.CascadeType;
<<<<<<< HEAD
=======
import javax.persistence.Column;
>>>>>>> branch 'master' of https://github.com/sophie61089/Farmers.git
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
	
	 @OneToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	 @JoinColumn(name = "fk_farmerid")
	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}
	

	@Id
	@Column(name="pk_username")
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name="user_password")
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
