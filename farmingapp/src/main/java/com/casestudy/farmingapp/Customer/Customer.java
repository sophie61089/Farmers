package com.casestudy.farmingapp.Customer;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

import com.casestudy.farmingapp.login.Login;

@Entity
@Table(name="Customer_Table")
@XmlRootElement
public class Customer {

		
		int customerId;
		@FormParam("name")
		String name;
		@FormParam("email")
		String email;
		@FormParam("address")
		String address;
		@FormParam("cardNumber")
		int cardNumber;
		@FormParam("cardType")
		String cardType;
		@FormParam("cvc")
		int cvc;
		@FormParam("expiryDate")
		String expiryDate;
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
		public int getCardNumber() {
			return cardNumber;
		}
		public void setCardNumber(int cardNumber) {
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
		
}
