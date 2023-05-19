package com.swiggy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swiggy.Doa.ContactDoa;
import com.swiggy.Model.ContactModel;

@Service
public class ContactService {
	@Autowired
	ContactDoa cd;
	
	public void saveReview(ContactModel m) {
		cd.save(m);
	}
	public List<ContactModel> getAllUser(){
		return cd.findAll();
	}
}
