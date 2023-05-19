package com.swiggy.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="delivery_login")
public class DeliveryloginModel {
	@Id
	String email;
	String password;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public DeliveryloginModel(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public DeliveryloginModel() {
		
	}

}