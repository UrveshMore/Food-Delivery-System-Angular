package com.swiggy.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity

public class ContactModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
 String fname;
 String lname;
 String subject;
 String review;
 
 
 
 
public ContactModel() {
	
}
public ContactModel(int id, String fname, String lname, String subject, String review) {
	super();
	this.id = id;
	this.fname = fname;
	this.lname = lname;
	this.subject = subject;
	this.review = review;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFname() {
	return fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public String getLname() {
	return lname;
}
public void setLname(String lname) {
	this.lname = lname;
}
public String getSubject() {
	return subject;
}
public void setSubject(String subject) {
	this.subject = subject;
}
public String getReview() {
	return review;
}
public void setReview(String review) {
	this.review = review;
}
 
 
 
}
