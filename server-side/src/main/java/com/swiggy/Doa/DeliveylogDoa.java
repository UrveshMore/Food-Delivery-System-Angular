package com.swiggy.Doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiggy.Model.DeliveryloginModel;

public interface DeliveylogDoa extends JpaRepository<DeliveryloginModel,String>{

	DeliveryloginModel findByEmail(String email);
	

}