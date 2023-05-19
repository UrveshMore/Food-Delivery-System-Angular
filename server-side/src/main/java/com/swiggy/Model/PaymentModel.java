package com.swiggy.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment_model")
public class PaymentModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int pid;
	String cardnumber;
	int cvv;
	String date;
	String accountholdername;
	int grandTotal;
	String email;
	String address;
	long phonenumber;
	
	
	
	
	public PaymentModel(int pid, String cardnumber, int cvv, String date, String accountholdername, int grandTotal,
			String email, String address, long phonenumber) {
		super();
		this.pid = pid;
		this.cardnumber = cardnumber;
		this.cvv = cvv;
		this.date = date;
		this.accountholdername = accountholdername;
		this.grandTotal = grandTotal;
		this.email = email;
		this.address = address;
		this.phonenumber = phonenumber;
	}

	public int getPid() {
		return pid;
	}




	public void setPid(int pid) {
		this.pid = pid;
	}




	public String getCardnumber() {
		return cardnumber;
	}




	public void setCardnumber(String cardnumber) {
		this.cardnumber = cardnumber;
	}




	public int getCvv() {
		return cvv;
	}




	public void setCvv(int cvv) {
		this.cvv = cvv;
	}




	public String getDate() {
		return date;
	}




	public void setDate(String date) {
		this.date = date;
	}




	public String getAccountholdername() {
		return accountholdername;
	}




	public void setAccountholdername(String accountholdername) {
		this.accountholdername = accountholdername;
	}




	public int getGrandTotal() {
		return grandTotal;
	}




	public void setGrandTotal(int grandTotal) {
		this.grandTotal = grandTotal;
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




	public long getPhonenumber() {
		return phonenumber;
	}




	public void setPhonenumber(long phonenumber) {
		this.phonenumber = phonenumber;
	}




	public PaymentModel() {
		
	}
	
	
	
}