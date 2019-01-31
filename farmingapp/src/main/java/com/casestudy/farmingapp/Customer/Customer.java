package com.casestudy.farmingapp.Customer;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import com.casestudy.farmingapp.box.Box;


@Entity
@Table(name="Customer_Table")
@XmlRootElement
public class Customer {

		
		int customerId;
		
		@FormParam("name")
		String name;
		
		@FormParam("password")
		String password;
		
		@FormParam("email")
		String email;
		
		@FormParam("address")
		String address;
		
		@FormParam("cardNumber")
		String cardNumber;
		
		@FormParam("cardType")
		String cardType;
		
		@FormParam("cvc")
		int cvc;
		
		@FormParam("expiryDate")
		String expiryDate;
		
		@FormParam("subType")
		int subscriptionType;
		
		Set<Box> boxes = new HashSet<>();
		
		//@FormParam("browniePoints")
		//int browniePoints;
		
		@Id 
		@GeneratedValue(strategy=GenerationType.IDENTITY) 
		public int getCustomerId() {
			return customerId;
		}
		public void setCustomerId(int customerId) {
			this.customerId = customerId;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public String getCardNumber() {
			return cardNumber;
		}
		public void setCardNumber(String cardNumber) {
			this.cardNumber = cardNumber;
		}
		public String getCardType() {
			return cardType;
		}
		public void setCardType(String cardType) {
			this.cardType = cardType;
		}
		public int getCvc() {
			return cvc;
		}
		public void setCvc(int cvc) {
			this.cvc = cvc;
		}
		public String getExpiryDate() {
			return expiryDate;
		}
		public void setExpiryDate(String expiryDate) {
			this.expiryDate = expiryDate;
		}
		public int getSubscriptionType() {
			return subscriptionType;
		}
		public void setSubscriptionType(int subscriptionType) {
			this.subscriptionType = subscriptionType;
		}
		
		@OneToMany(mappedBy="customer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
		@XmlTransient
		public Set<Box> getBoxes() {
			return boxes;
		}
		public void setBoxes(Set<Box> boxes) {
			this.boxes = boxes;
		}
		
		
}
