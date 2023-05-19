package com.swiggy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swiggy.Doa.signupDoa;
import com.swiggy.Model.signupModel;

@Service
public class signupService {
	@Autowired
	signupDoa sd;
	
	public List<signupModel> getAllUser(){
		return sd.findAll();
	}
	
	public void saveUser(signupModel s) {
		sd.save(s);
	}
	
	public void updateUser(signupModel u) {
		sd.save(u);
	}
	
	public void deleteUser(signupModel d) {
		sd.delete(d);
	}
	public signupModel getPlayerById(String email) {
		
		Optional<signupModel> pm=sd.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
	}

}
