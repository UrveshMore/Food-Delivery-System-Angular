package com.swiggy.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class MenuModel {
		@Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
		int mid;
		int price;
		String photo;
		String title;
	
	public MenuModel() {
		
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public MenuModel(int mid, int price, String photo, String title) {
		super();
		this.mid = mid;
		this.price = price;
		this.photo = photo;
		this.title = title;
	}
	
}