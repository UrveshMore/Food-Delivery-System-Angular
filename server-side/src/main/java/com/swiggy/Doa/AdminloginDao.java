package com.swiggy.Doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiggy.Model.AdminloginModel;

public interface AdminloginDao extends JpaRepository<AdminloginModel,String>{

	AdminloginModel findByEmail(String email);
	

}