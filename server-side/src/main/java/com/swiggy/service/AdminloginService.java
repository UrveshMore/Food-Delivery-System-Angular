package com.swiggy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swiggy.Doa.AdminloginDao;
import com.swiggy.Model.AdminloginModel;

@Service
public class AdminloginService {

	@Autowired
	AdminloginDao ad;

	public AdminloginModel fetchAdminByEmail(String email) {
		return ad.findByEmail(email);
	}

	public void saveAdmin(AdminloginModel a) {
		ad.save(a);
		
	}
	
	
	
}