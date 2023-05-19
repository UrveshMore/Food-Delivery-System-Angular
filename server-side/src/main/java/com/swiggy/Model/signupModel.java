package com.swiggy.Model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class signupModel {
	@Id
	String email;
	String firstname;
	String lastname;
	String address;
	String password;
	
	
	
//	@OneToMany(targetEntity = MenuModel.class,cascade = CascadeType.ALL)
//	@JoinColumn(name="signup_fk",referencedColumnName="email")
//	List<MenuModel> menu;
//	
//	@JsonBackReference
//	@OneToMany(mappedBy="sign")
//	private Set<CartModel> cart=new HashSet<>();
//	
	public signupModel() {
		
	}
	

	public signupModel(String email, String firstname, String lastname, String address, String password ){
		super();
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.password = password;
//		this.cart = cart;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

//	public Set<CartModel> getCart() {
//		return cart;
//	}
//
//	public void setCart(Set<CartModel> cart) {
//		this.cart = cart;
//	}

	
	}
