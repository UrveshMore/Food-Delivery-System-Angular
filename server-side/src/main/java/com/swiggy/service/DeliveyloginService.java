package com.swiggy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swiggy.Doa.DeliveylogDoa;
import com.swiggy.Model.DeliveryloginModel;

@Service
public class DeliveyloginService {

	@Autowired
	DeliveylogDoa ad;

	public DeliveryloginModel fetchAdminByEmail(String email) {
		return ad.findByEmail(email);
	}

	public void saveAdmin(DeliveryloginModel a) {
		ad.save(a);
		
	}
	
	
	
}