package com.swiggy.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CartModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int cid;
	int id;
	int price;
	String title;
	String photo;
	String email;
	int total;
	
public CartModel(int cid, int id, int price, String title, String photo, String email, int total) {
		super();
		this.cid = cid;
		this.id = id;
		this.price = price;
		this.title = title;
		this.photo = photo;
		this.email = email;
		this.total = total;
	}

//	@ManyToOne(cascade=CascadeType.ALL)
//	@JoinColumn(name="email")
//	private SignupModel sign;

	
	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public CartModel() {
		
	}
	
	
}